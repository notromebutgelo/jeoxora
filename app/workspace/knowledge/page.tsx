import {
  Check,
  ChevronRight,
  CircleEllipsis,
  Link2,
  List,
  PenSquare,
  Share2,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const toolbarItems = ["H1", "H2", "B", "I", "U", "*", "1.", "[]", "Link", "Tag"];
const aiTools = ["Summarize", "Explain", "Improve", "Generate Q&A", "Create Flashcards"];
const tags = ["Constitutional Law", "Doctrine", "Separation of Powers"];

export default function KnowledgePage() {
  return (
    <section className="jx-card overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 border-b border-[color:var(--border)] px-5 py-4 text-xs text-[color:var(--text-muted)] md:px-6">
        <span>Knowledge</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>Constitutional Law Reviewer</span>
      </div>

      <div className="border-b border-[color:var(--border)] px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-[34px] leading-tight text-[color:var(--text)]">
              Separation of Powers
            </h1>
            <p className="mt-2 flex items-center gap-2 text-xs text-[color:var(--success)]">
              <Check className="h-3.5 w-3.5" />
              Saved
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[color:var(--border)] text-[color:var(--text-muted)]"
              type="button"
            >
              <Link2 className="h-4 w-4" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[color:var(--border)] text-[color:var(--text-muted)]"
              type="button"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <Button className="gap-2 px-4" size="sm">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {toolbarItems.map((item) => (
            <button
              className="flex h-9 min-w-9 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-3 text-xs font-medium text-[color:var(--text-muted)]"
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)]"
            type="button"
          >
            <CircleEllipsis className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="border-b border-[color:var(--border)] px-5 py-6 xl:border-b-0 xl:border-r xl:px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
            Outline
          </p>
          <article className="mt-5 max-w-[720px] text-[15px] leading-8 text-[color:var(--text-muted)]">
            <p>
              The doctrine of separation of powers is a fundamental principle
              that ensures the distribution of governmental powers among the
              legislative, executive, and judicial departments to prevent the
              concentration of power in any single branch.
            </p>
            <h2 className="mt-6 text-2xl text-[color:var(--text)]">Key Points</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Prevents abuse of power</li>
              <li>Promotes checks and balances</li>
              <li>Protects individual liberty</li>
              <li>Ensures efficient governance</li>
            </ul>
            <div className="mt-8 rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-inset)] p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-[color:var(--text)]">
                <PenSquare className="h-4 w-4 text-[color:var(--primary)]" />
                Editor note
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                Link this reviewer to constitutional doctrines and add a short
                examiner-style recap before converting it into flashcards.
              </p>
            </div>
          </article>
          <div className="mt-8 flex flex-wrap gap-6 text-xs text-[color:var(--text-subtle)]">
            <span>1,234 words</span>
            <span>Last edited 2h ago</span>
          </div>
        </div>

        <aside className="px-5 py-6 md:px-6">
          <div className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[color:var(--text)]">
                AI Tools
              </p>
              <Sparkles className="h-4 w-4 text-[color:var(--primary)]" />
            </div>
            <div className="mt-4 space-y-2">
              {aiTools.map((tool) => (
                <button
                  className="flex w-full items-center gap-3 rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-3 py-2.5 text-left text-sm text-[color:var(--text-muted)]"
                  key={tool}
                  type="button"
                >
                  <WandSparkles className="h-4 w-4 text-[color:var(--primary)]" />
                  {tool}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-4">
            <p className="text-sm font-semibold text-[color:var(--text)]">Tags</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1.5 text-xs font-medium text-[color:var(--primary)]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)]"
              type="button"
            >
              <List className="h-4 w-4" />
              Add Tag
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
