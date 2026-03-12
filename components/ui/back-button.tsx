"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export type BackButtonProps = {
  href: string;
};

export function BackButton({ href }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dcebe5] text-[#1c7c64]"
    >
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
