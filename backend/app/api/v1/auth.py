from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from app.db.session import get_db
from app.models.user import User
from app.models.admin import Admin
from app.core.security import hash_password, verify_password, create_access_token
from app.core.config import get_settings

router = APIRouter(prefix="/auth", tags=["auth"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")
settings = get_settings()


class RegisterIn(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(min_length=6, max_length=128)


class LoginJSON(BaseModel):
    email: EmailStr
    password: str


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


def user_to_dict(user: User) -> dict:
    return {
        "id": str(user.id),
        "email": user.email,
        "name": user.name,
        "xp": user.xp,
        "level": user.level,
        "avatar": user.avatar,
    }


def admin_to_dict(admin: Admin) -> dict:
    return {
        "id": str(admin.id),
        "email": admin.email,
        "name": admin.name,
        "role": admin.role,
    }


@router.post("/register", response_model=TokenOut)
def register(data: RegisterIn, db: Session = Depends(get_db)):
    email = data.email.lower().strip()
    existing = db.query(User).filter(User.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=email,
        name=data.name.strip(),
        hashed_password=hash_password(data.password),
        xp=0,
        level=1,
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_access_token({"sub": str(user.id), "role": "user", "type": "user"})
    return {"access_token": token, "token_type": "bearer", "user": user_to_dict(user)}


@router.post("/login", response_model=TokenOut)
def login_form(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    """OAuth2 form login (username = email)."""
    return _login(form_data.username, form_data.password, db)


@router.post("/login/json", response_model=TokenOut)
def login_json(data: LoginJSON, db: Session = Depends(get_db)):
    """JSON login for SPA frontend."""
    return _login(data.email, data.password, db)


def _login(email: str, password: str, db: Session) -> dict:
    user = db.query(User).filter(User.email == email.lower().strip()).first()
    if not user or not user.hashed_password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    if user.is_banned or not user.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account disabled")
    if not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token({"sub": str(user.id), "role": "user", "type": "user"})
    return {"access_token": token, "token_type": "bearer", "user": user_to_dict(user)}


@router.post("/admin/login", response_model=TokenOut)
def admin_login(data: LoginJSON, db: Session = Depends(get_db)):
    admin = db.query(Admin).filter(Admin.email == data.email.lower().strip()).first()
    if not admin or not verify_password(data.password, admin.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid admin credentials")
    if not admin.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin disabled")

    token = create_access_token(
        {"sub": str(admin.id), "role": admin.role, "type": "admin"},
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {"access_token": token, "token_type": "bearer", "user": admin_to_dict(admin)}


@router.get("/me")
def me(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id = payload.get("sub")
        token_type = payload.get("type", "user")
        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    if token_type == "admin":
        admin = db.query(Admin).filter(Admin.id == int(user_id)).first()
        if not admin:
            raise HTTPException(status_code=401, detail="Admin not found")
        return admin_to_dict(admin)

    user = db.query(User).filter(User.id == int(user_id)).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user_to_dict(user)
