"use client";

import { useState } from "react";
import Image from "next/image";
import { type UseFormRegister } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import type { LoginFormValues } from "@/features/auth/auth.types";

export const componentType = "client";

export const AuthHero = () => (
  <section className="hidden md:flex min-h-full flex-col items-center justify-center bg-[#eaffed] px-6 py-10 sm:px-8 sm:py-12 lg:rounded-4xl lg:px-10 lg:py-16">
    <div className="flex flex-col text-center">
      <div className="flex justify-center">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={300}
            height={310}
            alt="STAR Gifts logo"
            priority
            className="h-auto w-50 sm:w-60 lg:w-75 cursor-pointer"
          />
        </Link>
      </div>
      <p className="mt-4 max-w-md text-sm text-[#9b9b9b]">
        Explore and purchase a variety of special gifts through STAR Gifts, with
        easy and secure payment options.
      </p>
    </div>
  </section>
);

export const AuthCardHeader = ({ description }: { description: string }) => (
  <div className="text-center">
    <div className="flex justify-center">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={130}
          height={100}
          alt="STAR Gifts logo"
          className="h-auto w-25 sm:w-30 lg:w-32.5 cursor-pointer"
        />
      </Link>
    </div>
    <h2 className="mt-3 text-lg font-bold text-[#111]">
      Sign in to your Account
    </h2>
    <p className="mt-2 text-sm text-[#8b8b8b]">{description}</p>
  </div>
);

const FieldError = ({ error }: { error?: string }) =>
  error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null;

export const PhoneField = ({
  error,
  register,
}: {
  error?: string;
  register: UseFormRegister<LoginFormValues>;
}) => (
  <div className="space-y-2">
    <label htmlFor="phone" className="text-xs font-semibold text-[#2a2a2a]">
      Phone Number
    </label>
    <div className="flex items-center gap-3 rounded-full border border-[#eef1f0] bg-white px-4 py-2">
      <Image
        src="/ethIcon2.svg"
        width={25}
        height={25}
        alt="Ethiopia flag icon"
      />
      <Input
        id="phone"
        type="tel"
        placeholder="+251 9 (0000) (0000)"
        className="h-10 border-0 bg-transparent px-0 text-sm focus-visible:ring-0"
        aria-invalid={!!error}
        {...register("phone")}
      />
    </div>
    <FieldError error={error} />
  </div>
);

export function PasswordField({
  error,
  register,
}: {
  error?: string;
  register: UseFormRegister<LoginFormValues>;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="text-xs font-semibold text-[#2a2a2a]">
        Password
      </label>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="****************"
          className="h-11 rounded-full border-[#eef1f0] bg-white/90 pr-10"
          aria-invalid={!!error}
          {...register("password")}
        />
        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0b0b0]"
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Eye className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded text-xs text-(--color-primary-ink) hover:underline focus:outline-none focus:ring-2 focus:ring-primary-ink focus:ring-offset-2"
        >
          Forgot Password?
        </button>
      </div>
      <FieldError error={error} />
    </div>
  );
}

export const Copyright = () => (
  <p className="mt-10 text-xs text-[#b0b0b0]">
    Copyright © {new Date().getFullYear()} STAR Gifts
    <span className="mx-2">•</span>
    Version 1.0
  </p>
);
