import * as React from "react";

export type GiftOptionsProps = React.HTMLAttributes<HTMLDivElement>;

export function GiftOptions({ className, ...props }: GiftOptionsProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "GiftOptions"}
    </div>
  );
}
