// store/uiStore.ts
import { create } from "zustand";

interface ILoaderStore {
  isGlobalLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const useLoaderStore = create<ILoaderStore>((set) => ({
  isGlobalLoading: false,
  showLoader: () => set({ isGlobalLoading: true }),
  hideLoader: () => set({ isGlobalLoading: false }),
}));
