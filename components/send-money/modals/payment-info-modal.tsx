"use client";

import { Modal } from "@/components/ui/modal";
import {
  PaymentMethodCard,
  BillingAddressCard,
} from "@/components/send-money/modals/payment-info-modal-cards";
import {
  PaymentAmountCard,
  PaymentInfoActions,
  PaymentInfoHeader,
} from "@/components/send-money/modals/payment-info-modal-header";

export const componentType = "client";

export type PaymentInfoModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

export function PaymentInfoModal({
  open,
  onBack,
  onContinue,
}: PaymentInfoModalProps) {
  return (
    <Modal
      open={open}
      onClose={onBack}
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-auto rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <PaymentInfoHeader onBack={onBack} />
          <div className="space-y-5 px-6 pb-6">
            <PaymentAmountCard />
            <PaymentMethodCard />
            <BillingAddressCard />
          </div>
        </div>

        <PaymentInfoActions onBack={onBack} onContinue={onContinue} />
      </div>
    </Modal>
  );
}
