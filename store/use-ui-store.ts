import { create } from "zustand";
import type { UiState } from "@/types/store";

export const useUiStore = create<UiState>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));
