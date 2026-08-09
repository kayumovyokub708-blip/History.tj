# History.tj v2 — Educational Platform

**Learn → Practice → Compete → Win**

Educational platform for Tajikistan history and beyond.

## Vision
History.tj is not just a history website. It is a full educational platform where users can:
- Learn through structured courses
- Practice with quizzes
- Compete in duels and olympiads
- Earn XP, climb leaderboards, and unlock achievements

## Tech Stack

### Frontend
- React 18 +
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Backend
- FastAPI (Python)
- REST API

### Database
- PostgreSQL

### Auth
- Google OAuth (Students)
- Email + Password (Admin)
- JWT / Secure HTTP-only cookies

### Deployment (planned)
- Frontend → Vercel
- Backend → Render / Railway
- Database → Neon / Supabase / Render PostgreSQL

## Project Structure

```
History.tj/
│
├── frontend/          # React + TypeScript + Vite
├── backend/           # FastAPI
├── database/          # Models, migrations, seed
├── admin/             # Admin panel (or inside frontend)
├── shared/            # Shared types / constants
├── docs/              # Documentation
├── public/            # Static assets
├── .env.example
├── docker-compose.yml
├── README.md
└── package.json       # Root workspace (optional)
```

## Current Status

**Milestone 1 — Foundation / Architecture** (in progress)

Old static HTML files in the root are the **prototype** and content source.  
They will be gradually migrated into the new architecture.

## Roadmap Summary

1. Foundation (Architecture)
2. Design System
3. Authentication (Google + Admin)
4. PostgreSQL + Models
5. Admin Panel
6. Courses + Lessons
7. Quiz Engine
8. XP + Level System
9. Duels
10. Leaderboard
11. Olympiads
12. Analytics + Notifications + Achievements
13. Production deploy

---

Made with ❤️ for Tajikistan education.
