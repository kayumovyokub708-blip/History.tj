# Histori.tj — Free Deploy Guide

## Architecture (free tier)

```
Frontend  →  Vercel (free)  OR  GitHub Pages (already works)
Backend   →  Fly.io (free allowance)
Database  →  Neon Postgres (free)  OR  SQLite on Fly (demo only)
```

Later: paid plans on same platforms, or Coolify/Dokploy on a VPS.

---

## A) Backend on Fly.io

### 1. Install Fly CLI
https://fly.io/docs/hands-on/install-flyctl/

```bash
# Windows (PowerShell)
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

### 2. Login & deploy

```bash
fly auth login
cd backend
fly launch --name histori-tj-api --region fra --no-deploy
```

Set secrets:

```bash
fly secrets set SECRET_KEY="paste-a-long-random-string-here"
fly secrets set FRONTEND_URL="https://kayumovyokub708-blip.github.io"
fly secrets set ADMIN_EMAIL="admin@histori.tj"
fly secrets set ADMIN_PASSWORD="admin123"
fly secrets set ENVIRONMENT="production"
```

Optional — Neon Postgres (recommended):

1. Create free project at https://neon.tech
2. Copy connection string
3. `fly secrets set DATABASE_URL="postgresql://..."`

Deploy:

```bash
fly deploy
```

Your API URL will look like: `https://histori-tj-api.fly.dev`

Test: `https://histori-tj-api.fly.dev/api/v1/health`

---

## B) Frontend on Vercel (optional, free)

1. https://vercel.com → Import GitHub repo `History.tj`
2. **Root Directory:** `frontend`
3. Framework: Vite
4. Env:
   - `VITE_API_URL` = `https://histori-tj-api.fly.dev`
5. Deploy

Vercel gives a clean URL without hash routing issues.

---

## C) Keep GitHub Pages (current)

Already deployed. After Fly API is live:

1. Open Admin → Settings
2. Paste API URL: `https://histori-tj-api.fly.dev`
3. Save & Test

Or in browser console:

```js
localStorage.setItem("histori_api_url", "https://histori-tj-api.fly.dev")
```

Optionally set GitHub Actions variable `VITE_API_URL` so builds bake in the API URL.

---

## D) Coolify / Dokploy (later)

When you rent a cheap VPS ($4–6/mo):

1. Install Coolify or Dokploy on the VPS
2. Connect the same GitHub repo
3. Deploy backend Docker + Postgres + (optional) frontend

Good for full control and lower long-term cost.

---

## Quick checklist

- [ ] `fly auth login`
- [ ] `cd backend && fly launch && fly secrets set ... && fly deploy`
- [ ] Health check OK
- [ ] Admin Settings → API URL
- [ ] Register a user on the live site
- [ ] (Optional) Neon for persistent DB
- [ ] (Optional) Vercel for frontend
