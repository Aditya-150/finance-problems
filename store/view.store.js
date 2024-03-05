import { create } from "zustand";

export const useViewStore = create((set) => ({
  inViewFeature: null,
  setInViewFeature: (value) => set({ inViewFeature: value }),
}));
