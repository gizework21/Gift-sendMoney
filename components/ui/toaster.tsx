"use client";

import { Toast } from "@/components/ui/toast";
import { useToastStore } from "@/hooks/use-toast";

export function Toaster() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed right-6 top-6 z-[100] flex w-[320px] flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
        />
      ))}
    </div>
  );
}
