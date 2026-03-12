import * as React from "react";

export const componentType = "server";

export type MobileNavProps = React.HTMLAttributes<HTMLDivElement>;

export function MobileNav({ className, ...props }: MobileNavProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "MobileNav"}
    </div>
  );
}
