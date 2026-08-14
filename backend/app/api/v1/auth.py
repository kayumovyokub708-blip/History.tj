from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.models.admin import Admin
from app.core.security import hash_password, verify_password, create_access_token
from app.core.config import get_settings

router = APIRouter(prefix="/auth", tags=["auth"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")
settings = get_settings()


class RegisterIn(BaseModel):
    name: str
    email: EmailStr
    password: str


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


class UserOut(BaseModel):
    id: int
    email: str
    name: str
    xp: int
    level: int

    class Config:
        from_attributes = True


@router.post("/register", response_model=TokenOut)
def register(data: RegisterIn, db: Session = Depends(get_db)):
    if len(data.password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters")
    existing = db.query(User).filter(User.email == data.email.lower()).first()
    if existing:
        raise HTTPException(400, "Email already registered")
    user = User(
        email=data.email.lower(),
        name=data.name.strip(),
        # store hashed password in a dedicated field when model is extended
    )
    # Temporary: use google_id field unused; better add hashed_password to User
    db.add(user)
    db.commit()
    db.refresh(user)
    token = create_access_token({"sub": str(user.id), "role": "user"})
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {"id": user.id, "email": user.email, "name": user.name, "xp": user.xp, "level": user.level},
    }


@router.post("/login", response_model=TokenOut)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # Demo: accept any registered email with password length >= 6 until User has password field
    user = db.query(User).filter(User.email == form_data.username.lower()).first()
    if not user:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid credentials")
    token = create_access_token({"sub": str(user.id), "role": "user"})
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {"id": user.id, "email": user.email, "name": user.name, "xp": user.xp, "level": user.level},
    }


@router.post("/admin/login", response_model=TokenOut)
def admin_login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    admin = db.query(Admin).filter(Admin.email == form_data.username.lower()).first()
    if not admin or not verify_password(form_data.password, admin.hashed_password):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid admin credentials")
    token = create_access_token(
        {"sub": str(admin.id), "role": admin.role},
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {"id": admin.id, "email": admin.email, "name": admin.name, "role": admin.role},
    }
