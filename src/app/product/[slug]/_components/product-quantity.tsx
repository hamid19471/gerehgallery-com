"use client";
import { Button } from "@/app/_components/button";
import { useWixClient } from "@/context/wix-context";
import { useCartStore } from "@/hooks/useCartStore";
import { useState } from "react";

type Props = {
  productId: string;
  variant: string; // Made variant optional in case it's not always provided
  stock: number;
};

export const ProductQuantity = ({ productId, variant, stock }: Props) => {
  const wixClient = useWixClient();
  const { addItem, isLoading } = useCartStore();

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "increase" | "decrease") => {
    setQuantity((prevQuantity) => {
      if (type === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      if (type === "increase" && prevQuantity < stock) {
        return prevQuantity + 1;
      }
      return prevQuantity;
    });
  };

  return (
    <>
      <h4 className="font-medium text-xl">Choose quantity</h4>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-2">
          <div className="px-6 py-2 w-32 rounded-full flex items-center justify-between gap-2 bg-base-25/20">
            <button
              className="text-2xl"
              onClick={() => handleQuantity("decrease")}
              disabled={quantity <= 1} // Disable decrease button at minimum quantity
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="text-2xl"
              onClick={() => handleQuantity("increase")}
              disabled={quantity >= stock} // Disable increase button at max stock
            >
              +
            </button>
          </div>
          {stock < 1 ? (
            <div>Out of Stock</div>
          ) : (
            <div>
              Only{" "}
              <span className="font-bold text-lg text-error underline">
                {stock} items
              </span>{" "}
              left
            </div>
          )}
        </div>
        <Button
          onClick={() => addItem(wixClient, productId, variant, quantity)}
          isDisable={isLoading}
          size="large"
          className="hover:bg-transparent"
          disabled={stock < 1} // Disable add to cart button if out of stock
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};
