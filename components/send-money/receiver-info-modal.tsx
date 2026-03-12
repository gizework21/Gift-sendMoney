"use client";

import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "@/components/ui/modal";
import {
  ModalActions,
  ModalIntro,
  ReceiverInfoFields,
} from "@/components/send-money/receiver-info-modal-components";
import {
  useSendMoneyStore,
  type ReceiverInfo,
} from "@/store/use-send-money-store";
import { receiverInfoSchema } from "@/validations/receiver-info-schema";

export type ReceiverInfoModalProps = {
  open: boolean;
  selectedBank: string;
  onBack: () => void;
  onContinue: () => void;
};

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

  // eslint-disable-next-line react-hooks/incompatible-library
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
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-auto rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col">
        <ModalIntro onBack={onBack} />
        <ReceiverInfoFields
          errors={errors}
          register={register}
          selectedBank={selectedBank}
          contactPreference={contactPreference}
          setValue={setValue}
          fieldClass={fieldClass}
        />
        <ModalActions onBack={onBack} />
      </form>
    </Modal>
  );
}
