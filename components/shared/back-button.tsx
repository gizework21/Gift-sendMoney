import * as React from "react";

export type BackButtonProps = React.HTMLAttributes<HTMLDivElement>;

export function BackButton({ className, ...props }: BackButtonProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "BackButton"}
    </div>
  );
}
