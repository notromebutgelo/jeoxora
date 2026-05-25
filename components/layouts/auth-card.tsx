import type { ReactNode } from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { BrandMark } from "@/components/navigation/brand-mark";

type AuthCardProps = {
  children: ReactNode;
  subtitle: string;
  title: string;
};

export function AuthCard({ children, subtitle, title }: AuthCardProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[420px] rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-8 shadow-[var(--shadow-card)] backdrop-blur-xl md:p-10">
      <BrandMark compact className="justify-center" />
      <div className="mt-8 text-center">
        <h1 className="text-[38px] leading-tight text-[color:var(--text)]">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
          {subtitle}
        </p>
      </div>
      <div className="mt-8">{children}</div>
      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[color:var(--text-muted)]">
        <ShieldCheck className="h-3.5 w-3.5" />
        Your data is secure and encrypted
      </div>
      <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-[color:var(--surface-inset)] p-2 text-[color:var(--primary)]">
        <LockKeyhole className="h-4 w-4" />
      </div>
    </section>
  );
}
