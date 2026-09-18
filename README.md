# Histori.tj

**Платформаи рақамӣ барои омӯзиш, кашф ва нигоҳдории таърихи Тоҷикистон ва Осиёи Марказӣ**

## Vision
Learn · Discover · Preserve

## Live
https://kayumovyokub708-blip.github.io/History.tj/

## Stack
- **Frontend:** React + TypeScript + Vite + Tailwind → `frontend/`
- **Backend:** FastAPI (in progress) → `backend/`
- **Database:** PostgreSQL (planned)

## Features
- Home, Encyclopedia, Timeline, Map
- Quiz, Courses, Leaderboard, Expeditions
- Teachers (Омӯзгорон) + китобҳо
- Video, Articles, Profile + XP
- Admin Panel
- Auth (Register / Login / OTP)
- i18n: тоҷикӣ / русский / English

## Admin
https://kayumovyokub708-blip.github.io/History.tj/#/admin/login  
Demo: `admin@histori.tj` / `admin123`

## Local development
```bash
cd frontend
npm install
npm run dev
```

Сайти зинда ҳар дафъа бо `push` ба `main` тавассути GitHub Actions аз `frontend/` deploy мешавад.

## Структура
```
History.tj/
├── frontend/     ← КОДИ АСОСӢ (React)
├── backend/      ← FastAPI
├── database/
├── docs/
└── китобхо/      ← захираҳои китоб (ихтиёрӣ)
```
