"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ReceiverAccount } from "@/store/use-send-money-store";

export const componentType = "client";

type ReceiverAccountRegister = UseFormRegister<ReceiverAccount>;

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={onBack}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white shadow-sm"
        aria-label="Go back"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

export function ReceiverAccountIntro({ onBack }: { onBack: () => void }) {
  return (
    <>
      <BackButton onBack={onBack} />
      <div className="flex flex-col items-center text-center">
        <Image src="/person.svg" width={120} height={100} alt="person icon" />
        <h2 className="mt-3 text-xl font-bold text-[#111]">
          Enter Gift Receiver Info
        </h2>
        <p className="mt-2 max-w-md text-sm text-[#6d6d6d]">
          Please provide the recipient&apos;s full name, address, and any
          special preferences. This will help us tailor the gift to their
          tastes.
        </p>
      </div>
    </>
  );
}

export function ReceiverAccountFields({
  errors,
  fieldClass,
  register,
}: {
  errors: FieldErrors<ReceiverAccount>;
  fieldClass: (hasError?: boolean) => string;
  register: ReceiverAccountRegister;
}) {
  return (
    <div className="mt-4 rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm sm:mt-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold text-[#2a2a2a]">
          Receiver&apos;s Account Number
        </label>
        <div className="relative">
          <Input
            placeholder="Enter Account Number"
            className={`${fieldClass(!!errors.accountNumber)} pr-12`}
            {...register("accountNumber")}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#e9f7ee] p-2 text-(--color-primary)"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        {errors.accountNumber ? (
          <p className="text-xs text-red-500">{errors.accountNumber.message}</p>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[18px] border border-[#e3f0e6] bg-[#eef7ea] px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) text-xs font-bold text-white">
            PM
          </span>
          <div>
            <p className="text-sm font-semibold text-[#1c1c1c]">
              Solomon Kebede
            </p>
            <p className="text-xs text-[#4d4d4d]">103467648788909</p>
          </div>
        </div>
        <span className="text-(--color-primary)">
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-6 space-y-2">
        <label className="text-xs font-semibold text-[#2a2a2a]">
          Sender Name
        </label>
        <Input
          placeholder="Enter Full Name"
          className={fieldClass(!!errors.senderName)}
          {...register("senderName")}
        />
      </div>
    </div>
  );
}

export function ReceiverAccountActions({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="mt-auto w-full bg-white px-6 py-4 md:hidden">
        <Button
          type="submit"
          variant="primary"
          className="w-full rounded-2xl py-3 text-sm font-semibold"
        >
          Continue
        </Button>
      </div>

      <div className="hidden w-full grid-cols-2 gap-4 bg-white px-7 py-6 md:grid">
        <Button
          type="button"
          variant="primaryOutline"
          onClick={onBack}
          className="py-3 text-sm font-semibold text-[#111]"
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="rounded-2xl py-3 text-sm font-semibold"
        >
          Continue
        </Button>
      </div>
    </>
  );
}
