"use client";

import Image from "next/image";

import { Modal } from "@/components/ui/modal";

export const componentType = "client";

export type PendingAction = {
  title: string;
  description: string;
};

export function ComingSoonModal({
  action,
  open,
  onClose,
}: {
  action: PendingAction | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      containerClassName="items-center justify-center p-4 sm:p-6"
      className="w-full max-w-175 overflow-hidden rounded-[36px] border-0 bg-white p-0 shadow-[0_36px_120px_rgba(0,0,0,0.18)]"
    >
      <div className="px-8 pb-10 pt-14 text-center sm:px-12">
        <div className="flex justify-center">
          <Image src="/comingSoon.svg" width={140} height={140} alt="icon" />
        </div>
        <h2 className="mt-8 text-[26px] font-bold tracking-[-0.03em] text-[#111]">
          Coming Soon
        </h2>
        <p className="mx-auto mt-3 max-w-140 text-base text-[#8a8a8a]">
          {action?.description ??
            "This feature is not available yet. We're working hard to bring it to you soon — stay tuned for updates!"}
        </p>
      </div>

      <div className="border-t border-[#f0f0f0] bg-[#fafafa] px-8 py-7 sm:px-10">
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-[18px] bg-[linear-gradient(135deg,#163d69_0%,#0e7a7b_52%,#0aa663_100%)] px-6 py-5 text-center text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(13,110,87,0.25)] transition hover:opacity-95"
        >
          Back to Home
        </button>
      </div>
    </Modal>
  );
}
