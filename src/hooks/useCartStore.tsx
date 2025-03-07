import { WixClient } from "@/context/wix-context";
import { currentCart } from "@wix/ecom";
import { create } from "zustand";

// تعریف نوع جدید شامل totals
type CartWithTotals = currentCart.Cart & {
  totals?: {
    subtotal?: {
      amount: number;
    };
  };
};

type CartState = {
  cart: CartWithTotals | null;
  isLoading: boolean;
  counter: number;
  subtotal: number;
  getCart: (wixClient: WixClient) => void;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: WixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: true,
  counter: 0,
  subtotal: 0,

  getCart: async (wixClient) => {
    try {
      const cart =
        (await wixClient.currentCart.getCurrentCart()) as CartWithTotals;
      console.log("Cart Data:", cart); // بررسی مقدار دریافتی

      set({
        cart: cart || null,
        isLoading: false,
        counter: cart?.lineItems?.length || 0,
        subtotal: cart?.totals?.subtotal?.amount || 0,
      });
    } catch (err) {
      console.error("Error fetching cart:", err);
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },

  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));

    try {
      const response = (await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
              catalogItemId: productId,
              ...(variantId && { options: { variantId } }),
            },
            quantity,
          },
        ],
      })) as { cart: CartWithTotals };

      set({
        cart: response.cart,
        counter: response.cart?.lineItems?.length || 0,
        subtotal: response.cart?.totals?.subtotal?.amount || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      set((state) => ({ ...state, isLoading: false }));
    }
  },

  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));

    try {
      const response =
        (await wixClient.currentCart.removeLineItemsFromCurrentCart([
          itemId,
        ])) as { cart: CartWithTotals };

      set({
        cart: response.cart,
        counter: response.cart?.lineItems?.length || 0,
        subtotal: response.cart?.totals?.subtotal?.amount || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
