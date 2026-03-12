import * as React from "react";

export const componentType = "server";

export type TransactionCardProps = React.HTMLAttributes<HTMLDivElement>;

export function TransactionCard({ className, ...props }: TransactionCardProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "TransactionCard"}
    </div>
  );
}
