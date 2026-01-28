import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartState {
  cart: {
    id: string;
    quantity: number;
  }[];
  addToCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
  clearCart: () => void;
}

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (id) =>
        set((state) => {
          if (!state.cart.find((item) => item.id === id)) {
            return { cart: [...state.cart, { id, quantity: 1 }] };
          }
          return state;
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      isInCart: (id) => !!get().cart.find((item) => item.id === id),

      clearCart: () => set({ cart: [] }),

      increaseQuantity: (id) => {
        set({
          cart: get().cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
          ),
        });
      },

      decreaseQuantity: (id) => {
        set({
          cart: get().cart.map((p) =>
            p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p,
          ),
        });
      },

      setQuantity: (id: string, quantity: number) => {
        set({
          cart: get().cart.map((p) => (p.id === id ? { ...p, quantity } : p)),
        });
      },
    }),
    {
      name: "cart-storage", // ключ в localStorage
    },
  ),
);
