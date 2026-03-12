import * as React from "react";
import type { AuthLayoutProps } from "@/types/ui";

export function AuthLayout({ className, ...props }: AuthLayoutProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "AuthLayout"}
    </div>
  );
}
