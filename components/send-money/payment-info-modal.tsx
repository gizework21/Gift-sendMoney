import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { MonthSelect, YearSelect } from "@/components/ui/date-picker";

const COUNTRIES = [
  "Ethiopia",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Belgium",
  "Ireland",
  "Portugal",
  "Greece",
  "Poland",
  "Turkey",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "South Africa",
  "Kenya",
  "Nigeria",
  "Ghana",
  "Rwanda",
  "Uganda",
  "Tanzania",
  "India",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "China",
  "Japan",
  "South Korea",
  "Australia",
  "New Zealand",
  "Brazil",
  "Mexico",
  "Argentina",
  "Chile",
];

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
      containerClassName="justify-end items-start p-[30px]"
      className="h-[calc(100vh-60px)] w-[94vw] max-w-[620px] overflow-auto rounded-[32px] border-[#dbe8e1] bg-[#f4fff7] p-0 shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="p-6">
          <div>
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

            <div className="rounded-[24px] border border-[#edf0ef] bg-white p-5 shadow-sm">
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

            <div className="rounded-[24px] border border-[#edf0ef] bg-white p-5 shadow-sm">
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

        <div className="grid grid-cols-2 gap-4 bg-white px-7 py-6">
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
