# Jeoxora

**Jeoxora — The AI-Powered Legal Academic Workspace**

Jeoxora is a modern Progressive Web App designed for law students, bar reviewees, and future legal professionals.

It combines legal knowledge management, AI-powered study assistance, flashcards, focus productivity, and learning analytics into one unified academic workspace.

---

## Product Vision

Jeoxora is a digital operating system built specifically for legal education.

It is designed to help law students organize reviewers, understand doctrines, prepare for recitations, retain legal concepts, and study with more structure.

---

## MVP Scope

The current MVP focuses on:

- Authentication
- Workspace dashboard
- Legal knowledge workspace
- Reviewer editor
- AI summarizer
- AI doctrine explainer
- AI reviewer generator
- Flashcards
- Focus timer
- Basic analytics
- PWA-ready mobile experience

Deferred features:

- Full bar review mode
- AI oral recitation simulator
- Advanced planner
- Admin dashboard
- Push notifications
- Collaboration
- Advanced offline sync

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | Clerk |
| AI | OpenAI API |
| Storage | Supabase Storage |
| Analytics | PostHog |
| State | Zustand |
| Hosting | Vercel |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/jeoxora.git
cd jeoxora
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Add the required credentials:

```env
DATABASE_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
OPENAI_API_KEY=""
NEXT_PUBLIC_SUPABASE_URL=""
SUPABASE_SERVICE_ROLE_KEY=""
NEXT_PUBLIC_POSTHOG_KEY=""
```

### 4. Setup Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Recommended Git Setup

If starting from a fresh local folder:

```bash
git init
git add .
git commit -m "chore: initialize jeoxora project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jeoxora.git
git push -u origin main
```

Create a development branch:

```bash
git checkout -b dev
git push -u origin dev
```

---

## Branch Naming

Use:

```txt
feature/auth-system
feature/knowledge-workspace
feature/ai-assistant
feature/flashcards
feature/focus-mode
ui/workspace-shell
fix/auth-redirect
```

---

## Commit Style

Use clean commit messages:

```txt
feat: add workspace sidebar
feat: implement reviewer editor
ui: polish dashboard layout
fix: resolve mobile navigation spacing
chore: configure prisma
refactor: simplify ai service
```

---

## Project Structure

```txt
jeoxora/
│
├── app/
│   ├── (landing)/
│   ├── (auth)/
│   ├── workspace/
│   ├── api/
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── layouts/
│   ├── navigation/
│   ├── dashboard/
│   ├── knowledge/
│   ├── editor/
│   ├── ai/
│   ├── flashcards/
│   ├── focus/
│   └── analytics/
│
├── features/
│   ├── auth/
│   ├── workspace/
│   ├── knowledge/
│   ├── ai/
│   ├── flashcards/
│   ├── focus/
│   └── analytics/
│
├── prisma/
├── lib/
├── hooks/
├── store/
├── types/
├── utils/
├── public/
└── middleware.ts
```

---

## AI Assistant Development Rule

Before making changes, AI coding assistants must read:

```txt
CLAUDE.md
```

That file contains the project rules, MVP boundaries, UI direction, naming conventions, and safety instructions.

---

## License

Private project.
