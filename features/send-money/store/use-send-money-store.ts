import { create } from "zustand";
import type {
  PaymentInfo,
  ReceiverAccount,
  ReceiverInfo,
  SendMoneyState,
  TransferSummary,
} from "@/features/send-money/send-money.types";

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

const defaultPaymentInfo: PaymentInfo = {
  cardNumber: "",
  cvv: "",
  expiryMonth: "",
  expiryYear: "",
  country: "",
  address: "",
  city: "",
  postalCode: "",
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
  paymentInfo: defaultPaymentInfo,
  setPaymentInfo: (info) => set({ paymentInfo: info }),
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
