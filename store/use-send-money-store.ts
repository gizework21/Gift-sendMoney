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

export type TransferSummary = {
  usdAmount: number;
  exchangeRate: number;
  giftRate: number;
  etbAmount: number;
  totalAmount: number;
  paymentReference: string;
  completedAt: string;
};

type SendMoneyState = {
  openStep: SendMoneyStep;
  setOpenStep: (step: SendMoneyStep) => void;
  selectedBank: string;
  setSelectedBank: (bankName: string) => void;
  receiverInfo: ReceiverInfo;
  setReceiverInfo: (info: ReceiverInfo) => void;
  receiverAccount: ReceiverAccount;
  setReceiverAccount: (info: ReceiverAccount) => void;
  transferSummary: TransferSummary;
  setTransferSummary: (summary: Partial<TransferSummary>) => void;
  finalizeTransfer: () => void;
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

const defaultTransferSummary: TransferSummary = {
  usdAmount: 0,
  exchangeRate: 0,
  giftRate: 0,
  etbAmount: 0,
  totalAmount: 0,
  paymentReference: "",
  completedAt: "",
};

function createPaymentReference() {
  return `FTX-${Math.floor(10000000 + Math.random() * 90000000)}`;
}

export const useSendMoneyStore = create<SendMoneyState>((set) => ({
  openStep: null,
  setOpenStep: (step) => set({ openStep: step }),
  selectedBank: "",
  setSelectedBank: (bankName) => set({ selectedBank: bankName }),
  receiverInfo: defaultReceiverInfo,
  setReceiverInfo: (info) => set({ receiverInfo: info }),
  receiverAccount: defaultReceiverAccount,
  setReceiverAccount: (info) => set({ receiverAccount: info }),
  transferSummary: defaultTransferSummary,
  setTransferSummary: (summary) =>
    set((state) => ({
      transferSummary: { ...state.transferSummary, ...summary },
    })),
  finalizeTransfer: () =>
    set((state) => ({
      transferSummary: {
        ...state.transferSummary,
        paymentReference: createPaymentReference(),
        completedAt: new Date().toISOString(),
      },
    })),
}));
