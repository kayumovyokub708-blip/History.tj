from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
from app.core.security import hash_password
from app.api.v1.router import api_router
from app.db.session import engine, SessionLocal, Base
from app.models.user import User  # noqa: F401
from app.models.admin import Admin  # noqa: F401

settings = get_settings()

app = FastAPI(
    title="Histori.tj API",
    description="Educational historical platform — Backend API",
    version="0.2.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.FRONTEND_URL,
        "https://kayumovyokub708-blip.github.io",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        admin = db.query(Admin).filter(Admin.email == settings.ADMIN_EMAIL.lower()).first()
        if not admin:
            admin = Admin(
                email=settings.ADMIN_EMAIL.lower(),
                name=settings.ADMIN_NAME,
                hashed_password=hash_password(settings.ADMIN_PASSWORD),
                role="superadmin",
                is_active=True,
            )
            db.add(admin)
            db.commit()
            print(f"Seeded admin: {settings.ADMIN_EMAIL}")
    finally:
        db.close()


@app.get("/")
def root():
    return {
        "message": "Histori.tj API",
        "version": "0.2.0",
        "docs": "/docs",
        "health": "/api/v1/health",
    }
