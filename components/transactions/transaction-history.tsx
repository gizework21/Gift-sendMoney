import * as React from "react";

export type TransactionHistoryProps = React.HTMLAttributes<HTMLDivElement>;

export function TransactionHistory({ className, ...props }: TransactionHistoryProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "TransactionHistory"}
    </div>
  );
}
