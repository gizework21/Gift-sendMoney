"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

import { Modal } from "@/components/ui/modal";
import { adminActions } from "@/data/admin-actions";
import Image from "next/image";

export const componentType = "client";

type PendingAction = {
  title: string;
  description: string;
};

function ComingSoonModal({
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
      className="w-full max-w-[700px] overflow-hidden rounded-[36px] border-0 bg-white p-0 shadow-[0_36px_120px_rgba(0,0,0,0.18)]"
    >
      <div className="px-8 pb-10 pt-14 text-center sm:px-12">
        <div className="flex justify-center">
          <Image src={"/comingSoon.svg"} width={140} height={140} alt="icon" />
        </div>
        <h2 className="mt-8 text-[26px] font-bold tracking-[-0.03em] text-[#111]">
          Coming Soon
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-base text-[#8a8a8a]">
          {action?.description ??
            "This feature is not available yet. We’re working hard to bring it to you soon — stay tuned for updates!"}
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

function ActionTile({
  accent,
  background,
  description,
  icon,
  title,
}: {
  accent: string;
  background: string;
  description: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div
      className="rounded-[24px] border border-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]"
      style={{ backgroundColor: background }}
    >
      <div className="flex items-center justify-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
          style={{ color: accent }}
        >
          {icon}
        </div>
      </div>
      <h3 className="mt-4 text-center text-sm font-bold text-[#111]">
        {title}
      </h3>
      <p className="mt-2 text-center text-xs text-[#6d6d6d]">{description}</p>
    </div>
  );
}

export function DashboardActions() {
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(
    null,
  );

  return (
    <>
      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        {adminActions.slice(0, 4).map((action) =>
          action.href === "/transactions" ? (
            <Link key={action.title} href={action.href}>
              <ActionTile
                title={action.title}
                description={action.description}
                accent={action.accent}
                background={action.background}
                icon={action.icon}
              />
            </Link>
          ) : (
            <button
              key={action.title}
              type="button"
              onClick={() =>
                setPendingAction({
                  title: action.title,
                  description:
                    "This feature is not available yet. We're working hard to bring it to you soon - stay tuned for updates!",
                })
              }
              className="text-left"
            >
              <ActionTile
                title={action.title}
                description={action.description}
                accent={action.accent}
                background={action.background}
                icon={action.icon}
              />
            </button>
          ),
        )}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminActions.slice(4).map((action) => (
          <button
            key={action.title}
            type="button"
            onClick={() =>
              setPendingAction({
                title: action.title,
                description:
                  "This feature is not available yet. We're working hard to bring it to you soon - stay tuned for updates!",
              })
            }
            className="text-left"
          >
            <ActionTile
              title={action.title}
              description={action.description}
              accent={action.accent}
              background={action.background}
              icon={action.icon}
            />
          </button>
        ))}
      </div>

      <ComingSoonModal
        action={pendingAction}
        open={pendingAction !== null}
        onClose={() => setPendingAction(null)}
      />
    </>
  );
}
