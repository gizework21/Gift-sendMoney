import * as React from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

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
      containerClassName="justify-end items-start p-[30px]"
      className="h-[calc(100vh-60px)] w-[94vw] max-w-[560px] overflow-auto rounded-[32px] border-[#dbe8e1] bg-[#f4fff7] p-0 shadow-[0_30px_80px_rgba(10,90,60,0.25)]"
    >
      <div className="flex flex-col p-6">
        <div>
          <h2 className="text-2xl font-bold text-[#111]">Banks List</h2>
          <p className="mt-1 text-sm text-[#6d6d6d]">
            Select From the listed banks and send cash gift.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {banks.map((bank) => {
            const isActive = selectedBank === bank.name;
            return (
              <button
                key={bank.name}
                type="button"
                onClick={() => onSelectBank(bank.name)}
                className={`rounded-2xl border bg-white px-3 py-4 text-center shadow-sm transition ${
                  isActive
                    ? "border-[color:var(--color-primary)] ring-1 ring-[color:var(--color-primary)]"
                    : "border-transparent hover:shadow-md"
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

      <div className="mt-6 grid grid-cols-2 gap-4 bg-white w-full py-4 px-7">
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
