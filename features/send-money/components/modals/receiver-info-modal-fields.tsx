"use client";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import {
  InputField,
  LocationField,
  PhoneField,
  SelectedBankCard,
} from "@/features/send-money/components/modals/receiver-info-modal-inputs";
import {
  ContactPreferenceToggle,
  NoteField,
  TermsField,
} from "@/features/send-money/components/modals/receiver-info-modal-preferences";
import type { ReceiverInfo } from "@/features/send-money/send-money.types";

export const componentType = "client";

export function ReceiverInfoFields({
  errors,
  register,
  selectedBank,
  contactPreference,
  setValue,
  fieldClass,
}: {
  errors: FieldErrors<ReceiverInfo>;
  register: UseFormRegister<ReceiverInfo>;
  selectedBank: string;
  contactPreference: ReceiverInfo["contactPreference"];
  setValue: UseFormSetValue<ReceiverInfo>;
  fieldClass: (hasError?: boolean) => string;
}) {
  return (
    <div className="mt-4 p-6 sm:mt-6">
      <input type="hidden" {...register("contactPreference")} />
      <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
        <SelectedBankCard selectedBank={selectedBank} />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <InputField
              label="Receiver's Name"
              placeholder="Enter Full Name"
              className={fieldClass(!!errors.receiverName)}
              error={errors.receiverName?.message}
              inputProps={register("receiverName")}
            />
            <PhoneField
              className={fieldClass(!!errors.receiverPhone)}
              error={errors.receiverPhone?.message}
              inputProps={register("receiverPhone")}
            />
            <LocationField
              className={fieldClass(!!errors.dropOffLocation)}
              error={errors.dropOffLocation?.message}
              inputProps={register("dropOffLocation")}
            />
            <NoteField inputProps={register("note")} />
          </div>

          <div className="space-y-4">
            <InputField
              label="Sender Name"
              optional
              placeholder="Enter Full Name"
              className={fieldClass(!!errors.senderName)}
              inputProps={register("senderName")}
            />
            <ContactPreferenceToggle
              value={contactPreference}
              setValue={setValue}
            />
            <InputField
              label="Email Address"
              optional
              type="email"
              placeholder="Enter Email"
              className={fieldClass(!!errors.email)}
              error={errors.email?.message}
              inputProps={register("email")}
            />
            <TermsField
              error={errors.agree?.message}
              inputProps={register("agree")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
