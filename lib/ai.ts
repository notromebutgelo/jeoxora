import { env, requireServerEnv } from "@/lib/env";

export const aiProvider = "openai";

export function isOpenAiConfigured() {
  return Boolean(env.OPENAI_API_KEY);
}

export function getOpenAiConfig() {
  return {
    apiKey: requireServerEnv("OPENAI_API_KEY"),
    model: env.OPENAI_MODEL ?? "gpt-4.1-mini",
  };
}
