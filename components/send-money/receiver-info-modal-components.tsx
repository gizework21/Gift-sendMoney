"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ReceiverInfo } from "@/store/use-send-money-store";

type ReceiverInfoErrors = FieldErrors<ReceiverInfo>;
type ReceiverInfoRegister = UseFormRegister<ReceiverInfo>;
type FieldClassNameResolver = (hasError?: boolean) => string;

function BankBadge() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe8]">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M12 3 3 7.5V9h18V7.5L12 3Zm-7 8h2v7H5v-7Zm6 0h2v7h-2v-7Zm6 0h2v7h-2v-7ZM4 20h16v-2H4v2Z"
          fill="#caa575"
        />
      </svg>
    </div>
  );
}

function BackIconButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
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
  );
}

export function ModalIntro({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center p-6 text-center">
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

function SelectedBankCard({ selectedBank }: { selectedBank: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[18px] border border-[#edf0ef] bg-[#fafafa] px-4 py-3">
      <BankBadge />
      <div>
        <p className="text-sm font-semibold text-[#1c1c1c]">
          {selectedBank || "Commercial Bank of Ethiopia"}
        </p>
        <p className="text-xs text-[#9b9b9b]">Selected Bank</p>
      </div>
    </div>
  );
}

function FieldLabel({
  children,
  optional,
}: {
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <label className="text-xs font-semibold text-[#2a2a2a]">
      {children}
      {optional ? <span className="text-[#9b9b9b]"> (Optional)</span> : null}
    </label>
  );
}

function FieldErrorText({ message }: { message?: string }) {
  return message ? <p className="text-xs text-red-500">{message}</p> : null;
}

function InputField({
  label,
  error,
  inputProps,
  optional,
  type,
  placeholder,
  className,
}: {
  label: ReactNode;
  error?: string;
  inputProps: UseFormRegisterReturn;
  optional?: boolean;
  type?: string;
  placeholder: string;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel optional={optional}>{label}</FieldLabel>
      <Input
        type={type}
        placeholder={placeholder}
        className={className}
        {...inputProps}
      />
      <FieldErrorText message={error} />
    </div>
  );
}

function PhoneField({
  error,
  inputProps,
  className,
}: {
  error?: string;
  inputProps: UseFormRegisterReturn;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel>Receiver&apos;s Phone Number</FieldLabel>
      <div className="relative">
        <Image
          src="/ethIcon.svg"
          width={24}
          height={24}
          alt="icon"
          className="absolute left-3 top-2.5 h-6 w-6"
        />
        <Input
          type="tel"
          placeholder="+2519 00101010"
          className={`${className} pl-12`}
          {...inputProps}
        />
      </div>
      <FieldErrorText message={error} />
    </div>
  );
}

function LocationField({
  error,
  inputProps,
  className,
}: {
  error?: string;
  inputProps: UseFormRegisterReturn;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel>Drop off Location</FieldLabel>
      <div className="relative">
        <Input
          placeholder="Enter Drop off Location"
          className={`${className} pr-10`}
          {...inputProps}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--color-primary)]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <path
              d="M12 3a6 6 0 0 0-6 6c0 4.4 6 12 6 12s6-7.6 6-12a6 6 0 0 0-6-6Zm0 8.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      <FieldErrorText message={error} />
      <div className="flex items-center gap-2 rounded-full bg-[#fff7c8] px-3 py-2 text-xs text-[#8a6b00]">
        <span className="text-sm">📍</span>
        Delivery available only within Addis Ababa.
      </div>
    </div>
  );
}

function NoteField({ inputProps }: { inputProps: UseFormRegisterReturn }) {
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

function ContactPreferenceToggle({
  value,
  setValue,
}: {
  value: ReceiverInfo["contactPreference"];
  setValue: UseFormSetValue<ReceiverInfo>;
}) {
  const setPreference = (nextValue: ReceiverInfo["contactPreference"]) => {
    setValue("contactPreference", nextValue, {
      shouldValidate: true,
    });
  };

  return (
    <div className="space-y-2">
      <FieldLabel>Contact Preference</FieldLabel>
      <div className="flex rounded-full bg-[#f1f1f1] p-1 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setPreference("email")}
          className={`flex-1 rounded-full px-3 py-2 transition ${
            value === "email"
              ? "bg-white text-[#0f7b79] shadow-sm"
              : "text-[#6d6d6d]"
          }`}
        >
          Email
        </button>
        <button
          type="button"
          onClick={() => setPreference("phone")}
          className={`flex-1 rounded-full px-3 py-2 transition ${
            value === "phone"
              ? "bg-white text-[#0f7b79] shadow-sm"
              : "text-[#6d6d6d]"
          }`}
        >
          Phone
        </button>
      </div>
    </div>
  );
}

function TermsField({
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

export function ReceiverInfoFields({
  errors,
  register,
  selectedBank,
  contactPreference,
  setValue,
  fieldClass,
}: {
  errors: ReceiverInfoErrors;
  register: ReceiverInfoRegister;
  selectedBank: string;
  contactPreference: ReceiverInfo["contactPreference"];
  setValue: UseFormSetValue<ReceiverInfo>;
  fieldClass: FieldClassNameResolver;
}) {
  return (
    <div className="mt-6 p-6">
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

export function ModalActions({ onBack }: { onBack: () => void }) {
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

      <div className="hidden w-full grid-cols-2 gap-4 bg-white px-7 py-4 md:grid">
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
