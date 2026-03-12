import { create } from "zustand";

type UiState = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));
