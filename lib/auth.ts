import { env, requireServerEnv } from "@/lib/env";

export const authProvider = "clerk";

export function isClerkConfigured() {
  return Boolean(
    env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && env.CLERK_SECRET_KEY,
  );
}

export function getClerkConfig() {
  return {
    publishableKey: requireServerEnv("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"),
    secretKey: requireServerEnv("CLERK_SECRET_KEY"),
    signInUrl: env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/login",
    signUpUrl: env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/register",
  };
}
