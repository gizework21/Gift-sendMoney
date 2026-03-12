"use client";

import { ChevronDown } from "lucide-react";
import { signOut } from "next-auth/react";

import { Dropdown } from "@/components/ui/dropdown";
import { getInitials } from "@/lib/format";
import type { UserMenuProps } from "@/features/admin/admin.types";

export function UserMenu({ name, subtitle, theme = "dark" }: UserMenuProps) {
  const textColor = theme === "dark" ? "text-white" : "text-[#111]";
  const subTextColor =
    theme === "dark" ? "text-white/70" : "text-[#7d7d7d]";
  const avatarBg = theme === "dark" ? "bg-white/20" : "bg-[#f0f0f0]";
  const initialsColor = theme === "dark" ? "text-white" : "text-[#2a2a2a]";

  return (
    <Dropdown
      align="right"
      trigger={
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 overflow-hidden rounded-full ${avatarBg}`}>
            <div
              className={`flex h-full w-full items-center justify-center text-sm font-semibold ${initialsColor}`}
            >
              {getInitials(name)}
            </div>
          </div>
          <div className={`text-left text-sm ${textColor}`}>
            <p className="font-semibold">{name}</p>
            <p className={`text-xs ${subTextColor}`}>{subtitle}</p>
          </div>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </div>
      }
    >
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#111] hover:bg-[#f4f4f4]"
      >
        Log out
      </button>
    </Dropdown>
  );
}
