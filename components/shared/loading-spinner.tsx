import * as React from "react";

export const componentType = "server";

export type LoadingSpinnerProps = React.HTMLAttributes<HTMLDivElement>;

export function LoadingSpinner({ className, ...props }: LoadingSpinnerProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "LoadingSpinner"}
    </div>
  );
}
