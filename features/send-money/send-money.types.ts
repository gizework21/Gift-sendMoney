import type { ButtonHTMLAttributes } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import type { ButtonProps } from "@/components/ui/button";

export type BankOption = {
  name: string;
  initials: string;
  color: string;
  logoUrl?: string;
};

export type ExchangeRateData = {
  base: "USD";
  quote: "ETB";
  rate: number;
  giftRate: number;
  minUsdTransfer: number;
  presetAmounts: number[];
};

export type ReceiverInfo = {
  receiverName: string;
  senderName: string;
  receiverPhone: string;
  dropOffLocation: string;
  contactPreference: "email" | "phone";
  email: string;
  note: string;
  agree: boolean;
};

export type ReceiverAccount = {
  accountNumber: string;
  senderName: string;
};

export type PaymentInfo = {
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
  country: string;
  address: string;
  city: string;
  postalCode: string;
};

export type SendMoneyStep =
  | null
  | "bank"
  | "receiver"
  | "account"
  | "confirm"
  | "payment"
  | "success";

export type TransferSummary = {
  usdAmount: number;
  exchangeRate: number;
  giftRate: number;
  etbAmount: number;
  totalAmount: number;
  paymentReference: string;
  completedAt: string;
};

export type SendMoneyState = {
  openStep: SendMoneyStep;
  setOpenStep: (step: SendMoneyStep) => void;
  selectedBank: string;
  setSelectedBank: (bankName: string) => void;
  receiverInfo: ReceiverInfo;
  setReceiverInfo: (info: ReceiverInfo) => void;
  receiverAccount: ReceiverAccount;
  setReceiverAccount: (info: ReceiverAccount) => void;
  paymentInfo: PaymentInfo;
  setPaymentInfo: (info: PaymentInfo) => void;
  transferSummary: TransferSummary;
  setTransferSummary: (summary: Partial<TransferSummary>) => void;
  finalizeTransfer: () => void;
};

export type SendMoneyHeroProps = {
  exchangeRate: number;
  giftRate: number;
  onWhyClick?: () => void;
};

export type SendMoneyHeaderProps = {
  onHelpClick?: () => void;
  onDeliveryClick?: () => void;
  onCartClick?: () => void;
};

export type SendMoneyClientProps = {
  initialBanks: BankOption[];
  initialExchangeRate: ExchangeRateData;
};

export type SendMoneyCalculatorProps = {
  exchangeRate: number;
  giftRate: number;
  isAmountValid: boolean;
  minUsdTransfer: number;
  minAmountMessage?: string;
  usdAmount: number;
  usdAmountInput: string;
  etbAmount: number;
  totalAmount: number;
  presets: number[];
  onUsdChange: (value: string) => void;
  onPresetSelect: (amount: number) => void;
  onSendMoney: () => void;
};

export type BankListModalProps = {
  open: boolean;
  banks: BankOption[];
  selectedBank: string;
  onSelectBank: (bankName: string) => void;
  onClose: () => void;
  onContinue: () => void;
};

export type ReceiverInfoModalProps = {
  open: boolean;
  selectedBank: string;
  onBack: () => void;
  onContinue: () => void;
};

export type ReceiverAccountModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

export type ConfirmOrderModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

export type PaymentInfoModalProps = {
  open: boolean;
  onBack: () => void;
  onContinue: () => void;
};

export type SuccessModalProps = {
  open: boolean;
  onDone: () => void;
};

export type PaymentFieldsProps = {
  errors: FieldErrors<PaymentInfo>;
  register: UseFormRegister<PaymentInfo>;
};

export type FooterAction = {
  className?: string;
  label: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: ButtonProps["variant"];
};

export type ModalFooterProps = {
  desktopActionsClassName?: string;
  desktopContainerClassName?: string;
  isLoading?: boolean;
  mobileActionsClassName?: string;
  mobileContainerClassName?: string;
  mobileShowSecondary?: boolean;
  primaryAction: FooterAction;
  secondaryAction?: FooterAction;
};
