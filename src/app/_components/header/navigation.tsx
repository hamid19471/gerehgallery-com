"use client";

import { HeaderNav } from "@/data/main-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex z-50 flex-col lg:flex-row fixed w-full h-full  lg:pt-0 bg-black lg:bg-main-bg lg:w-auto top-16 lg:top-0  lg:h-auto right-0 lg:relative items-center justify-center gap-12 ">
      {HeaderNav.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.href}
            key={`menu-item-${index}`}
            className={`hover:scale-105 lg:hover:text-black text-white/70 lg:text-base-200 hover:text-white transition-all duration-150 ease-in-out ${
              isActive && "lg:text-black text-white scale-105 border-b"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};
