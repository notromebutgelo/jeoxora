const environmentKeys = [
  "NEXT_PUBLIC_APP_URL",
  "DATABASE_URL",
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "NEXT_PUBLIC_CLERK_SIGN_IN_URL",
  "NEXT_PUBLIC_CLERK_SIGN_UP_URL",
  "OPENAI_API_KEY",
  "OPENAI_MODEL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_POSTHOG_KEY",
  "NEXT_PUBLIC_POSTHOG_HOST",
] as const;

export type EnvironmentKey = (typeof environmentKeys)[number];

function readEnv(key: EnvironmentKey) {
  const value = process.env[key];
  return typeof value === "string" && value.trim().length > 0 ? value : undefined;
}

export const env = Object.freeze(
  environmentKeys.reduce(
    (accumulator, key) => {
      accumulator[key] = readEnv(key);
      return accumulator;
    },
    {} as Record<EnvironmentKey, string | undefined>,
  ),
);

export function requireServerEnv(key: EnvironmentKey) {
  const value = env[key];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}. Add it to .env.local before using this service.`,
    );
  }

  return value;
}

export function isEnvConfigured(...keys: EnvironmentKey[]) {
  return keys.every((key) => Boolean(env[key]));
}
