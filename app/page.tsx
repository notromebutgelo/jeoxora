import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  CirclePlay,
  GraduationCap,
  Shield,
  Sparkles,
} from "lucide-react";
import { BrandMark } from "@/components/navigation/brand-mark";
import { Button } from "@/components/ui/button";

const featureCards = [
  {
    description: "Legal intelligence at your fingertips",
    icon: Bot,
    title: "AI Assistant",
  },
  {
    description: "Organize notes, cases, doctrines & more",
    icon: Sparkles,
    title: "Smart Workspace",
  },
  {
    description: "Study smarter with built-in focus tools",
    icon: Shield,
    title: "Focus & Productivity",
  },
  {
    description: "Remember more with spaced repetition",
    icon: GraduationCap,
    title: "Flashcards & Repetition",
  },
  {
    description: "Everything you need to ace the bar",
    icon: BriefcaseBusiness,
    title: "Bar Exam Ready",
  },
];

const trustMarks = ["Lex", "Juris", "Bar", "Case", "Rule", "Civ"];

export default function HomePage() {
  return (
    <main className="jx-grid-shell">
      <section className="jeoxora-shell overflow-hidden">
        <header className="flex h-[72px] items-center justify-between px-5 md:px-6">
          <BrandMark compact />
          <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--text-muted)] lg:flex">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <button className="flex items-center gap-1" type="button">
              Resources <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="#about">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild size="sm" variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </header>

        <div className="grid border-t border-[color:var(--border)] lg:grid-cols-[minmax(0,540px)_1fr]">
          <div className="px-6 pb-8 pt-8 md:px-10 md:pb-12 md:pt-12">
            <span className="jeoxora-pill">AI-Powered Legal Academic Workspace</span>
            <h1 className="mt-6 max-w-[520px] text-[58px] leading-[0.96] text-[color:var(--text)] md:text-[72px]">
              Master Law
              <br />
              <span className="jx-gradient-text">Intelligently.</span>
            </h1>
            <p className="mt-6 max-w-[420px] text-[15px] leading-8 text-[color:var(--text-muted)]">
              The all-in-one workspace for law students, bar reviewees, and
              future legal professionals. AI-powered. Focus-driven. Built for
              mastery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="min-w-[132px]" size="lg">
                <Link href="/register">Start Free</Link>
              </Button>
              <Button asChild className="min-w-[132px] gap-2" size="lg" variant="outline">
                <Link href="/workspace/dashboard">
                  <CirclePlay className="h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="mt-10">
              <p className="text-xs font-medium text-[color:var(--text-muted)]">
                Trusted by future legal professionals
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {trustMarks.map((mark) => (
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-subtle)] font-[var(--font-mono)] text-xs text-[color:var(--text-muted)]"
                    key={mark}
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden border-t border-[color:var(--border)] lg:min-h-[600px] lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),transparent_48%)]" />
            <div className="absolute inset-0 bg-[color:var(--hero-overlay)]" />
            <Image
              alt="Lady Justice in a classical hall"
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/bglanding.png"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-28"
              style={{
                background:
                  "linear-gradient(to top, var(--surface-strong) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
        </div>

        <div
          className="grid gap-3 border-t border-[color:var(--border)] p-4 md:grid-cols-2 xl:grid-cols-5"
          id="features"
        >
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="jx-subcard p-5" key={feature.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg text-[color:var(--text)]">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-[color:var(--border)] px-5 py-4 text-sm text-[color:var(--text-muted)] md:px-6">
          <span>Built for law students, bar reviewees, and legal mastery.</span>
          <Link
            className="inline-flex items-center gap-2 font-medium text-[color:var(--primary)]"
            href="/workspace/dashboard"
          >
            Explore workspace <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
