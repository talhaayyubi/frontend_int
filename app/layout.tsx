import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codex UI/UX Sandbox",
  description: "GitHub repository UI built with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
