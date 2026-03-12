import { create } from "zustand";

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

export type SendMoneyStep =
  | null
  | "bank"
  | "receiver"
  | "account"
  | "confirm"
  | "payment"
  | "success";

type SendMoneyState = {
  openStep: SendMoneyStep;
  setOpenStep: (step: SendMoneyStep) => void;
  selectedBank: string;
  setSelectedBank: (bankName: string) => void;
  receiverInfo: ReceiverInfo;
  setReceiverInfo: (info: ReceiverInfo) => void;
  receiverAccount: ReceiverAccount;
  setReceiverAccount: (info: ReceiverAccount) => void;
};

const defaultReceiverInfo: ReceiverInfo = {
  receiverName: "",
  senderName: "",
  receiverPhone: "",
  dropOffLocation: "",
  contactPreference: "email",
  email: "",
  note: "",
  agree: false,
};

const defaultReceiverAccount: ReceiverAccount = {
  accountNumber: "",
  senderName: "",
};

export const useSendMoneyStore = create<SendMoneyState>((set) => ({
  openStep: null,
  setOpenStep: (step) => set({ openStep: step }),
  selectedBank: "",
  setSelectedBank: (bankName) => set({ selectedBank: bankName }),
  receiverInfo: defaultReceiverInfo,
  setReceiverInfo: (info) => set({ receiverInfo: info }),
  receiverAccount: defaultReceiverAccount,
  setReceiverAccount: (info) => set({ receiverAccount: info }),
}));
