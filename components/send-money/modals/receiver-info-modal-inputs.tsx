"use client";

import Image from "next/image";
import { Landmark } from "lucide-react";
import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";

export const componentType = "client";

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

function BankBadge() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe8]">
      <Landmark aria-hidden="true" className="h-4 w-4 text-[#caa575]" />
    </div>
  );
}

export function SelectedBankCard({ selectedBank }: { selectedBank: string }) {
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

export function InputField({
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

export function PhoneField({
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
          src="/ethIcon2.svg"
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

export function LocationField({
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
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          <Image src={"/locationIcon.svg"} width={30} height={20} alt="icon" />
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
