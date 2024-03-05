"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: () =>
        set((state) => ({
          ...state,
          theme: get().theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme",
    }
  )
);
