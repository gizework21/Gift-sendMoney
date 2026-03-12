"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export const componentType = "client";

export type Bank = {
  name: string;
  initials: string;
  color: string;
};

export type BankListModalProps = {
  open: boolean;
  banks: Bank[];
  selectedBank: string;
  onSelectBank: (bankName: string) => void;
  onClose: () => void;
  onContinue: () => void;
};

export function BankListModal({
  open,
  banks,
  selectedBank,
  onSelectBank,
  onClose,
  onContinue,
}: BankListModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      containerClassName="justify-end items-stretch p-0 sm:items-start sm:p-[30px]"
      className="h-screen w-screen max-w-none overflow-auto rounded-none border-0 bg-[#f4fff7] p-0 shadow-none sm:h-[calc(100vh-60px)] sm:w-[94vw] sm:max-w-[560px] sm:rounded-[32px] sm:border-[#dbe8e1] sm:shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex min-h-full flex-col p-5 sm:p-6">
        <div className="md:hidden">
          <button
            type="button"
            onClick={onClose}
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

        <div className="mt-4 md:mt-0">
          <h2 className="text-lg font-bold text-[#111] sm:text-2xl">
            Banks List
          </h2>
          <p className="mt-1 text-sm text-[#6d6d6d]">
            Select From the listed banks and send cash gift.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
          {banks.map((bank) => {
            const isActive = selectedBank === bank.name;
            return (
              <button
                key={bank.name}
                type="button"
                onClick={() => onSelectBank(bank.name)}
                className={`rounded-[22px] border border-white bg-white px-3 py-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition ${
                  isActive
                    ? "ring-2 ring-[color:var(--color-primary)]"
                    : "border-transparent"
                }`}
              >
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: bank.color }}
                >
                  {bank.initials}
                </div>
                <p className="mt-2 text-xs font-semibold text-[#1c1c1c]">
                  {bank.name}
                </p>
              </button>
            );
          })}
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

      <div className="mt-6 hidden w-full grid-cols-2 gap-4 bg-white py-4 px-7 md:grid">
        <Button
          type="button"
          variant="primaryOutline"
          onClick={onClose}
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
    </Modal>
  );
}
