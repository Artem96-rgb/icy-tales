import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IWishlistStore {
  wishlist: string[];
  addWishlistProduct: (id: string) => void;
  removeWishlistProduct: (id: string) => void;
}
export const useWishlistStore = create<IWishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: [],

      addWishlistProduct: (id) => {
        const { wishlist } = get();

        if (!wishlist.includes(id)) {
          set({ wishlist: [...wishlist, id] });
        }
      },

      removeWishlistProduct: (id) => {
        const { wishlist } = get();
        set({
          wishlist: wishlist.filter((pid) => pid !== id),
        });
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
);
