import Link from "next/link";
import { Eye } from "lucide-react";
import { AuthCard } from "@/components/layouts/auth-card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <AuthCard
      subtitle="Sign in to continue your legal mastery journey."
      title="Welcome back"
    >
      <button
        className="jx-input flex items-center justify-center gap-3 text-sm font-medium"
        type="button"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#4285F4]">
          G
        </span>
        Continue with Google
      </button>

      <div className="my-5 flex items-center gap-3 text-xs text-[color:var(--text-subtle)]">
        <span className="h-px flex-1 bg-[color:var(--border)]" />
        or
        <span className="h-px flex-1 bg-[color:var(--border)]" />
      </div>

      <div className="space-y-4">
        <label className="block text-xs font-medium text-[color:var(--text-muted)]">
          Email address
          <input className="jx-input mt-2" defaultValue="you@jeoxora.com" />
        </label>
        <label className="block text-xs font-medium text-[color:var(--text-muted)]">
          Password
          <div className="relative mt-2">
            <input
              className="jx-input pr-11"
              defaultValue="************"
              type="password"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--text-subtle)]"
              type="button"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-[color:var(--text-muted)]">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <Link
          className="font-medium text-[color:var(--primary)]"
          href="/forgot-password"
        >
          Forgot password?
        </Link>
      </div>

      <Button className="mt-5 h-12 w-full rounded-[12px]" type="button">
        Log in
      </Button>
      <p className="mt-5 text-center text-sm text-[color:var(--text-muted)]">
        Don&apos;t have an account?{" "}
        <Link className="font-medium text-[color:var(--primary)]" href="/register">
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
}
