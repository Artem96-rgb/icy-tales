import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartState {
  cart: {
    id: string;
  }[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
}

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (id) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === id ? { ...item } : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { id }],
          };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      isInCart: (id) => !!get().cart.find((item) => item.id === id),
    }),
    {
      name: "cart-storage", // ключ в localStorage
    },
  ),
);
