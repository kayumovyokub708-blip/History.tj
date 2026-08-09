from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    email: EmailStr
    name: str
    avatar: Optional[str] = None
    username: Optional[str] = None
    country: Optional[str] = "Tajikistan"


class UserCreate(UserBase):
    google_id: Optional[str] = None


class UserRead(UserBase):
    id: int
    xp: int
    level: int
    is_active: bool
    created_at: datetime
    last_login: Optional[datetime] = None

    class Config:
        from_attributes = True
