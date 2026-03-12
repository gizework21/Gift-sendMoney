import * as React from "react";

export const componentType = "server";

export type AuthLayoutProps = React.HTMLAttributes<HTMLDivElement>;

export function AuthLayout({ className, ...props }: AuthLayoutProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "AuthLayout"}
    </div>
  );
}
