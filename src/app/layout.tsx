import type { Metadata } from "next";
import { Cabin_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { WixContextProvider } from "@/context/wix-context";

const CabinCon = Cabin_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Gereh Gallery - Handicraft Product",
  description: "provide modern and traditional handcraft product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${CabinCon.variable}`}>
      <body
        className="grid grid-rows-[132px_1fr_auto] h-screen"
        suppressHydrationWarning={true}
      >
        <WixContextProvider>
          <Header />
          {children}
          <Footer />
        </WixContextProvider>
      </body>
    </html>
  );
}
