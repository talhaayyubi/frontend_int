import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Codex UI/UX Sandbox",
  description: "Next.js + Tailwind v4 seed (local Geist fonts for offline builds)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.className}`}>
      <body className="min-h-dvh antialiased bg-surface text-zinc-200">{children}</body>
    </html>
  );
}
