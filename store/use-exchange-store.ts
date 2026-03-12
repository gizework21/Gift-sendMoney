import { create } from "zustand";

type ExchangeState = {
  rate: number;
  setRate: (rate: number) => void;
};

export const useExchangeStore = create<ExchangeState>((set) => ({
  rate: 0,
  setRate: (rate) => set({ rate }),
}));
