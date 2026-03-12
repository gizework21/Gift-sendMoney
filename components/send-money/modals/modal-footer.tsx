"use client";

import type { ButtonHTMLAttributes } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const componentType = "client";

type FooterAction = {
  className?: string;
  label: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: ButtonProps["variant"];
};

export type ModalFooterProps = {
  desktopActionsClassName?: string;
  desktopContainerClassName?: string;
  mobileActionsClassName?: string;
  mobileContainerClassName?: string;
  mobileShowSecondary?: boolean;
  primaryAction: FooterAction;
  secondaryAction?: FooterAction;
};

function FooterButton({
  action,
  className,
}: {
  action: FooterAction;
  className?: string;
}) {
  return (
    <Button
      type={action.type ?? "button"}
      variant={action.variant ?? "primary"}
      onClick={action.onClick}
      className={cn(
        "py-3 text-sm font-semibold md:py-5 rounded-full",
        action.variant === "primary" && "rounded-full",
        className,
        action.className,
      )}
    >
      {action.label}
    </Button>
  );
}

export function ModalFooter({
  desktopActionsClassName,
  desktopContainerClassName,
  mobileActionsClassName,
  mobileContainerClassName,
  mobileShowSecondary = false,
  primaryAction,
  secondaryAction,
}: ModalFooterProps) {
  return (
    <>
      <div
        className={cn(
          "mt-auto w-full bg-white px-6 py-4 md:hidden",
          mobileContainerClassName,
        )}
      >
        {mobileShowSecondary && secondaryAction ? (
          <div
            className={cn("flex items-center gap-3", mobileActionsClassName)}
          >
            <FooterButton action={secondaryAction} className="flex-1" />
            <FooterButton action={primaryAction} className="flex-1" />
          </div>
        ) : (
          <FooterButton
            action={primaryAction}
            className={cn("w-full", mobileActionsClassName)}
          />
        )}
      </div>

      {secondaryAction ? (
        <div
          className={cn(
            "hidden w-full  bg-white md:grid",
            desktopActionsClassName ?? "grid-cols-2 gap-4",
            desktopContainerClassName ?? "px-7 py-6",
          )}
        >
          <FooterButton action={secondaryAction} />
          <FooterButton action={primaryAction} />
        </div>
      ) : null}
    </>
  );
}
