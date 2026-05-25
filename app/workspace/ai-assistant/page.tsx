import {
  ExternalLink,
  Info,
  MessageSquareText,
  SendHorizonal,
  Sparkles,
} from "lucide-react";
import { EmptyState } from "@/components/layouts/empty-state";

const suggestedPrompts = [
  "Explain mens rea",
  "Summarize this case",
  "Generate recitation questions",
  "Compare two doctrines",
];

export default function AiAssistantPage() {
  return (
    <div className="space-y-4">
      <section className="flex flex-wrap items-start justify-between gap-4 px-1 py-2">
        <div>
          <h1 className="text-[38px] leading-tight text-[color:var(--text)]">
            AI Assistant
          </h1>
          <p className="mt-2 text-sm text-[color:var(--text-muted)]">
            Your legal study companion.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[color:var(--text-muted)]">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[color:var(--border)]"
            type="button"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[color:var(--border)]"
            type="button"
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.35fr_0.7fr]">
        <div className="jx-card p-6">
          <div className="rounded-[16px] bg-[color:var(--primary)] px-4 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(109,40,217,0.26)]">
            Explain the doctrine of stare decisis in simple terms.
          </div>
          <div className="mt-5 flex gap-3 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-4">
            <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="text-sm leading-7 text-[color:var(--text-muted)]">
              <p>
                Stare decisis is a legal principle that means &quot;to stand by
                things decided.&quot; It requires courts to follow legal principles
                established in previous decisions when the same issues arise
                again.
              </p>
              <p className="mt-4 font-medium text-[color:var(--text)]">
                In simple terms:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Courts should follow the rulings of higher courts.</li>
                <li>It promotes consistency and predictability in the law.</li>
                <li>It ensures equal treatment for similar cases.</li>
                <li>It strengthens the stability of the legal system.</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-3">
            <input
              className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--text-subtle)]"
              placeholder="Ask anything legal..."
            />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--primary)] text-white"
              type="button"
            >
              <SendHorizonal className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-xs text-[color:var(--text-subtle)]">
            AI can make mistakes. Verify important information.
          </p>
        </div>

        <aside className="jx-card p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
            Suggested Prompts
          </p>
          <div className="mt-4 space-y-2">
            {suggestedPrompts.length > 0 ? (
              suggestedPrompts.map((prompt) => (
                <button
                  className="flex w-full items-center gap-3 rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-3 text-left text-sm text-[color:var(--text-muted)]"
                  key={prompt}
                  type="button"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                  {prompt}
                </button>
              ))
            ) : (
              <EmptyState
                description="Suggested prompts will appear after your study context is connected."
                icon={MessageSquareText}
                title="No suggestions yet"
              />
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}
