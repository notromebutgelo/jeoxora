import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/layouts/theme-provider";
import { env } from "@/lib/env";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Jeoxora",
    template: "%s | Jeoxora",
  },
  description: "AI-powered legal academic workspace for focused legal study.",
  icons: {
    icon: "/logo-mark.svg",
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#faf8f5", media: "(prefers-color-scheme: light)" },
    { color: "#070a12", media: "(prefers-color-scheme: dark)" },
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} ${playfairDisplay.variable}`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('jeoxora-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}",
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
