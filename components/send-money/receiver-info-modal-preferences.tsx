"use client";

import type { ReactNode } from "react";
import type { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import type { ReceiverInfo } from "@/store/use-send-money-store";

export const componentType = "client";

function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="text-xs font-semibold text-[#2a2a2a]">{children}</label>;
}

function FieldErrorText({ message }: { message?: string }) {
  return message ? <p className="text-xs text-red-500">{message}</p> : null;
}

export function NoteField({ inputProps }: { inputProps: UseFormRegisterReturn }) {
  return (
    <div className="space-y-2">
      <FieldLabel>Note</FieldLabel>
      <Textarea
        placeholder="Add Note"
        className="min-h-22.5 rounded-2xl border-[#eef1f0] bg-white/90"
        {...inputProps}
      />
    </div>
  );
}

export function ContactPreferenceToggle({
  value,
  setValue,
}: {
  value: ReceiverInfo["contactPreference"];
  setValue: UseFormSetValue<ReceiverInfo>;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel>Contact Preference</FieldLabel>
      <div className="flex rounded-full bg-[#f1f1f1] p-1 text-xs font-semibold">
        {(["email", "phone"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() =>
              setValue("contactPreference", option, { shouldValidate: true })
            }
            className={`flex-1 rounded-full px-3 py-2 capitalize transition ${
              option === value
                ? "bg-white text-[#0f7b79] shadow-sm"
                : "text-[#6d6d6d]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TermsField({
  error,
  inputProps,
}: {
  error?: string;
  inputProps: UseFormRegisterReturn;
}) {
  return (
    <>
      <div className="mt-6 flex items-start gap-2 text-xs text-[#2a2a2a]">
        <Checkbox className="mt-0.5" {...inputProps} />
        <span>
          I have read &amp; agree to the
          <span className="font-semibold text-[#0f7b79]">
            {" "}
            Terms &amp; Conditions
          </span>
          .
        </span>
      </div>
      <FieldErrorText message={error} />
    </>
  );
}
