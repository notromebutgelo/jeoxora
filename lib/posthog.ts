import { env, requireServerEnv } from "@/lib/env";

export function isPostHogConfigured() {
  return Boolean(env.NEXT_PUBLIC_POSTHOG_KEY && env.NEXT_PUBLIC_POSTHOG_HOST);
}

export function getPostHogConfig() {
  return {
    host: requireServerEnv("NEXT_PUBLIC_POSTHOG_HOST"),
    key: requireServerEnv("NEXT_PUBLIC_POSTHOG_KEY"),
  };
}
