import * as React from "react";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export type LoadingSpinnerProps = React.HTMLAttributes<HTMLDivElement>;

export function LoadingSpinner({
  className,
  ...props
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {props.children ?? (
        <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
      )}
    </div>
  );
}
