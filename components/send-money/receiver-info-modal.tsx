import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Textarea } from "@/components/ui/textarea";
import { receiverInfoSchema } from "@/validations/receiver-info-schema";
import {
  useSendMoneyStore,
  type ReceiverInfo,
} from "@/store/use-send-money-store";
import Image from "next/image";

export type ReceiverInfoModalProps = {
  open: boolean;
  selectedBank: string;
  onBack: () => void;
  onContinue: () => void;
};

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

export function ReceiverInfoModal({
  open,
  selectedBank,
  onBack,
  onContinue,
}: ReceiverInfoModalProps) {
  const receiverInfo = useSendMoneyStore((state) => state.receiverInfo);
  const setReceiverInfo = useSendMoneyStore((state) => state.setReceiverInfo);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ReceiverInfo>({
    resolver: yupResolver(receiverInfoSchema),
    defaultValues: receiverInfo,
    mode: "onBlur",
  });

  React.useEffect(() => {
    if (open) {
      reset(receiverInfo);
    }
  }, [open, receiverInfo, reset]);

  const contactPreference = watch("contactPreference");

  const onSubmit = (data: ReceiverInfo) => {
    setReceiverInfo(data);
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
      containerClassName="justify-end items-start p-[30px]"
      className="h-[calc(100vh-60px)] w-[94vw] max-w-155 overflow-auto rounded-4xl border-[#dbe8e1] bg-[#f4fff7] p-0 shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-betweem h-full"
      >
        <div className="flex flex-col items-center text-center p-6">
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

        <div className="mt-6 p-6">
          <input type="hidden" {...register("contactPreference")} />
          <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 rounded-[18px] border border-[#edf0ef] bg-[#fafafa] px-4 py-3">
              <BankBadge />
              <div>
                <p className="text-sm font-semibold text-[#1c1c1c]">
                  {selectedBank || "Commercial Bank of Ethiopia"}
                </p>
                <p className="text-xs text-[#9b9b9b]">Selected Bank</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Receiver&apos;s Name
                  </label>
                  <Input
                    placeholder="Enter Full Name"
                    className={fieldClass(!!errors.receiverName)}
                    {...register("receiverName")}
                  />
                  {errors.receiverName ? (
                    <p className="text-xs text-red-500">
                      {errors.receiverName.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Receiver&apos;s Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#078930_0%,#fcd116_50%,#da121a_100%)]" />
                    <Input
                      type="tel"
                      placeholder="+2519 00101010"
                      className={`${fieldClass(!!errors.receiverPhone)} pl-12`}
                      {...register("receiverPhone")}
                    />
                  </div>
                  {errors.receiverPhone ? (
                    <p className="text-xs text-red-500">
                      {errors.receiverPhone.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Drop off Location
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="Enter Drop off Location"
                      className={`${fieldClass(!!errors.dropOffLocation)} pr-10`}
                      {...register("dropOffLocation")}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--color-primary)]">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M12 3a6 6 0 0 0-6 6c0 4.4 6 12 6 12s6-7.6 6-12a6 6 0 0 0-6-6Zm0 8.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors.dropOffLocation ? (
                    <p className="text-xs text-red-500">
                      {errors.dropOffLocation.message}
                    </p>
                  ) : null}
                  <div className="flex items-center gap-2 rounded-full bg-[#fff7c8] px-3 py-2 text-xs text-[#8a6b00]">
                    <span className="text-sm">📍</span>
                    Delivery available only within Addis Ababa.
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Note
                  </label>
                  <Textarea
                    placeholder="Add Note"
                    className="min-h-[90px] rounded-2xl border-[#eef1f0] bg-white/90"
                    {...register("note")}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Sender Name{" "}
                    <span className="text-[#9b9b9b]">(Optional)</span>
                  </label>
                  <Input
                    placeholder="Enter Full Name"
                    className={fieldClass(!!errors.senderName)}
                    {...register("senderName")}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[#2a2a2a]">
                      Contact Preference
                    </label>
                  </div>
                  <div className="flex rounded-full bg-[#f1f1f1] p-1 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() =>
                        setValue("contactPreference", "email", {
                          shouldValidate: true,
                        })
                      }
                      className={`flex-1 rounded-full px-3 py-2 transition ${
                        contactPreference === "email"
                          ? "bg-white text-[#0f7b79] shadow-sm"
                          : "text-[#6d6d6d]"
                      }`}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setValue("contactPreference", "phone", {
                          shouldValidate: true,
                        })
                      }
                      className={`flex-1 rounded-full px-3 py-2 transition ${
                        contactPreference === "phone"
                          ? "bg-white text-[#0f7b79] shadow-sm"
                          : "text-[#6d6d6d]"
                      }`}
                    >
                      Phone
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2a2a2a]">
                    Email Address{" "}
                    <span className="text-[#9b9b9b]">(Optional)</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    className={fieldClass(!!errors.email)}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex items-start gap-2 text-xs text-[#2a2a2a]">
                  <Checkbox className="mt-0.5" {...register("agree")} />
                  <span>
                    I have read &amp; agree to the
                    <span className="font-semibold text-[#0f7b79]">
                      {" "}
                      Terms &amp; Conditions
                    </span>
                    .
                  </span>
                </div>
                {errors.agree ? (
                  <p className="text-xs text-red-500">{errors.agree.message}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white w-full py-4 px-7">
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
