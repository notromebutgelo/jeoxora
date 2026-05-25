import { Bell, Palette, ShieldCheck, Sparkles } from "lucide-react";
import { EmptyState } from "@/components/layouts/empty-state";
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
    <div className="space-y-4">
      <section className="px-1 py-2">
        <h1 className="text-[38px] leading-tight text-[color:var(--text)]">
          Settings
        </h1>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          Configure the workspace experience before we connect the live services.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {settingGroups.length > 0 ? (
          settingGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="jx-card p-6" key={group.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-[24px] leading-tight text-[color:var(--text)]">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                  {group.description}
                </p>
              </article>
            );
          })
        ) : (
          <EmptyState
            className="md:col-span-2"
            description="Preference groups will appear after account services are connected."
            icon={ShieldCheck}
            title="No settings available"
          />
        )}
      </section>

      <section className="flex flex-wrap gap-3">
        <Button type="button">Save Preferences</Button>
        <Button type="button" variant="outline">
          Export Data
        </Button>
      </section>
    </div>
  );
}
