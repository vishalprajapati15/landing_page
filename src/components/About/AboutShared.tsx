"use client";

import type { ReactNode } from "react";


export function Eyebrow({
  children,
  color = "cyan",
}: {
  children: ReactNode;
  color?: "cyan" | "purple" | "blue";
}) {
  const dot = {
    cyan: "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]",
    purple: "bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,0.9)]",
    blue: "bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]",
  }[color];

  const text = {
    cyan: "text-cyan-400/70",
    purple: "text-purple-400/70",
    blue: "text-blue-400/70",
  }[color];

  return (
    <div className="inline-flex items-center gap-3">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className={`text-[11px] font-medium uppercase tracking-[0.28em] ${text}`}>
        {children}
      </span>
    </div>
  );
}

export function Avatar({
  initials,
  size = "md",
}: {
  initials: string;
  size?: "md" | "lg";
}) {
  const dims = size === "lg" ? "h-40 w-40 text-4xl sm:h-48 sm:w-48" : "h-16 w-16 text-lg";

  return (
    <div
      className={`
        relative ${dims} shrink-0 rounded-full
        bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20
        border border-white/[0.10]
        flex items-center justify-center
        font-semibold text-white/85
      `}
    >
      <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.15)]" />
      <span className="relative">{initials}</span>
    </div>
  );
}

export function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}