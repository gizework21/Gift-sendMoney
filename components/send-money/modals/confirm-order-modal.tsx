"use client";

import { ChevronLeft } from "lucide-react";
import { ModalFooter } from "@/components/send-money/modals/modal-footer";
import { Modal } from "@/components/ui/modal";
import { useSendMoneyStore } from "@/store/use-send-money-store";
import Image from "next/image";

export type ConfirmOrderModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

export function ConfirmOrderModal({
  open,
  onBack,
  onContinue,
}: ConfirmOrderModalProps) {
  const receiverInfo = useSendMoneyStore((state) => state.receiverInfo);
  const receiverAccount = useSendMoneyStore((state) => state.receiverAccount);

  const receiverName = receiverInfo.receiverName || "Babi Asefga Haile";
  const receiverPhone = receiverInfo.receiverPhone || "10002334343433";
  const senderName =
    receiverAccount.senderName || receiverInfo.senderName || "Solomon Kebede";

  return (
    <Modal
      open={open}
      onClose={onBack}
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-auto rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="p-6 pb-0 md:hidden">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white shadow-sm"
              aria-label="Go back"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src={"/doc.svg"} width={150} height={150} alt="icon" />
            <h2 className="mt-3 text-xl font-bold text-[#111]">
              Confirm Order Information
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6d6d6d]">
              Please enter your information and pay for your merchant
            </p>
          </div>

          <div className="mt-4 space-y-5 p-6 sm:mt-6">
            <div>
              <p className="text-xs font-semibold text-[#2a2a2a]">Gift Info.</p>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#edf0ef] bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4efe8]">
                  <span className="text-lg">💸</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1c1c1c]">
                    $ 300.00
                  </p>
                  <p className="text-xs text-[#9b9b9b]">Cash Gift</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#2a2a2a]">
                Receiver&apos;s Info
              </p>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#edf0ef] bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) text-xs font-bold text-white">
                  BA
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1c1c1c]">
                    {receiverName}
                  </p>
                  <p className="text-xs text-[#9b9b9b]">{receiverPhone}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#2a2a2a]">
                Sender Information
              </p>
              <div className="mt-2 rounded-2xl border border-[#edf0ef] bg-white px-4 py-3 shadow-sm">
                <p className="text-xs text-[#9b9b9b]">Sender Name</p>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-[#f0f0f0] bg-[#fafafa] px-3 py-2">
                  <span className="text-sm">👤</span>
                  <span className="text-sm font-semibold text-[#1c1c1c]">
                    {senderName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalFooter
          primaryAction={{ label: "Continue", onClick: onContinue }}
          secondaryAction={{
            label: "Back",
            onClick: onBack,
            variant: "primaryOutline",
            className: "text-[#111]",
          }}
        />
      </div>
    </Modal>
  );
}
