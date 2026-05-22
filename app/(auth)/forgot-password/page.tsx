import Link from "next/link";
import { AuthCard } from "@/components/layouts/auth-card";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      subtitle="Enter the email address linked to your Jeoxora account."
      title="Recover your access"
    >
      <label className="block text-xs font-medium text-[color:var(--text-muted)]">
        Email address
        <input className="jx-input mt-2" defaultValue="you@jeoxora.com" />
      </label>
      <Button className="mt-5 h-12 w-full rounded-[12px]" type="button">
        Send reset link
      </Button>
      <p className="mt-5 text-center text-sm text-[color:var(--text-muted)]">
        Remembered your password?{" "}
        <Link className="font-medium text-[color:var(--primary)]" href="/login">
          Back to login
        </Link>
      </p>
    </AuthCard>
  );
}
