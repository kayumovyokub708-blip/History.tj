# Histori.tj

**Платформаи рақамӣ барои омӯзиш, кашф ва нигоҳдории таърихи Тоҷикистон ва Осиёи Марказӣ**

## Vision
Learn · Discover · Preserve

## Live (версияи нав — React)
https://kayumovyokub708-blip.github.io/History.tj/

> **Муҳим:** Сайти зинда аз папкаи `frontend/` сохта мешавад (React + TypeScript + Vite).
> Файлҳои HTML дар решаи репозиторий (`index.html`, `heroes.html`, `events.html` ва ғ.) — **прототипи кӯҳна** ҳастанд ва дигар истифода намешаванд.
> Агар дар GitHub кодҳои кӯҳна дида шаванд, шумо эҳтимолан HTML-ҳои решаро мебинед, на `frontend/src/`.

## Stack
- Frontend: React + TypeScript + Vite + Tailwind → `frontend/`
- Backend: FastAPI (in progress) → `backend/`
- Database: PostgreSQL (planned)

## MVP 1.0+
- Branding & Design System
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
├── frontend/          ← КОДИ АСОСӢ (React) — ин ҷо тағйир диҳед
│   └── src/
│       ├── pages/     ← Саҳифаҳо (Home, Teachers, Quiz, ...)
│       ├── data/      ← Маълумот (people, quizzes, ...)
│       ├── layouts/
│       └── i18n/
├── backend/           ← FastAPI
├── index.html         ← прототипи кӯҳна (истифода намешавад)
├── heroes.html        ← прототипи кӯҳна
└── ...
```
