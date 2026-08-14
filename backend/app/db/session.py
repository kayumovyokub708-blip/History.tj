from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from app.core.config import get_settings

settings = get_settings()

url = settings.DATABASE_URL

# Neon / managed Postgres often needs SSL
connect_args = {}
if url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}
elif url.startswith("postgres"):
    # Neon requires SSL; if not in URL, enable it
    if "sslmode" not in url:
        connect_args = {"sslmode": "require"}

engine = create_engine(
    url,
    pool_pre_ping=True,
    pool_size=5,
    max_overflow=10,
    connect_args=connect_args,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
