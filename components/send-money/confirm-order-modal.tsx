"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useSendMoneyStore } from "@/store/use-send-money-store";

export const componentType = "client";

export type ConfirmOrderModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

function DocumentIcon() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className="h-16 w-16">
      <path
        d="M20 10h24l16 16v40a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
        fill="#f4f4f4"
        stroke="#cfcfcf"
        strokeWidth="2"
      />
      <path d="M44 10v14a4 4 0 0 0 4 4h12" fill="#e5e5e5" />
      <rect x="26" y="34" width="28" height="4" rx="2" fill="#ffb74d" />
      <rect x="26" y="42" width="28" height="4" rx="2" fill="#b0b0b0" />
      <rect x="26" y="50" width="18" height="4" rx="2" fill="#ffb74d" />
    </svg>
  );
}

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
            <DocumentIcon />
            <h2 className="mt-3 text-xl font-bold text-[#111]">
              Confirm Order Information
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6d6d6d]">
              Please enter your information and pay for your merchant
            </p>
          </div>

          <div className="mt-6 space-y-5 p-6">
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

        <div className="mt-auto w-full bg-white px-6 py-4 md:hidden">
          <Button
            type="button"
            variant="primary"
            onClick={onContinue}
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
            type="button"
            variant="primary"
            onClick={onContinue}
            className="py-3 text-sm font-semibold rounded-2xl"
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
}
