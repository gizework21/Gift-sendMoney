import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ToastProps } from "@/types/ui";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Toast({
  title,
  description,
  variant,
  className,
  ...props
}: ToastProps) {
  return (
    <div className={cn(toastVariants({ variant }), className)} {...props}>
      <div className="grid gap-1">
        {title ? <div className="text-sm font-semibold">{title}</div> : null}
        {description ? (
          <div className="text-sm text-muted-foreground">{description}</div>
        ) : null}
      </div>
    </div>
  );
}
