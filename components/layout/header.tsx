import * as React from "react";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "Header"}
    </div>
  );
}
