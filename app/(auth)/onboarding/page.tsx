import { ArrowRight } from "lucide-react";
import { AuthCard } from "@/components/layouts/auth-card";
import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  return (
    <AuthCard
      subtitle="This helps us tailor Jeoxora to your legal journey."
      title="Let's personalize your workspace"
    >
      <div className="space-y-4">
        <label className="block text-xs font-medium text-[color:var(--text-muted)]">
          What is your law school year?
          <select className="jx-input mt-2">
            <option>2nd Year</option>
            <option>1st Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </label>
        <label className="block text-xs font-medium text-[color:var(--text-muted)]">
          What is your primary focus?
          <select className="jx-input mt-2">
            <option>Bar Exam Preparation</option>
            <option>Daily Coursework</option>
            <option>Case Digests</option>
          </select>
        </label>
        <div>
          <p className="text-xs font-medium text-[color:var(--text-muted)]">
            Select your key subjects
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Constitutional Law",
              "Criminal Law",
              "Civil Law",
              "Property Law",
              "Evidence",
              "Torts",
            ].map((subject, index) => (
              <span
                className={
                  index < 4
                    ? "rounded-full bg-[color:var(--primary-soft)] px-3 py-1.5 text-xs font-medium text-[color:var(--primary)]"
                    : "rounded-full border border-[color:var(--border)] px-3 py-1.5 text-xs font-medium text-[color:var(--text-muted)]"
                }
                key={subject}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--border)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--border)]" />
        </div>
        <Button className="gap-2" type="button">
          Next <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </AuthCard>
  );
}
