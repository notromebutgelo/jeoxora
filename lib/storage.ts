import { env, requireServerEnv } from "@/lib/env";

export const storageProvider = "supabase";

export function isSupabaseConfigured() {
  return Boolean(
    env.NEXT_PUBLIC_SUPABASE_URL &&
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export function getSupabaseStorageConfig() {
  return {
    anonKey: requireServerEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    bucket: env.SUPABASE_STORAGE_BUCKET ?? "reviewer-uploads",
    serviceRoleKey: requireServerEnv("SUPABASE_SERVICE_ROLE_KEY"),
    url: requireServerEnv("NEXT_PUBLIC_SUPABASE_URL"),
  };
}
