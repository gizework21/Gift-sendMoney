"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import type { DropdownProps } from "@/types/ui";

export function Dropdown({
  trigger,
  children,
  align = "right",
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2"
      >
        {trigger}
      </button>
      {open ? (
        <div
          className={cn(
            "absolute z-50 mt-2 min-w-[160px] rounded-xl border border-[#e6e6e6] bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)]",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
