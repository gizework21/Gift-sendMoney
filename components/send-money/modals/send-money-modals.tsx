"use client";

import { BankListModal } from "@/components/send-money/modals/bank-list-modal";
import { ConfirmOrderModal } from "@/components/send-money/modals/confirm-order-modal";
import { PaymentInfoModal } from "@/components/send-money/modals/payment-info-modal";
import { ReceiverAccountModal } from "@/components/send-money/modals/receiver-account-modal";
import { ReceiverInfoModal } from "@/components/send-money/modals/receiver-info-modal";
import { SuccessModal } from "@/components/send-money/modals/success-modal";
import type { BankOption } from "@/lib/constants";
import { useSendMoneyStore } from "@/store/use-send-money-store";

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
