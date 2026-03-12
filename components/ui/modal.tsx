"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Modal({
  open = false,
  onClose,
  children,
  className,
  containerClassName,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        containerClassName,
      )}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-50 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
