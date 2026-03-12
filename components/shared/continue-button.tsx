import * as React from "react";

export type ContinueButtonProps = React.HTMLAttributes<HTMLDivElement>;

export function ContinueButton({ className, ...props }: ContinueButtonProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "ContinueButton"}
    </div>
  );
}
