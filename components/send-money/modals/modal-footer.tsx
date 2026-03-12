"use client";

import type { ButtonHTMLAttributes } from "react";

import { LoadingSpinner } from "@/components/shared/loading-spinner";
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
  isLoading?: boolean;
  mobileActionsClassName?: string;
  mobileContainerClassName?: string;
  mobileShowSecondary?: boolean;
  primaryAction: FooterAction;
  secondaryAction?: FooterAction;
};

function FooterButton({
  action,
  className,
  isLoading = false,
}: {
  action: FooterAction;
  className?: string;
  isLoading?: boolean;
}) {
  return (
    <Button
      type={action.type ?? "button"}
      variant={action.variant ?? "primary"}
      onClick={action.onClick}
      disabled={isLoading}
      className={cn(
        "py-3 text-sm font-semibold md:py-5 rounded-full",
        action.variant === "primary" && "rounded-full",
        className,
        action.className,
      )}
    >
      {isLoading ? (
        <>
          <LoadingSpinner className="text-current" />
          {action.label}
        </>
      ) : (
        action.label
      )}
    </Button>
  );
}

export function ModalFooter({
  desktopActionsClassName,
  desktopContainerClassName,
  isLoading = false,
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
          "sticky bottom-0 z-20 mt-auto w-full border-t border-[#edf0ef] bg-white px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(0,0,0,0.06)] md:hidden",
          mobileContainerClassName,
        )}
      >
        {mobileShowSecondary && secondaryAction ? (
          <div
            className={cn("flex items-center gap-3", mobileActionsClassName)}
          >
            <FooterButton
              action={secondaryAction}
              className="flex-1"
              isLoading={false}
            />
            <FooterButton
              action={primaryAction}
              className="flex-1"
              isLoading={isLoading}
            />
          </div>
        ) : (
          <FooterButton
            action={primaryAction}
            className={cn("w-full", mobileActionsClassName)}
            isLoading={isLoading}
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
          <FooterButton action={primaryAction} isLoading={isLoading} />
        </div>
      ) : null}
    </>
  );
}
