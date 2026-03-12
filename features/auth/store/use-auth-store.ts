import { create } from "zustand";
import type { AuthState } from "@/types/store";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
