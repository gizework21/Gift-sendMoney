import * as React from "react";

export const componentType = "server";

export type ErrorBoundaryProps = React.HTMLAttributes<HTMLDivElement>;

export function ErrorBoundary({ className, ...props }: ErrorBoundaryProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "ErrorBoundary"}
    </div>
  );
}
