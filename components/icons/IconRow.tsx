"use client";
import { Sparkles, Github, LayoutDashboard } from "lucide-react";
export default function IconRow() {
  const cls = "size-6 text-zinc-300";
  return (
    <div className="flex items-center gap-4">
      <Sparkles className={cls} aria-label="Sparkles" />
      <Github className={cls} aria-label="GitHub" />
      <LayoutDashboard className={cls} aria-label="Dashboard" />
    </div>
  );
}
