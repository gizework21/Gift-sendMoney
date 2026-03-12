import { create } from "zustand";

export type ToastVariant = "default" | "destructive";

export type ToastMessage = {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastState = {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, "id">) => string;
  removeToast: (id: string) => void;
};

const AUTO_DISMISS_MS = 3000;

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  addToast: (toast) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    set({ toasts: [...get().toasts, { id, ...toast }] });
    setTimeout(() => {
      get().removeToast(id);
    }, AUTO_DISMISS_MS);
    return id;
  },
  removeToast: (id) =>
    set({ toasts: get().toasts.filter((toast) => toast.id !== id) }),
}));

export function toast(message: Omit<ToastMessage, "id">) {
  return useToastStore.getState().addToast(message);
}
