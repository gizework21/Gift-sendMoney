import * as React from "react";

export type AppFooterProps = {
  className?: string;
};

export function AppFooter({ className }: AppFooterProps) {
  return (
    <footer className={className ?? "mt-6 text-center text-xs text-[#b0b0b0]"}>
      Copyright © {new Date().getFullYear()} Gift Ethiopias | All Rights
      Reserved.
    </footer>
  );
}
