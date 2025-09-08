import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const StorageKey = "bear-storage";

type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

export const useStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: StorageKey,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
