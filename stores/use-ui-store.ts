"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

type UIState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "ressourcefy-ui-store",
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
);
