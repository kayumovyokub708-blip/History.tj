from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # Default SQLite for local demo.
    # Production: set DATABASE_URL to Neon connection string.
    DATABASE_URL: str = "sqlite:///./histori.db"
    SECRET_KEY: str = "histori-tj-change-me-in-production-use-long-random-string"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    FRONTEND_URL: str = "https://kayumovyokub708-blip.github.io"
    GOOGLE_CLIENT_ID: str = ""
    GOOGLE_CLIENT_SECRET: str = ""
    ENVIRONMENT: str = "development"
    ADMIN_EMAIL: str = "admin@histori.tj"
    ADMIN_PASSWORD: str = "admin123"
    ADMIN_NAME: str = "Admin"

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    return Settings()
