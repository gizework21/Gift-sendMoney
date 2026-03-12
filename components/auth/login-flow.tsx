"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFlowPanel, type LoginStep } from "@/components/auth/login-flow-panel";
import { loginSchema } from "@/validations/auth-schema";
import { type LoginFormValues } from "@/components/auth/login-flow-components";

export type LoginFlowProps = {
  initialStep?: LoginStep;
};
export const componentType = "client";

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      className="min-h-screen min-w-full bg-white px-4 py-6 sm:p-6"
      onKeyDown={handleKeyDown}
    >
      <LoginFlowPanel
        errors={errors}
        isSubmitting={isSubmitting}
        loginError={loginError}
        onContinue={handleContinue}
        register={register}
        step={step}
      />
    </main>
  );
}
