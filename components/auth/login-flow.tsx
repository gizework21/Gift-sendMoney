"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Manrope } from "next/font/google";

import { Button } from "@/components/ui/button";
import { loginSchema } from "@/validations/auth-schema";
import {
  AuthCardHeader,
  AuthHero,
  Copyright,
  PasswordField,
  PhoneField,
  type LoginFormValues,
} from "@/components/auth/login-flow-components";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export type LoginStep = "phone" | "password";

export type LoginFlowProps = {
  initialStep?: LoginStep;
};

const DESCRIPTION_BY_STEP: Record<LoginStep, string> = {
  phone:
    "Please enter your phone number and Password to Login to your account.",
  password:
    "Please enter your phone number and Password to Login to your account.",
};

export function LoginFlow({ initialStep = "phone" }: LoginFlowProps) {
  const [step, setStep] = useState<LoginStep>(initialStep);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const handlePasswordSubmit = useCallback(
    async (data: LoginFormValues) => {
      setIsSubmitting(true);
      setLoginError(null);

      try {
        const result = await signIn("credentials", {
          phone: data.phone,
          password: data.password,
          redirect: false,
        });

        if (result?.error) {
          setLoginError("Phone number or password is incorrect.");
          setError("password", {
            type: "manual",
            message: "Invalid credentials",
          });
          return;
        }

        router.push("/dashboard");
      } catch (error) {
        setLoginError("An unexpected error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [router, setError],
  );

  const handleContinue = useCallback(async () => {
    if (step === "phone") {
      const isValid = await trigger("phone");
      if (isValid) {
        setStep("password");
        setLoginError(null);
      }
      return;
    }

    handleSubmit(handlePasswordSubmit)();
  }, [handlePasswordSubmit, handleSubmit, step, trigger]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !isSubmitting) {
        handleContinue();
      }
    },
    [handleContinue, isSubmitting],
  );

  return (
    <main
      className={`${manrope.className} min-h-screen min-w-full bg-white px-4 py-6 sm:p-6`}
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto grid w-full min-h-[calc(100vh-48px)] max-w-full gap-6 overflow-hidden rounded-[40px] bg-white lg:grid-cols-2">
        <AuthHero />

        <section className="flex min-h-full flex-col items-center justify-center bg-white px-6 py-10 shadow-lg sm:px-8 sm:py-12 lg:rounded-4xl lg:px-10 lg:py-16">
          <div className="flex h-full flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="flex h-md w-full  md:max-w-[480px] flex-col justify-center rounded-[28px] border border-[#efefef] bg-white px-6 py-8 sm:max-w-[520px] sm:px-8 sm:py-10 lg:w-lg lg:max-w-none">
              <AuthCardHeader description={DESCRIPTION_BY_STEP[step]} />

              {loginError && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-center text-sm text-red-600">
                  {loginError}
                </div>
              )}

              <div className="mt-8 space-y-4">
                {step === "phone" ? (
                  <PhoneField
                    error={errors.phone?.message}
                    register={register}
                  />
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
                  onClick={handleContinue}
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
    </main>
  );
}
