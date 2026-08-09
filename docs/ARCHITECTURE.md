# Architecture Overview

## High-level

```
Frontend (React + Vite)  ↔→  FastAPI Backend  ↔→  PostgreSQL
```

## Folders

- `frontend/` — React application
- `backend/` — FastAPI application
- `database/` — Models & migrations documentation
- `docs/` — Project documentation

## Next steps (Milestone 1 completion)

1. Finish basic FastAPI structure (routers, deps)
2. Set up SQLAlchemy models skeleton
3. Add Alembic
4. Connect frontend to backend health endpoint
5. Prepare for Auth (Milestone 3)
