"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, useContext } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClientt = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: String(process.env.NEXT_PUBLIC_WIX_CLIENT_ID),
    tokens: {
      refreshToken,
      accessToken: {
        value: "",
        expiresAt: 0,
      },
    },
  }),
});

export type WixClient = typeof wixClientt;

export const WixContext = createContext<WixClient>(wixClientt);

export const WixContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WixContext.Provider value={wixClientt}>{children}</WixContext.Provider>
  );
};

export const useWixClient = () => {
  return useContext(WixContext);
};
