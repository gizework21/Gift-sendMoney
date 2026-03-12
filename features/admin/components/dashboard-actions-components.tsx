"use client";

import type { ReactNode } from "react";

export const componentType = "client";

export function ActionTile({
  accent,
  background,
  description,
  icon,
  title,
}: {
  accent: string;
  background: string;
  description: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div
      className="rounded-3xl border border-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]"
      style={{ backgroundColor: background }}
    >
      <div className="flex items-center justify-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
          style={{ color: accent }}
        >
          {icon}
        </div>
      </div>
      <h3 className="mt-4 text-center text-sm font-bold text-[#111]">
        {title}
      </h3>
      <p className="mt-2 text-center text-xs text-[#6d6d6d]">{description}</p>
    </div>
  );
}
