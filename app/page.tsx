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
    <main className="w-full overflow-x-hidden pb-8">
      <section className="min-h-screen border-b border-[color:var(--border)]">
        <header className="border-b border-[color:var(--border)]">
          <div className="mx-auto flex h-[78px] w-full max-w-[1920px] items-center justify-between px-6 md:px-8 xl:px-10">
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
          </div>
        </header>

        <div className="relative isolate mx-auto grid w-full max-w-[1920px] lg:min-h-[calc(100vh-78px)] lg:grid-cols-[minmax(0,620px)_1fr]">
          <div aria-hidden="true" className="jx-landing-stage absolute inset-0" />

          <div className="relative z-10 px-7 pb-12 pt-10 md:px-12 md:pb-16 md:pt-14 xl:px-14 xl:pb-20 xl:pt-20">
            <span className="jeoxora-pill">AI-Powered Legal Academic Workspace</span>
            <h1 className="mt-6 max-w-[560px] text-[58px] leading-[0.96] text-[color:var(--text)] md:text-[76px] xl:text-[84px]">
              Master Law
              <br />
              <span className="jx-gradient-text">Intelligently.</span>
            </h1>
            <p className="mt-7 max-w-[470px] text-[16px] leading-8 text-[color:var(--text-muted)]">
              The all-in-one workspace for law students, bar reviewees, and
              future legal professionals. AI-powered. Focus-driven. Built for
              mastery.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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

            <div className="mt-12">
              <p className="text-xs font-medium text-[color:var(--text-muted)]">
                Trusted by future legal professionals
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {trustMarks.map((mark) => (
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-subtle)] font-[var(--font-mono)] text-xs text-[color:var(--text-muted)]"
                    key={mark}
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden lg:min-h-[calc(100vh-78px)] lg:overflow-visible">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-[4%] right-0 md:-left-[6%] lg:-left-[16%] xl:-left-[20%]"
            >
              <div
                className="absolute right-[16%] top-[10%] h-[64%] w-[56%] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--landing-hero-spotlight) 0%, transparent 72%)",
                }}
              />
              <div className="jx-landing-ring absolute right-[12%] top-1/2 h-[74%] w-[70%] -translate-y-1/2 rounded-full" />
              <div className="jx-landing-image-wrap absolute inset-0">
                <Image
                  alt="Lady Justice in a classical hall"
                  className="jx-landing-image scale-[1.03] object-[center_26%] lg:object-[center_22%] xl:object-[center_20%]"
                  fill
                  priority
                  sizes="(min-width: 1536px) 58vw, (min-width: 1024px) 52vw, 100vw"
                  src="/bglanding.png"
                />
              </div>
              <div className="jx-landing-particles absolute inset-0 opacity-80" />
              <div className="jx-landing-left-fade absolute inset-y-0 left-0 w-[42%] sm:w-[34%] lg:w-[40%]" />
              <div className="jx-landing-vignette absolute inset-y-0 right-0 w-[22%]" />
              <div className="jx-landing-bottom-fade absolute inset-x-0 bottom-0 h-32" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid w-full max-w-[1920px] gap-4 px-4 py-5 md:grid-cols-2 md:px-6 xl:grid-cols-5 xl:px-8"
        id="features"
      >
        {featureCards.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              className="border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5 shadow-[var(--shadow-soft)] md:p-6"
              key={feature.title}
              style={{ borderRadius: "18px" }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[color:var(--primary-soft)] text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-[22px] leading-tight text-[color:var(--text)]">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                {feature.description}
              </p>
            </article>
          );
        })}
      </section>

      <div className="mx-auto w-full max-w-[1920px] px-4 md:px-6 xl:px-8">
        <section className="flex flex-col gap-3 border-t border-[color:var(--border)] px-1 py-6 text-sm text-[color:var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <span>Built for law students, bar reviewees, and legal mastery.</span>
          <Link
            className="inline-flex items-center gap-2 font-medium text-[color:var(--primary)]"
            href="/workspace/dashboard"
          >
            Explore workspace <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
