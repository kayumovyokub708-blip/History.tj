from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="History.tj API",
    description="Educational Platform for Tajikistan - Backend API",
    version="0.1.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "History.tj API",
        "version": "0.1.0",
        "status": "Milestone 1 - Foundation",
    }


@app.get("/health")
def health():
    return {"status": "ok"}
