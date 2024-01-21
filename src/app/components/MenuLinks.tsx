"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuItems {
  title: string;
  path: string;
  image: string;
}

const MenuLinks: React.FC<{ item: MenuItems }> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      key={item.title}
      href={item.path}
      className={
        pathname === item.path
          ? " bg-[rgb(254,219,131)] rounded-full md:rounded-xl border-[#d946ef] border-[1px] md:border-[2px] px-2  md:py-1 w-full flex justify-center md:flex-col gap-4 "
          : " md:px-2 md:py-1 hover:bg-gray-200 rounded-xl flex justify-center md:flex-col gap-4"
      }
    >
      <div className="flex items-center">
        <div className="flex gap-2 items-center  md:p-2 relative w-[2rem] h-[2rem] md:w-[3vw] md:h-[3vw]">
          <Image src={item.image} alt={""} fill />
        </div>
        <div>
          {" "}
          <p className="hidden md:flex lg:text-lg lg:font-medium text-black">
            {item.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MenuLinks;
