"use client";

import type { ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { MonthSelect, YearSelect } from "@/components/ui/date-picker";
import { COUNTRIES } from "@/lib/constants";

export const componentType = "client";

function PaymentField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-[#2a2a2a]">{label}</label>
      {children}
    </div>
  );
}

export function PaymentMethodCard() {
  return (
    <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold text-[#2a2a2a]">
        Choose your Payment method
      </p>

      <div className="mt-4 space-y-4">
        <PaymentField label="Card Number">
          <Input
            placeholder="Card Number"
            className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
          />
        </PaymentField>

        <PaymentField label="CVV">
          <Input
            placeholder="Card Number"
            className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
          />
        </PaymentField>

        <div className="grid gap-3 sm:grid-cols-2">
          <PaymentField label="Expiry Date">
            <MonthSelect />
          </PaymentField>
          <PaymentField label="Year">
            <YearSelect />
          </PaymentField>
        </div>
      </div>
    </div>
  );
}

export function BillingAddressCard() {
  return (
    <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold text-[#2a2a2a]">
        Billing Address <span className="text-[#9b9b9b]">(Optional)</span>
      </p>

      <div className="mt-4 space-y-4">
        <PaymentField label="Country*">
          <>
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
          </>
        </PaymentField>

        <PaymentField label="Address*">
          <Input
            placeholder="Card Number"
            className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
          />
        </PaymentField>

        <div className="grid gap-3 sm:grid-cols-2">
          <PaymentField label="City*">
            <Input
              placeholder="City*"
              className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
            />
          </PaymentField>
          <PaymentField label="Postal code / ZIP Code*">
            <Input
              placeholder="Postal code / ZIP Code"
              className="h-11 rounded-2xl border-[#eef1f0] bg-white/90"
            />
          </PaymentField>
        </div>
      </div>
    </div>
  );
}
