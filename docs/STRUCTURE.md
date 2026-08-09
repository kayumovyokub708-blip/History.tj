# Project Structure (Milestone 1)

## Frontend (`frontend/`)

```
src/
├── components/     # Reusable UI components (Button, Card, ...)
├── hooks/          # Custom React hooks
├── layouts/        # RootLayout, AuthLayout, AdminLayout
├── lib/            # utils (cn), helpers
├── pages/          # Route pages
├── services/       # API clients (axios)
├── App.tsx
├── main.tsx
└── index.css
```

## Backend (`backend/`)

```
app/
├── api/
│   └── v1/
│       ├── router.py
│       └── health.py
├── core/
│   ├── config.py
│   └── security.py
├── db/
│   └── session.py
├── models/
│   ├── user.py
│   └── admin.py
├── schemas/
│   └── user.py
└── main.py
```

## Next

- Add more models (Course, Quiz, ...)
- Alembic migrations
- Auth endpoints (Google + Admin)
- Admin panel routes
