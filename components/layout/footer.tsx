import * as React from "react";

export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "Footer"}
    </div>
  );
}
