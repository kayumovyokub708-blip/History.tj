from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from app.core.config import get_settings

settings = get_settings()

url = settings.DATABASE_URL.strip()

# Normalize Neon / Heroku style URLs for SQLAlchemy + psycopg2
if url.startswith("postgres://"):
    url = url.replace("postgres://", "postgresql://", 1)

connect_args: dict = {}
engine_kwargs: dict = {"pool_pre_ping": True}

if url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}
else:
    # Postgres (Neon, etc.)
    engine_kwargs["pool_size"] = 5
    engine_kwargs["max_overflow"] = 10
    if "sslmode" not in url:
        connect_args = {"sslmode": "require"}

engine = create_engine(url, connect_args=connect_args, **engine_kwargs)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
