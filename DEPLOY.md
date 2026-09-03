# Histori.tj — Infrastructure Deploy (Windows)

## Ҳадаф

```
Frontend  → GitHub Pages (аллакай кор мекунад)
Backend   → Fly.io  →  https://histori-tj-api.fly.dev
Database  → Neon Postgres (free)  Ё  SQLite дар Fly (demo)
```

---

## 1) Neon Postgres (тавсия)

1. https://console.neon.tech → Sign up (GitHub)
2. **New Project** → ном: `histori-tj` → Region наздиктар (Frankfurt агар бошад)
3. **Connection string** нусхабардорӣ (Connection string → URI)
   - Шакл: `postgresql://user:pass@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`

Инро баъдтар ба Fly secrets мегузорем.

---

## 2) Fly CLI (Windows)

PowerShell **Administrator**:

```powershell
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

Терминалро бандед, аз нав кушоед:

```powershell
fly version
fly auth login
```

---

## 3) Deploy backend

```powershell
cd "C:\Users\Note Book\Desktop\таърих"
git pull origin main
cd backend

fly launch --name histori-tj-api --region fra --no-deploy --copy-config
```

Агар ном банд бошад: `--name histori-tj-api-2`

### Secrets

```powershell
fly secrets set SECRET_KEY="histori-prod-change-this-to-long-random-string-2026"
fly secrets set FRONTEND_URL="https://kayumovyokub708-blip.github.io"
fly secrets set ADMIN_EMAIL="admin@histori.tj"
fly secrets set ADMIN_PASSWORD="admin123"
fly secrets set ENVIRONMENT="production"
```

**Бо Neon** (муҳим барои маълумоти пойдор):

```powershell
fly secrets set DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
```

(без Neon: SQLite — маълумот ҳангоми restart гум мешавад)

### Deploy

```powershell
fly deploy
```

Санҷиш:

```powershell
fly status
fly open
```

Браузер:
- `https://histori-tj-api.fly.dev/api/v1/health`
- `https://histori-tj-api.fly.dev/docs`

---

## 4) Frontend → API

### Варианти A — Admin Settings (зуд)

1. https://kayumovyokub708-blip.github.io/History.tj/#/admin/login  
   `admin@histori.tj` / `admin123`
2. **Settings** → API URL: `https://histori-tj-api.fly.dev`
3. **Save & Test** → бояд Online шавад

### Варианти B — GitHub Actions (ба build мепайвандад)

Repo → **Settings** → **Secrets and variables** → **Actions** → **Variables**:

- Name: `VITE_API_URL`
- Value: `https://histori-tj-api.fly.dev`

Баъд push / re-run workflow.

### Варианти C — console

```js
localStorage.setItem("histori_api_url", "https://histori-tj-api.fly.dev")
location.reload()
```

---

## 5) Санҷиши пурра

1. Health OK
2. Сайт → Register user нав
3. Logout / Login
4. Admin login бо API

---

## Хатоҳои маъмул

| Хато | Ҳал |
|------|-----|
| `name already taken` | `--name histori-tj-api-YOURNAME` |
| CORS | `FRONTEND_URL` = `https://kayumovyokub708-blip.github.io` |
| DB connection | Neon URL бо `?sslmode=require` |
| Machine stopped | аввалин request machine-ро фаъол мекунад (cold start ~5–15s) |
| API offline дар сайт | URL-ро бе trailing slash гузоред |

---

## Checklist

- [ ] Neon project + connection string
- [ ] `fly auth login`
- [ ] `fly launch` + secrets + `DATABASE_URL`
- [ ] `fly deploy`
- [ ] `/api/v1/health` → OK
- [ ] Admin Settings → API URL
- [ ] Register / Login дар сайт
