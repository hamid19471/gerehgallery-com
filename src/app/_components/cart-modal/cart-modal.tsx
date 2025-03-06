"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { Button } from "../button";
import { useWixClient } from "@/context/wix-context";
import { useCartStore } from "@/hooks/useCartStore";

type Props = {
  children: ReactNode;
  setShopCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartModal: React.FC<Props> = ({ children, setShopCart }) => {
  const wixClient = useWixClient();
  const { cart } = useCartStore();
  console.log(cart);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const clickOutSide = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShopCart(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);

    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, [setShopCart]);
  return (
    <div
      ref={ref}
      className="w-[330px]  z-50 rounded-lg absolute top-8 left-0 shadow-lg bg-white p-4"
    >
      <h3 className="font-semibold text-lg border-b border-base-25/10 pb-2">
        Shopping Cart
      </h3>

      {children}
      <div className="flex flex-col w-full gap-2 border-b border-t border-base-25/10 py-4 my-6">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg">Subtotal</h4>
          <p className="font-bold text-xl">{subtotal.amount} $</p>
        </div>
        <p className="text-xs text-base-50 font-light">
          Shipping and taxs calculated at checkout
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 mt-4">
        <Button variant="primary" isOutline={true}>
          View Cart
        </Button>
        <Button size="normal">Checkout</Button>
      </div>
    </div>
  );
};
