"use client";

import { Icon } from "@iconify/react";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const componentType = "client";

function MastercardIcon() {
  return (
    <Icon icon="logos:mastercard" className="h-6 w-8" aria-hidden="true" />
  );
}

export function PaymentInfoHeader({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6">
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

      <div className="mt-4 md:mt-0">
        <h2 className="text-2xl font-bold text-[#111]">Payment Informations</h2>
        <p className="mt-1 text-sm text-[#6d6d6d]">
          Please enter your information and pay for your merchant
        </p>
      </div>
    </div>
  );
}

export function PaymentAmountCard() {
  return (
    <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[#2a2a2a]">
            Payment Amount
          </p>
          <p className="mt-1 text-lg font-bold text-[#111]">$ 281.25</p>
        </div>
        <div className="text-right">
          <MastercardIcon />
          <p className="text-[10px] text-[#6d6d6d]">Credit or Debit card</p>
        </div>
      </div>
    </div>
  );
}

export function PaymentInfoActions({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <>
      <div className="mt-auto w-full bg-white px-6 py-4 md:hidden">
        <Button
          type="button"
          variant="primary"
          onClick={onContinue}
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
          type="button"
          variant="primary"
          onClick={onContinue}
          className="rounded-2xl py-3 text-sm font-semibold"
        >
          Continue
        </Button>
      </div>
    </>
  );
}
