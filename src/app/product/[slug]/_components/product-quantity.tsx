"use client";
import { Button } from "@/app/_components/button";
import { useState } from "react";

export const ProductQuantity: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const stock = 4;
  const handleQuantity = (type: "increase" | "decrease") => {
    if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "increase" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <>
      <h4 className="font-medium text-xl">Choose quantity</h4>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-2">
          <div className="px-6 py-2 w-32 rounded-full flex items-center justify-between gap-2 bg-base-25/20">
            <button
              className="text-2xl"
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
            {quantity}
            <button
              className="text-2xl"
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
          </div>
          <div>
            Only{" "}
            <span className="font-bold text-lg text-error underline">
              4 Items
            </span>{" "}
            left
          </div>
        </div>
        <Button size="large" className="hover:bg-transparent">
          Add to cart
        </Button>
      </div>
    </>
  );
};
