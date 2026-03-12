import type * as React from "react";

export type AppFooterProps = React.HTMLAttributes<HTMLElement>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export type LoadingSpinnerProps = React.HTMLAttributes<HTMLDivElement>;

export type AuthLayoutProps = React.HTMLAttributes<HTMLDivElement>;

export type BackButtonProps = {
  href: string;
};

export type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export type DialogProps = {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
};

export type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
};

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonVariant =
  | "default"
  | "primary"
  | "primaryOutline"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "destructive";
};

export type MonthSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  startAt?: number;
};

export type YearSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  startYear?: number;
  endYear?: number;
};
