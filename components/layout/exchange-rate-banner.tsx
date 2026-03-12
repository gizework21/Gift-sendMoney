import * as React from "react";

export const componentType = "server";

export type ExchangeRateBannerProps = React.HTMLAttributes<HTMLDivElement>;

export function ExchangeRateBanner({ className, ...props }: ExchangeRateBannerProps) {
  return (
    <div className={className} {...props}>
      {props.children ?? "ExchangeRateBanner"}
    </div>
  );
}
