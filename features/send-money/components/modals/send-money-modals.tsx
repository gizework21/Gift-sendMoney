"use client";

import { BankListModal } from "@/features/send-money/components/modals/bank-list-modal";
import { ConfirmOrderModal } from "@/features/send-money/components/modals/confirm-order-modal";
import { PaymentInfoModal } from "@/features/send-money/components/modals/payment-info-modal";
import { ReceiverAccountModal } from "@/features/send-money/components/modals/receiver-account-modal";
import { ReceiverInfoModal } from "@/features/send-money/components/modals/receiver-info-modal";
import { SuccessModal } from "@/features/send-money/components/modals/success-modal";
import { useSendMoneyStore } from "@/features/send-money/store/use-send-money-store";
import type { BankOption } from "@/features/send-money/send-money.types";

export const componentType = "client";

export function SendMoneyModals({ banks }: { banks: BankOption[] }) {
  const openStep = useSendMoneyStore((state) => state.openStep);
  const selectedBank = useSendMoneyStore((state) => state.selectedBank);
  const setSelectedBank = useSendMoneyStore((state) => state.setSelectedBank);
  const setOpenStep = useSendMoneyStore((state) => state.setOpenStep);
  const finalizeTransfer = useSendMoneyStore((state) => state.finalizeTransfer);

  return (
    <>
      <BankListModal
        open={openStep === "bank"}
        banks={banks}
        selectedBank={selectedBank}
        onSelectBank={setSelectedBank}
        onClose={() => setOpenStep(null)}
        onContinue={() => setOpenStep("receiver")}
      />

      <ReceiverInfoModal
        open={openStep === "receiver"}
        selectedBank={selectedBank}
        onBack={() => setOpenStep("bank")}
        onContinue={() => setOpenStep("account")}
      />

      <ReceiverAccountModal
        open={openStep === "account"}
        onBack={() => setOpenStep("receiver")}
        onContinue={() => setOpenStep("confirm")}
      />

      <ConfirmOrderModal
        open={openStep === "confirm"}
        onBack={() => setOpenStep("account")}
        onContinue={() => setOpenStep("payment")}
      />

      <PaymentInfoModal
        open={openStep === "payment"}
        onBack={() => setOpenStep("confirm")}
        onContinue={() => {
          finalizeTransfer();
          setOpenStep("success");
        }}
      />

      <SuccessModal open={openStep === "success"} onDone={() => setOpenStep(null)} />
    </>
  );
}
