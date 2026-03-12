import * as React from "react";
import type { ActionCardProps } from "@/features/admin/admin.types";

export function ActionCard({
  title,
  description,
  accent,
  background,
  href,
  icon,
}: ActionCardProps) {
  return (
    <a
      href={href}
      className="rounded-3xl border border-white bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]"
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
    </a>
  );
}
