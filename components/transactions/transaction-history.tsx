import * as React from "react";

export const componentType = "server";

export type TransactionHistoryProps = React.HTMLAttributes<HTMLDivElement>;

export function TransactionHistory({ className, ...props }: TransactionHistoryProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "TransactionHistory"}
    </div>
  );
}
