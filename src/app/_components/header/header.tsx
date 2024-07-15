"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <div className="flex flex-col lg:gap-2 gap-0 w-full items-center lg:justify-center justify-start py-2 lg:py-0">
        <div className="flex items-center justify-between w-full px-4 lg:py-2 py-0 border-b-[1px] pb-3 border-base-25/10">
          <section>icons</section>
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
            <div className="hidden lg:flex">icon</div>
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
