"use client";

import { Button } from "@/components/ui/button";
import {
  AuthCardHeader,
  AuthHero,
  Copyright,
  PasswordField,
  PhoneField,
} from "@/features/auth/components/login-flow-components";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { LoginFormValues, LoginStep } from "@/features/auth/auth.types";

export const componentType = "client";

const DESCRIPTION_BY_STEP: Record<LoginStep, string> = {
  phone:
    "Please enter your phone number and Password to Login to your account.",
  password:
    "Please enter your phone number and Password to Login to your account.",
};

export function LoginFlowPanel({
  errors,
  isSubmitting,
  loginError,
  onContinue,
  register,
  step,
}: {
  errors: FieldErrors<LoginFormValues>;
  isSubmitting: boolean;
  loginError: string | null;
  onContinue: () => void;
  register: UseFormRegister<LoginFormValues>;
  step: LoginStep;
}) {
  return (
    <div className="mx-auto grid w-full min-h-[calc(100vh-48px)] max-w-full gap-6 overflow-hidden rounded-[40px] bg-white lg:grid-cols-2">
      <AuthHero />

      <section className="flex min-h-full flex-col items-center justify-center bg-white px-4 py-8 shadow-lg sm:px-8 sm:py-12 lg:rounded-4xl lg:px-10 lg:py-16">
        <div className="flex h-full w-full flex-col items-center justify-center px-0 py-4 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="flex w-full max-w-130 flex-col justify-center rounded-[28px] border border-[#efefef] bg-white px-5 py-8 sm:max-w-140 sm:px-8 sm:py-10 lg:w-lg lg:max-w-none">
            <AuthCardHeader description={DESCRIPTION_BY_STEP[step]} />

            {loginError ? (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-center text-sm text-red-600">
                {loginError}
              </div>
            ) : null}

            <div className="mt-8 space-y-4">
              {step === "phone" ? (
                <PhoneField error={errors.phone?.message} register={register} />
              ) : (
                <PasswordField
                  error={errors.password?.message}
                  register={register}
                />
              )}

              <Button
                type="button"
                variant="primary"
                className="w-full py-3 text-sm font-semibold"
                disabled={isSubmitting}
                onClick={onContinue}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Continue"}
              </Button>
            </div>
          </div>

          <Copyright />
        </div>
      </section>
    </div>
  );
}
