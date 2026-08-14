# Neon Postgres for Histori.tj

Free tier keeps your users, admins, and future content after every redeploy.

## 1. Create project

1. Go to [https://console.neon.tech](https://console.neon.tech)
2. Sign up (GitHub works)
3. **New Project**
   - Name: `histori-tj`
   - Region: closest to you / to Fly (`Frankfurt` or `EU` if available)
   - Postgres version: default (16+)
4. Create

## 2. Copy connection string

In Neon dashboard → **Connection details**:

- Choose **Connection string**
- Role: default
- Database: `neondb` (or the one Neon created)
- Copy the URI — it looks like:

```
postgresql://neondb_owner:xxxxx@ep-cool-name-a1b2c3.eu-central-1.aws.neon.tech/neondb?sslmode=require
```

Important: keep `?sslmode=require` at the end.

## 3. Attach to Fly.io backend

```bash
cd backend
fly secrets set DATABASE_URL="postgresql://neondb_owner:xxxxx@ep-....neon.tech/neondb?sslmode=require"
fly deploy
```

On first start the API runs `create_all` and seeds admin:
- Email: `admin@histori.tj`
- Password: whatever you set in `ADMIN_PASSWORD`

## 4. Local development with Neon (optional)

In `backend/.env`:

```
DATABASE_URL=postgresql://...@....neon.tech/neondb?sslmode=require
SECRET_KEY=dev-secret
```

```bash
uvicorn app.main:app --reload --port 8000
```

## 5. Verify

1. Open `https://YOUR-API.fly.dev/docs`
2. `POST /api/v1/auth/register` with a test user
3. Redeploy (`fly deploy`) again
4. Login with the same user — data should still be there

## Free tier notes

- Neon free: limited storage & compute; auto-suspend after idle (cold start ~1s)
- Enough for MVP and early users
- Upgrade later when traffic grows

## Tables created automatically

- `users`
- `admins`

More tables (people, events, quizzes…) will be added as we build content APIs.
