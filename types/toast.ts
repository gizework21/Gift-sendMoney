export type ToastVariant = "default" | "destructive";

export type ToastMessage = {
  id: string;
  title?: string;
  description: string;
  variant?: ToastVariant;
};
