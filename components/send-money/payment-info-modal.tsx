"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { MonthSelect, YearSelect } from "@/components/ui/date-picker";
import { COUNTRIES } from "@/lib/constants";


export type PaymentInfoModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

function MastercardIcon() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true" className="h-6 w-8">
      <circle cx="14" cy="12" r="8" fill="#eb001b" />
      <circle cx="22" cy="12" r="8" fill="#f79e1b" />
      <circle cx="18" cy="12" r="8" fill="#ff5f00" />
    </svg>
  );
}

export function PaymentInfoModal({
  open,
  onBack,
  onContinue,
}: PaymentInfoModalProps) {
  return (
    <Modal
      open={open}
      onClose={onBack}
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-auto rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="p-6">
          <div className="md:hidden">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white shadow-sm"
              aria-label="Go back"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-[#111]">
              Payment Informations
            </h2>
            <p className="mt-1 text-sm text-[#6d6d6d]">
              Please enter your information and pay for your merchant
            </p>
          </div>

          <div className="mt-6 space-y-5">
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
                  <p className="text-[10px] text-[#6d6d6d]">
                    Credit or Debit card
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold text-[#2a2a2a]">
                Choose your Payment method
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Card Number
                  </label>
                  <Input
                    placeholder="Card Number"
                    className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    CVV
                  </label>
                  <Input
                    placeholder="Card Number"
                    className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2a2a2a]">
                      Expiry Date
                    </label>
                    <MonthSelect />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2a2a2a]">
                      Year
                    </label>
                    <YearSelect />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold text-[#2a2a2a]">
                Billing Address{" "}
                <span className="text-[#9b9b9b]">(Optional)</span>
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Country*
                  </label>
                  <Input
                    list="country-list"
                    placeholder="Select Country"
                    className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
                  />
                  <datalist id="country-list">
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country} />
                    ))}
                  </datalist>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Address*
                  </label>
                  <Input
                    placeholder="Card Number"
                    className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2a2a2a]">
                      City*
                    </label>
                    <Input
                      placeholder="City*"
                      className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2a2a2a]">
                      Postal code / ZIP Code*
                    </label>
                    <Input
                      placeholder="Postal code / ZIP Code"
                      className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full bg-white px-6 py-4 md:hidden">
          <Button
            type="button"
            variant="primary"
            onClick={onContinue}
            className="w-full py-3 text-sm font-semibold rounded-2xl"
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
            className="py-3 text-sm font-semibold rounded-2xl"
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
}
