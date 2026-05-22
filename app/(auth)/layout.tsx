import type { ReactNode } from "react";
import Image from "next/image";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="jx-grid-shell">
      <section className="jeoxora-shell relative flex min-h-[calc(100vh-24px)] items-center justify-center overflow-hidden px-4 py-10 md:px-8">
        <div className="absolute inset-0 bg-[color:var(--hero-overlay)]" />
        <Image
          alt="Classical law hall background"
          className="object-cover object-center opacity-60"
          fill
          priority
          sizes="100vw"
          src="/bglanding.png"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_42%)]" />
        <div
          className="absolute inset-y-0 left-0 hidden w-[28%] lg:block"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 hidden w-[28%] lg:block"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, transparent 100%)",
          }}
        />
        {children}
      </section>
    </main>
  );
}
