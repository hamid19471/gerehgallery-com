"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./navigation";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CartModal } from "../cart-modal/cart-modal";
import { useWixClient } from "@/context/wix-context";
import { useCartStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";

export const Header: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [shopCart, setShopCart] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const wixClient = useWixClient();
  const router = useRouter();
  const isLoggendIn = wixClient.auth.loggedIn();
  const { cart, getCart, isLoading, removeItem } = useCartStore();
  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);
  return (
    <>
      <div className="flex flex-col lg:gap-2 gap-0 w-full items-center lg:justify-center justify-start py-2 lg:py-0">
        <div className="flex items-center justify-between w-full px-4 lg:py-2 py-0 border-b-[1px] pb-3 border-base-25/10">
          <div className="flex items-center justify-center gap-3">
            <Link href={`${isLoggendIn ? "/dashboard" : "/login"}`}>
              <Image src={"/icons/user.svg"} alt="" width={22} height={22} />
            </Link>
            <div className="relative">
              <span className="absolute -top-3 -right-2 w-4 h-4 text-sm rounded-full bg-error text-white flex items-center justify-center">
                {cart?.lineItems?.length || 0}
              </span>
              <Image
                src={"/icons/shop.svg"}
                alt="Gereh Gallery"
                width={22}
                height={22}
                onClick={() => setShopCart((prev) => !prev)}
                className="cursor-pointer"
              />
              {shopCart && (
                <CartModal setShopCart={setShopCart}>
                  <div className="max-h-[250px] overflow-scroll">
                    {isLoading
                      ? "Loading..."
                      : cart?.lineItems?.map((item) => (
                          <div
                            className="flex flex-col items-start gap-2 mt-6"
                            key={item._id}
                          >
                            <div className="flex w-full gap-3">
                              {item.image && (
                                <Image
                                  src={wixMedia.getScaledToFillImageUrl(
                                    item.image,
                                    96,
                                    80,
                                    {}
                                  )}
                                  alt=""
                                  width={96}
                                  height={200}
                                  className="object-cover rounded-md"
                                />
                              )}
                              <div className="w-full flex flex-col">
                                <div className=" flex items-center justify-between">
                                  <h3 className="font-semibold">
                                    {item.productName?.original}
                                  </h3>
                                  <h3 className="font-bold text-black">
                                    {item.price?.amount}$
                                  </h3>
                                </div>
                                <div className="text-sm text-base-25 font-light">
                                  {item.availability?.status}
                                </div>
                                <div className="flex items-center justify-between gap-2 mt-3">
                                  <span className="text-xs text-base-25 font-light">
                                    added:{" "}
                                    <span className="font-bold text-error">
                                      {item.quantity} items
                                    </span>
                                  </span>
                                  <button
                                    className="text-info font-light"
                                    onClick={() =>
                                      removeItem(wixClient, item._id!)
                                    }
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </CartModal>
              )}
            </div>
          </div>
          <Link href="/">
            <Image
              src={"/images/logo.webp"}
              alt="Gereh Gallery Logo"
              width={120}
              height={90}
              priority={true}
            />
          </Link>
          <div>
            <div className="hidden lg:flex items-center justify-center gap-2">
              <Image
                src={"/icons/facebook.svg"}
                alt="Facebook"
                width={18}
                height={18}
              />
              <Image
                src={"/icons/youtube.svg"}
                alt="Youtube"
                width={20}
                height={20}
              />
              <Image
                src={"/icons/instagram.svg"}
                alt="Instagram"
                width={18}
                height={18}
              />
            </div>
            <div className="lg:hidden">
              <Image
                src={"/images/menu-icon.svg"}
                alt=""
                width={24}
                height={24}
                onClick={() => setOpen(!open)}
              />
              <div>{open && <Navigation />}</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Navigation />
        </div>
      </div>
    </>
  );
};
