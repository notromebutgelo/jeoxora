import { Bell, Palette, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const settingGroups = [
  {
    description: "Profile details, school year, and study identity.",
    icon: Palette,
    title: "Account & Profile",
  },
  {
    description: "AI usage controls, output tone, and safety reminders.",
    icon: Sparkles,
    title: "AI Preferences",
  },
  {
    description: "Notifications, reminders, and session nudges.",
    icon: Bell,
    title: "Notifications",
  },
  {
    description: "Privacy settings, auth security, and data exports.",
    icon: ShieldCheck,
    title: "Security",
  },
];

export default function SettingsPage() {
  return (
    <section className="jx-card p-5 md:p-6">
      <h1 className="text-[34px] leading-tight text-[color:var(--text)]">
        Settings
      </h1>
      <p className="mt-2 text-sm text-[color:var(--text-muted)]">
        Configure the workspace experience before we connect the live services.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {settingGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="jx-subcard p-5" key={group.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-xl text-[color:var(--text)]">
                {group.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                {group.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button type="button">Save Preferences</Button>
        <Button type="button" variant="outline">
          Export Data
        </Button>
      </div>
    </section>
  );
}
