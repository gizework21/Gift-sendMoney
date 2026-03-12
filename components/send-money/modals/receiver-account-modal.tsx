"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "@/components/ui/modal";
import {
  ReceiverAccountActions,
  ReceiverAccountFields,
  ReceiverAccountIntro,
} from "@/components/send-money/modals/receiver-account-modal-components";
import { receiverAccountSchema } from "@/validations/receiver-account-schema";
import {
  useSendMoneyStore,
  type ReceiverAccount,
} from "@/store/use-send-money-store";

export const componentType = "client";

export type ReceiverAccountModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

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
      className="h-screen w-screen max-w-none overflow-hidden rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:overflow-auto sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full min-h-0 flex-col"
      >
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          <ReceiverAccountIntro onBack={onBack} />
          <ReceiverAccountFields
            errors={errors}
            fieldClass={fieldClass}
            register={register}
          />
        </div>

        <ReceiverAccountActions onBack={onBack} />
      </form>
    </Modal>
  );
}
