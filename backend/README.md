# Histori.tj Backend

FastAPI + SQLAlchemy + JWT

## Local

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

- Docs: http://localhost:8000/docs
- Health: http://localhost:8000/api/v1/health
- Default admin: `admin@histori.tj` / `admin123`

## Deploy on Render

1. Go to https://render.com → New → Blueprint
2. Connect GitHub repo `History.tj`
3. Use `backend/render.yaml` or create Web Service:
   - **Root Directory:** `backend`
   - **Build:** `pip install -r requirements.txt`
   - **Start:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Env vars:
   - `SECRET_KEY` = long random string
   - `FRONTEND_URL` = `https://kayumovyokub708-blip.github.io`
   - `ADMIN_EMAIL` = `admin@histori.tj`
   - `ADMIN_PASSWORD` = your password
   - `DATABASE_URL` = Postgres connection string (Neon or Render Postgres)

If no Postgres yet, SQLite works for demo (data resets on redeploy).

## Auth endpoints

- `POST /api/v1/auth/register` `{ name, email, password }`
- `POST /api/v1/auth/login/json` `{ email, password }`
- `POST /api/v1/auth/admin/login` `{ email, password }`
- `GET /api/v1/auth/me` (Bearer token)
