"use client";

import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "@/components/ui/modal";
import {
  ModalActions,
  ModalIntro,
} from "@/components/send-money/modals/receiver-info-modal-components";
import { ReceiverInfoFields } from "@/components/send-money/modals/receiver-info-modal-fields";
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
    formState: { errors, isSubmitting },
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

  const onSubmit = async (data: ReceiverInfo) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
      className="h-screen w-screen max-w-none overflow-hidden rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:overflow-auto sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full min-h-0 flex-col"
      >
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ModalIntro onBack={onBack} />
          <ReceiverInfoFields
            errors={errors}
            register={register}
            selectedBank={selectedBank}
            contactPreference={contactPreference}
            setValue={setValue}
            fieldClass={fieldClass}
          />
        </div>
        <ModalActions isLoading={isSubmitting} onBack={onBack} />
      </form>
    </Modal>
  );
}
