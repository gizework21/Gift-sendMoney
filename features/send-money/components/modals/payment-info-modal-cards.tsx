"use client";

import type { ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { MonthSelect, YearSelect } from "@/components/ui/date-picker";
import { COUNTRIES } from "@/features/send-money/send-money.constants";
import type { PaymentFieldsProps } from "@/features/send-money/send-money.types";

export const componentType = "client";

function PaymentField({
  error,
  label,
  children,
}: {
  error?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-[#2a2a2a]">{label}</label>
      {children}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}

const fieldClass = (hasError?: boolean) =>
  `h-11 rounded-2xl border-[#eef1f0] bg-white/90 ${
    hasError ? "border-red-400 ring-1 ring-red-200" : ""
  }`;

export function PaymentMethodCard({ errors, register }: PaymentFieldsProps) {
  return (
    <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold text-[#2a2a2a]">
        Choose your Payment method
      </p>

      <div className="mt-4 space-y-4">
        <PaymentField
          label="Card Number"
          error={errors.cardNumber?.message}
        >
          <Input
            placeholder="Card Number"
            inputMode="numeric"
            maxLength={16}
            className={fieldClass(!!errors.cardNumber)}
            {...register("cardNumber")}
          />
        </PaymentField>

        <PaymentField label="CVV" error={errors.cvv?.message}>
          <Input
            placeholder="CVV"
            inputMode="numeric"
            maxLength={4}
            className={fieldClass(!!errors.cvv)}
            {...register("cvv")}
          />
        </PaymentField>

        <div className="grid gap-3 sm:grid-cols-2">
          <PaymentField
            label="Expiry Date"
            error={errors.expiryMonth?.message}
          >
            <MonthSelect
              className={fieldClass(!!errors.expiryMonth)}
              {...register("expiryMonth")}
            />
          </PaymentField>
          <PaymentField label="Year" error={errors.expiryYear?.message}>
            <YearSelect
              className={fieldClass(!!errors.expiryYear)}
              {...register("expiryYear")}
            />
          </PaymentField>
        </div>
      </div>
    </div>
  );
}

export function BillingAddressCard({ errors, register }: PaymentFieldsProps) {
  return (
    <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold text-[#2a2a2a]">Billing Address</p>

      <div className="mt-4 space-y-4">
        <PaymentField label="Country*" error={errors.country?.message}>
          <>
            <Input
              list="country-list"
              placeholder="Select Country"
              className={fieldClass(!!errors.country)}
              {...register("country")}
            />
            <datalist id="country-list">
              {COUNTRIES.map((country) => (
                <option key={country} value={country} />
              ))}
            </datalist>
          </>
        </PaymentField>

        <PaymentField label="Address*" error={errors.address?.message}>
          <Input
            placeholder="Address"
            className={fieldClass(!!errors.address)}
            {...register("address")}
          />
        </PaymentField>

        <div className="grid gap-3 sm:grid-cols-2">
          <PaymentField label="City*" error={errors.city?.message}>
            <Input
              placeholder="City*"
              className={fieldClass(!!errors.city)}
              {...register("city")}
            />
          </PaymentField>
          <PaymentField
            label="Postal code / ZIP Code*"
            error={errors.postalCode?.message}
          >
            <Input
              placeholder="Postal code / ZIP Code"
              className={fieldClass(!!errors.postalCode)}
              {...register("postalCode")}
            />
          </PaymentField>
        </div>
      </div>
    </div>
  );
}
