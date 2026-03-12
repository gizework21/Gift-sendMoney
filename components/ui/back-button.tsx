import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export type BackButtonProps = {
  href: string;
};

export function BackButton({ href }: BackButtonProps) {

  return (
    <Link
      href={href}
      className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-full border border-[#dcebe5] text-[#1c7c64]"
    >
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
