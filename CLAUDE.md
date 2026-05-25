# CLAUDE.md — Jeoxora AI Development Guide

This file is the primary instruction document for any AI coding assistant working on the Jeoxora project.

Before making any code changes, read this file first.

---

## 1. Project Identity

Jeoxora is an AI-powered legal academic workspace built as a modern Progressive Web App for law students, bar reviewees, and aspiring legal professionals.

It is not a generic notes app.

Jeoxora is designed to feel like a premium legal-tech SaaS product inspired by Notion, Obsidian, Linear, and Forest.

Core product identity:

- Legal study workspace
- AI-powered learning assistant
- Reviewer and knowledge management platform
- Flashcard and active recall system
- Focus and productivity companion
- Legal analytics dashboard
- Future bar review and recitation simulator platform

Brand direction:

- Dark academia
- Minimalist productivity
- Premium SaaS interface
- Elegant typography
- Intelligent workspace UI

Primary colors:

- Primary: Deep Violet `#6D28D9`
- Background: Slate Black `#0F172A`
- Accent: Soft Gold `#D4A373`
- Text: Neutral White `#F8FAFC`

Typography direction:

- Serif headings
- Clean sans-serif body
- Editorial spacing
- Calm, focused interface

---

## 2. Current MVP Goal

The current goal is to build Jeoxora MVP V1 within 2–3 weeks using AI-assisted development.

Do not attempt to build the full long-term platform immediately.

Prioritize:

1. Clean architecture
2. Premium UI polish
3. Stable workspace experience
4. Core legal knowledge system
5. Limited but useful AI features
6. Flashcards
7. Focus mode
8. Basic analytics
9. PWA readiness

Avoid feature bloat.

---

## 3. Approved MVP Features

Only build these for MVP V1 unless explicitly instructed otherwise:

### Authentication

- Login
- Register
- Google OAuth
- Onboarding
- Protected routes

### Workspace

- Dashboard
- Sidebar navigation
- Topbar
- Mobile bottom navigation
- Settings page

### Knowledge Workspace

- Subjects
- Reviewers
- Rich text editor
- Markdown support
- Tags
- Search
- Autosave
- Basic file upload support

### AI Assistant

Only implement:

- Summarize reviewer
- Explain selected text or doctrine
- Generate reviewer from pasted notes
- Generate flashcards from notes

### Flashcards

- Manual flashcard creation
- AI-generated flashcards
- Review mode
- Mastery indicator

### Focus

- Pomodoro timer
- Study session tracking
- Streak card
- Ambient focus interface

### Analytics

- Study hours
- Review sessions
- Flashcard completion
- Subject distribution
- Streaks

---

## 4. Deferred Features

Do not build these yet unless explicitly requested:

- AI oral recitation simulator
- Terror professor mode
- Full bar review mode
- Advanced planner
- Admin dashboard
- Redis background workers
- Advanced AI queue system
- Multi-user collaboration
- Real-time multiplayer editing
- Doctrine graphing
- Push notification infrastructure
- Complex offline sync engine
- Payments and subscriptions
- Role-based enterprise permissions

These belong to V2 or later.

---

## 5. Tech Stack

Use the following stack unless the user explicitly changes it:

- Framework: Next.js 15
- Language: TypeScript
- Styling: Tailwind CSS
- UI System: shadcn/ui
- Icons: lucide-react
- Animation: framer-motion
- Database: PostgreSQL
- ORM: Prisma
- Authentication: Clerk
- AI: OpenAI API
- File Storage: Supabase Storage
- Analytics: PostHog
- State Management: Zustand
- Hosting: Vercel

Keep the stack simple for MVP.

---

## 6. Project Structure

Use this structure as the working source of truth:

