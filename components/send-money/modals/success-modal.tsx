"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import Image from "next/image";

export type SuccessModalProps = {
  open: boolean;
  onDone: () => void;
};

export function SuccessModal({ open, onDone }: SuccessModalProps) {
  const handleGetReceipt = () => {
    window.print();
  };

  return (
    <Modal
      open={open}
      onClose={onDone}
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-hidden rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-155 sm:overflow-auto sm:rounded-4xl sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex h-full min-h-0 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/doneIcon.svg"}
              width={200}
              height={200}
              alt="done icon"
            />
            <h2 className="mt-4 text-xl font-bold text-[#111]">
              Cash Gift Sent Successfully!
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6d6d6d]">
              Your gift has been sent successfully. The recipient will receive
              it shortly. Thank you for using StarGift.
            </p>
          </div>

          <div className="mt-4 space-y-5 sm:mt-6">
            <div className="flex items-center gap-3 rounded-2xl border border-[#edf0ef] bg-white px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4efe8]">
                <span className="text-lg">💸</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1c1c1c]">$ 300.00</p>
                <p className="text-xs text-[#9b9b9b]">Cash Gift</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#edf0ef] bg-white px-4 py-4 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-[#2a2a2a]">
                <span>Transaction Detail</span>
                <span className="text-[#9b9b9b]">&nbsp;</span>
              </div>

              <div className="mt-3 space-y-2 text-xs text-[#6d6d6d]">
                <div className="flex items-center justify-between">
                  <span>Sender name:</span>
                  <span className="font-semibold text-[#1c1c1c]">
                    Solomon Kebede
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Receiver Name:</span>
                  <span className="font-semibold text-[#1c1c1c]">
                    Samson Ketema
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Receiver Account:</span>
                  <span className="font-semibold text-[#1c1c1c]">
                    100093462424242
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bank Name:</span>
                  <span className="font-semibold text-[#1c1c1c]">
                    Dashen Bank
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Payment Reference:</span>
                  <span className="font-semibold text-[#1c1c1c]">
                    FTX-98237424
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Date:</span>
                  <span className="font-semibold text-[#1c1c1c]">
                    May 12, 2024
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm font-semibold text-[#111]">
                <span>Total</span>
                <span>$ 281.25</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full bg-white px-7 py-6 md:hidden">
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              type="button"
              variant="primaryOutline"
              onClick={onDone}
              className="flex-1 py-3 text-sm font-semibold md:py-5"
            >
              Back to Home
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={handleGetReceipt}
              className="flex-1 rounded-full py-3 text-sm font-semibold md:py-5"
            >
              Get Receipt
            </Button>
          </div>
        </div>

        <div className="hidden w-full bg-white px-7 py-6 md:block">
          <Button
            type="button"
            variant="primary"
            onClick={onDone}
            className="w-full rounded-full py-3 text-sm font-semibold md:py-5"
          >
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
}
