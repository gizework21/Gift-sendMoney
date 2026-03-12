"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { receiverAccountSchema } from "@/validations/receiver-account-schema";
import {
  useSendMoneyStore,
  type ReceiverAccount,
} from "@/store/use-send-money-store";
import Image from "next/image";


export type ReceiverAccountModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M9 6.5 15.5 12 9 17.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReceiverAccountModal({
  open,
  onBack,
  onContinue,
}: ReceiverAccountModalProps) {
  const receiverAccount = useSendMoneyStore((state) => state.receiverAccount);
  const setReceiverAccount = useSendMoneyStore(
    (state) => state.setReceiverAccount,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReceiverAccount>({
    resolver: yupResolver(receiverAccountSchema),
    defaultValues: receiverAccount,
    mode: "onBlur",
  });

  React.useEffect(() => {
    if (open) {
      reset(receiverAccount);
    }
  }, [open, receiverAccount, reset]);

  const onSubmit = (data: ReceiverAccount) => {
    setReceiverAccount(data);
    onContinue();
  };

  const fieldClass = (hasError?: boolean) =>
    `h-11 rounded-2xl border-[#eef1f0] bg-white/90 ${
      hasError ? "border-red-400 ring-1 ring-red-200" : ""
    }`;

  return (
    <Modal
      open={open}
      onClose={onBack}
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-auto rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full"
      >
        <div className="p-6">
          <div className="md:hidden">
            <button
              type="button"
              onClick={onBack}
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
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src={"/person.svg"}
              width={120}
              height={100}
              alt="person icon"
            />
            <h2 className="mt-3 text-xl font-bold text-[#111]">
              Enter Gift Receiver Info
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6d6d6d]">
              Please provide the recipient&apos;s full name, address, and any
              special preferences. This will help us tailor the gift to their
              tastes.
            </p>
          </div>

          <div className="rounded-3xl mt-6 border border-[#edf0ef] bg-white p-5 shadow-sm">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#2a2a2a]">
                Receiver&apos;s Account Number
              </label>
              <div className="relative">
                <Input
                  placeholder="Enter Account Number"
                  className={`${fieldClass(!!errors.accountNumber)} pr-12`}
                  {...register("accountNumber")}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#e9f7ee] p-2 text-(--color-primary)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M15.5 14h-.8l-.3-.3a6.2 6.2 0 1 0-.7.7l.3.3v.8L19 20.5 20.5 19l-5-5Zm-5.3 0a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              {errors.accountNumber ? (
                <p className="text-xs text-red-500">
                  {errors.accountNumber.message}
                </p>
              ) : null}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-[18px] border border-[#e3f0e6] bg-[#eef7ea] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) text-xs font-bold text-white">
                  PM
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1c1c1c]">
                    Solomon Kebede
                  </p>
                  <p className="text-xs text-[#4d4d4d]">103467648788909</p>
                </div>
              </div>
              <span className="text-(--color-primary)">
                <ChevronRightIcon />
              </span>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-xs font-semibold text-[#2a2a2a]">
                Sender Name
              </label>
              <Input
                placeholder="Enter Full Name"
                className={fieldClass(!!errors.senderName)}
                {...register("senderName")}
              />
            </div>
          </div>
        </div>

        <div className="mt-auto w-full bg-white px-6 py-4 md:hidden">
          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-sm font-semibold rounded-2xl"
          >
            Continue
          </Button>
        </div>

        <div className="hidden w-full grid-cols-2 gap-4 bg-white py-6 px-7 md:grid">
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
            className="py-3 text-sm font-semibold rounded-2xl"
          >
            Continue
          </Button>
        </div>
      </form>
    </Modal>
  );
}
