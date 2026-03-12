"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
export const componentType = "client";

function BackIconButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white shadow-sm"
      aria-label="Go back"
    >
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export function ModalIntro({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center px-6 pb-4 pt-6 text-center sm:p-6">
      <div className="mb-4 flex w-full justify-start md:hidden">
        <BackIconButton onClick={onBack} />
      </div>

      <Image src="/person.svg" width={120} height={100} alt="person icon" />
      <h2 className="mt-3 text-xl font-bold text-[#111]">
        Enter Gift Receiver Info
      </h2>
      <p className="mt-2 max-w-md text-sm text-[#6d6d6d]">
        Please provide the recipient&apos;s full name, address, and any special
        preferences. This will help us tailor the gift to their tastes.
      </p>
    </div>
  );
}

export function ModalActions({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="mt-auto w-full bg-white px-6 py-4 md:hidden">
        <Button
          type="submit"
          variant="primary"
          className="w-full rounded-2xl py-3 text-sm font-semibold md:py-5"
        >
          Continue
        </Button>
      </div>

      <div className="hidden w-full grid-cols-2 gap-4 bg-white px-7 py-4 md:grid">
        <Button
          type="button"
          variant="primaryOutline"
          onClick={onBack}
          className="py-3 text-sm font-semibold text-[#111] md:py-5"
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="rounded-2xl py-3 text-sm font-semibold md:py-5"
        >
          Continue
        </Button>
      </div>
    </>
  );
}
