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
          ? " bg-[rgb(254,219,131)] rounded-xl border-[#d946ef] border-[2px] px-2 py-1  "
          : " px-2 py-1 hover:bg-gray-200 rounded-xl "
      }
    >
      <div className="flex gap-2 items-center w-full p-2">
        <Image src={item.image} alt={""} width={50} height={50} />
        <p className="md:flex lg:text-lg lg:font-medium text-black">
          {" "}
          {item.title}
        </p>
      </div>
    </Link>
  );
};

export default MenuLinks;