```txt
jeoxora/
│
├── app/
│   ├── (landing)/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   ├── onboarding/
│   │   └── forgot-password/
│   │
│   ├── workspace/
│   │   ├── dashboard/
│   │   ├── knowledge/
│   │   ├── flashcards/
│   │   ├── focus/
│   │   ├── ai-assistant/
│   │   ├── analytics/
│   │   └── settings/
│   │
│   ├── api/
│   │   ├── ai/
│   │   ├── reviewers/
│   │   ├── flashcards/
│   │   ├── focus/
│   │   ├── analytics/
│   │   └── upload/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
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
│   ├── schema.prisma
│   └── migrations/
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── ai.ts
│   ├── storage.ts
│   ├── validations/
│   └── utils.ts
│
├── hooks/
├── store/
├── types/
├── utils/
├── public/
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

Do not randomly create new top-level folders unless necessary.

---

## 7. Development Rules for AI Assistants

### Always do this before editing

1. Read this `CLAUDE.md`.
2. Inspect the relevant files first.
3. Understand the existing structure.
4. Make the smallest safe change.
5. Preserve naming conventions.
6. Preserve route grouping.
7. Do not delete existing files without approval.
8. Do not rewrite unrelated modules.
9. Do not change the tech stack without approval.
10. Explain what changed after editing.

### Never do this

- Do not destroy the folder structure.
- Do not move files without reason.
- Do not mix feature logic directly into UI components.
- Do not hardcode secrets.
- Do not expose API keys.
- Do not create duplicate components.
- Do not introduce large dependencies without approval.
- Do not overbuild V2 features during MVP.
- Do not replace shadcn/ui styling patterns randomly.
- Do not make UI inconsistent with the dark academia SaaS style.

---

## 8. UI/UX Rules

Jeoxora should feel:

- Minimal
- Premium
- Calm
- Academic
- Spacious
- Focused
- Intelligent

Use:

- Dark background
- Soft borders
- Subtle glass effect
- Deep violet accents
- Soft gold highlights
- Large readable headings
- Clean card hierarchy
- Smooth hover states
- Good empty states
- Skeleton loaders
- Mobile-first responsiveness

Avoid:

- Overdesigned gradients
- Loud colors
- Cluttered dashboards
- Too many buttons
- Unnecessary widgets
- Generic student-app design
- Inconsistent spacing

---

## 9. Component Rules

Prefer component separation:

```txt
components/feature-name/
features/feature-name/
app/workspace/feature-name/
```

Use:

- `components/` for reusable UI
- `features/` for business logic and feature-specific helpers
- `lib/` for services and integrations
- `hooks/` for reusable hooks
- `store/` for Zustand stores
- `types/` for shared TypeScript types

---

## 10. Naming Conventions

Use:

- kebab-case for folders and files
- PascalCase for React components
- camelCase for functions and variables
- UPPER_CASE for environment variables

Examples:

```txt
reviewer-card.tsx
knowledge-toolbar.tsx
ai-chat-panel.tsx
use-reviewer-store.ts
```

---

## 11. Database MVP Models

Start with these models only:

- User
- Subject
- Reviewer
- Flashcard
- StudySession
- AIHistory
- UploadedFile

Do not overcomplicate the schema early.

---

## 12. API Route Rules

Use route handlers under `app/api`.

Recommended MVP routes:

```txt
app/api/ai/summarize/route.ts
app/api/ai/explain/route.ts
app/api/ai/generate-reviewer/route.ts
app/api/ai/generate-flashcards/route.ts
app/api/reviewers/route.ts
app/api/flashcards/route.ts
app/api/focus/route.ts
app/api/upload/route.ts
```

Validate input with Zod.

Return consistent JSON responses.

Do not expose stack traces in production responses.

---

## 13. AI Implementation Rules

AI should be helpful but controlled.

For MVP:

- Keep prompts simple and specific.
- Store AI history.
- Add loading states.
- Add error states.
- Add retry option.
- Avoid expensive multi-step agent flows.
- Avoid background queue complexity unless required.

AI output should support legal study, but must not present itself as legal advice.

Add a legal disclaimer when appropriate:

> Jeoxora assists with academic legal study and should not be treated as professional legal advice.

---

## 14. Git Workflow

Use clean commits.

Recommended branch flow:

```txt
main
dev
feature/*
fix/*
ui/*
```

Examples:

```bash
git checkout -b feature/auth-system
git checkout -b ui/workspace-shell
git checkout -b feature/knowledge-workspace
```

Commit style:

```txt
feat: add workspace sidebar
fix: resolve auth redirect issue
ui: polish dashboard cards
refactor: simplify reviewer store
chore: configure prisma
```

---

## 15. Definition of Done

A feature is done only when:

- It works on desktop
- It works on mobile
- It has loading states
- It has empty states
- It handles errors
- It follows the design system
- It does not break existing routes
- It does not introduce console errors
- It uses TypeScript properly
- It is committed with a clean message

---

## 16. Current Priority Order

Follow this order:

1. Project setup
2. Design system
3. Workspace shell
4. Auth
5. Dashboard
6. Knowledge workspace
7. Editor
8. AI assistant
9. Flashcards
10. Focus mode
11. Analytics
12. PWA polish
13. Deployment polish

Do not skip directly to advanced AI features.

---

## 17. MVP Delivery Phases and Progress Tracker

Use this tracker to mark what is already scaffolded in the repository and what still needs implementation.

Update this section whenever a phase materially changes.

### Phase 1 — Foundation and Project Setup

Status: Completed

Completed:

- [x] Next.js 15 + TypeScript starter is configured
- [x] Tailwind CSS starter is configured
- [x] Prisma schema includes the approved MVP models
- [x] App Router route structure is scaffolded
- [x] Shared folders for components, features, hooks, store, types, utils, and public assets are in place
- [x] Basic PWA manifest scaffold exists
- [x] Environment variable accessors are wired for database, Clerk, OpenAI, Supabase, and PostHog
- [x] Initial Prisma migration SQL has been generated
- [x] shadcn/ui base configuration and utility dependencies are initialized
- [x] Production-ready `error.tsx`, `global-error.tsx`, `loading.tsx`, and `not-found.tsx` scaffolds exist

Still needed:

- [ ] Add live service credentials in local/deployment environment files
- [ ] Apply `prisma migrate deploy` to the target PostgreSQL database once `DATABASE_URL` is available

### Phase 2 — Design System and Workspace Shell

Status: In progress

Completed:

- [x] Global dark academia visual direction is started
- [x] Root layout and global styles are in place
- [x] Light and dark theme tokens are implemented
- [x] Playfair/Inter/mono typography system is implemented
- [x] Landing page now follows the provided reference composition
- [x] Auth screens now follow the provided reference composition
- [x] Workspace shell now follows the provided reference composition
- [x] Sidebar navigation and mobile bottom navigation are styled to match the system
- [x] Core UI starter components have been added
- [x] Shared loading-state scaffolds exist
- [x] Dashboard, knowledge editor, flashcards, AI assistant, focus mode, analytics, and settings screens now have reference-based UI scaffolds
- [x] Route-level workspace skeleton loaders have been added for dashboard, knowledge, flashcards, focus, AI assistant, analytics, and settings
- [x] Shared polished empty-state component exists and is wired into data-driven workspace sections
- [x] Responsive layout hardening has been applied to the workspace shell and major workspace page grids
- [x] Component-level overflow fixes have been applied to dense analytics, flashcards, and focus layouts

Still needed:

- [ ] Finish final fine-grained visual polish against the exact reference measurements
- [ ] Perform browser-based responsive QA across mobile, tablet, and desktop
- [ ] Adjust any spacing, overflow, chart, or card issues found during responsive QA

### Phase 3 — Authentication

Status: In progress

Completed:

- [x] Login route scaffold exists
- [x] Register route scaffold exists
- [x] Onboarding route scaffold exists
- [x] Forgot-password route scaffold exists
- [x] Auth layout starter exists
- [x] Redirect and protected-route helper starters exist

Still needed:

- [ ] Integrate Clerk
- [ ] Add Google OAuth
- [ ] Enforce protected routes in middleware
- [ ] Persist onboarding data

### Phase 4 — Dashboard

Status: In progress

Completed:

- [x] Dashboard route scaffold exists
- [x] Starter dashboard cards/components exist

Still needed:

- [ ] Load real study metrics
- [ ] Show recent reviewer activity
- [ ] Connect quick actions to real flows

### Phase 5 — Knowledge Workspace

Status: In progress

Completed:

- [x] Knowledge route scaffold exists
- [x] Subject list starter exists
- [x] Reviewer list/card starters exist
- [x] Search/tag toolbar starters exist
- [x] Reviewer editor scaffolds exist
- [x] Autosave hook starter exists

Still needed:

- [ ] Implement subject CRUD
- [ ] Implement reviewer CRUD
- [ ] Add rich text or markdown editor behavior
- [ ] Connect search and tag filters to real data
- [ ] Persist autosave
- [ ] Implement file upload flow

### Phase 6 — AI Assistant

Status: In progress

Completed:

- [x] AI assistant route scaffold exists
- [x] API route placeholders exist for summarize, explain, generate-reviewer, and generate-flashcards
- [x] AI prompt/action helper starters exist
- [x] AI disclaimer component exists

Still needed:

- [ ] Integrate OpenAI API
- [ ] Store AI history
- [ ] Add loading, retry, and error states to the real flow
- [ ] Connect AI actions to reviewers and flashcards

### Phase 7 — Flashcards

Status: In progress

Completed:

- [x] Flashcards route scaffold exists
- [x] Manual flashcard form starter exists
- [x] Review card/deck starters exist
- [x] Mastery helper and validation starters exist
- [x] Flashcard Zustand store starter exists

Still needed:

- [ ] Implement flashcard CRUD
- [ ] Implement review mode flow
- [ ] Persist mastery updates
- [ ] Connect AI-generated flashcards to the database

### Phase 8 — Focus Mode

Status: In progress

Completed:

- [x] Focus route scaffold exists
- [x] Pomodoro hook starter exists
- [x] Focus controls and timer components exist
- [x] Study session validation/store starters exist

Still needed:

- [ ] Persist study sessions
- [ ] Connect streak tracking to stored session data
- [ ] Finish ambient focus experience polish

### Phase 9 — Analytics

Status: In progress

Completed:

- [x] Analytics route scaffold exists
- [x] Analytics helper/service starters exist
- [x] Analytics summary/chart starter components exist

Still needed:

- [ ] Build real aggregation queries
- [ ] Load study hours, review sessions, and flashcard completion from the database
- [ ] Add subject distribution and streak trend views from real data

### Phase 10 — PWA and Deployment Polish

Status: Not started

Completed:

- [x] Manifest scaffold exists
- [x] Starter logo and empty-state assets exist

Still needed:

- [ ] Finalize app icons
- [ ] Add service worker/offline strategy if included in MVP scope
- [ ] Add metadata and installability polish
- [ ] Configure Vercel deployment
- [ ] Integrate PostHog
- [ ] Run final production QA

### Current Overall State

Right now the repository is strongest in:

- project setup
- visual foundation
- reference-based UI scaffolding
- route scaffolding
- shared component and utility scaffolding

The repository still needs the most work in:

- real service integrations
- database-backed feature logic
- auth enforcement
- editor behavior
- AI execution
- analytics aggregation
- production responsiveness and final polish

---

## 18. Final Reminder for AI Assistants

Jeoxora should be built like a real SaaS product.

The MVP should feel premium, stable, and focused — not overloaded.

When unsure, choose:

- simpler architecture
- cleaner UI
- fewer features
- better polish
- safer changes
