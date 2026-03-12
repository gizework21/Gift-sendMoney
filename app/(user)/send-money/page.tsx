"use client";

import { useEffect, useState } from "react";
import { Manrope } from "next/font/google";

import { BankListModal } from "@/components/send-money/bank-list-modal";
import { ConfirmOrderModal } from "@/components/send-money/confirm-order-modal";
import { PaymentInfoModal } from "@/components/send-money/payment-info-modal";
import { ReceiverAccountModal } from "@/components/send-money/receiver-account-modal";
import { ReceiverInfoModal } from "@/components/send-money/receiver-info-modal";
import { SendMoneyCalculator } from "@/components/send-money/send-money-calculator";
import { SendMoneyHeader } from "@/components/send-money/send-money-header";
import { SendMoneyHero } from "@/components/send-money/send-money-hero";
import { SuccessModal } from "@/components/send-money/success-modal";
import { useSendMoneyStore } from "@/store/use-send-money-store";
import { BANKS } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EXCHANGE_RATE = 165;
const GIFT_RATE = 50;
const MIN_USD_TRANSFER = 5;
const PRESET_AMOUNTS = [10, 25, 50, 100, 200, 500, 1000];

export default function Page() {
  const [usdAmount, setUsdAmount] = useState(1);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isReceiverModalOpen, setIsReceiverModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const selectedBank = useSendMoneyStore((state) => state.selectedBank);
  const setSelectedBank = useSendMoneyStore((state) => state.setSelectedBank);

  useEffect(() => {
    if (!selectedBank && BANKS[0]?.name) {
      setSelectedBank(BANKS[0].name);
    }
  }, [selectedBank, setSelectedBank]);

  const giftAmount = usdAmount * GIFT_RATE;
  const etbAmount = usdAmount * EXCHANGE_RATE;
  const totalAmount = etbAmount + giftAmount;

  const onUsdChange = (value: string) => {
    const nextValue = Number(value);
    if (Number.isNaN(nextValue)) {
      setUsdAmount(0);
      return;
    }
    setUsdAmount(nextValue);
  };

  const openBankModal = () => {
    setIsReceiverModalOpen(false);
    setIsAccountModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsBankModalOpen(true);
  };

  const openReceiverModal = () => {
    setIsBankModalOpen(false);
    setIsAccountModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsReceiverModalOpen(true);
  };

  const openAccountModal = () => {
    setIsBankModalOpen(false);
    setIsReceiverModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsAccountModalOpen(true);
  };

  const openConfirmModal = () => {
    setIsBankModalOpen(false);
    setIsReceiverModalOpen(false);
    setIsAccountModalOpen(false);
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  const openPaymentModal = () => {
    setIsBankModalOpen(false);
    setIsReceiverModalOpen(false);
    setIsAccountModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  const openSuccessModal = () => {
    setIsBankModalOpen(false);
    setIsReceiverModalOpen(false);
    setIsAccountModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <main
      className={`${manrope.className} min-h-screen bg-gradient-to-b from-[#EDFFED] to-white text-[#0b0b0b]`}
    >
      <div className="mx-auto max-w-full px-4 py-6 sm:p-6">
        <SendMoneyHeader />

        <div className="mt-4 md:mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-0">
          <SendMoneyHero exchangeRate={EXCHANGE_RATE} giftRate={GIFT_RATE} />
          <SendMoneyCalculator
            exchangeRate={EXCHANGE_RATE}
            giftRate={GIFT_RATE}
            minUsdTransfer={MIN_USD_TRANSFER}
            usdAmount={usdAmount}
            etbAmount={etbAmount}
            totalAmount={totalAmount}
            presets={PRESET_AMOUNTS}
            onUsdChange={onUsdChange}
            onPresetSelect={setUsdAmount}
            onSendMoney={openBankModal}
          />
        </div>
      </div>

      <BankListModal
        open={isBankModalOpen}
        banks={BANKS}
        selectedBank={selectedBank}
        onSelectBank={setSelectedBank}
        onClose={() => setIsBankModalOpen(false)}
        onContinue={openReceiverModal}
      />

      <ReceiverInfoModal
        open={isReceiverModalOpen}
        selectedBank={selectedBank}
        onBack={openBankModal}
        onContinue={openAccountModal}
      />

      <ReceiverAccountModal
        open={isAccountModalOpen}
        onBack={openReceiverModal}
        onContinue={openConfirmModal}
      />

      <ConfirmOrderModal
        open={isConfirmModalOpen}
        onBack={openAccountModal}
        onContinue={openPaymentModal}
      />

      <PaymentInfoModal
        open={isPaymentModalOpen}
        onBack={openConfirmModal}
        onContinue={openSuccessModal}
      />

      <SuccessModal
        open={isSuccessModalOpen}
        onDone={() => setIsSuccessModalOpen(false)}
      />
    </main>
  );
}
