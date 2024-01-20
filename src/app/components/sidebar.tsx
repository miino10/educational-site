import Image from "next/image";
import React from "react";
import MenuLinks from "./MenuLinks";
import Link from "next/link";
interface MenuItems {
  title: string;

  path: string;
  image: string;
}
export const menuItems: MenuItems[] = [
  {
    title: "Learn",

    path: "/learn",
    image: "/home.png",
  },

  {
    title: "Leaderboards",

    path: "/leaderboard",
    image: "/gold1.png",
  },
  {
    title: "Parents",

    path: "/parents",
    image: "/parent.png",
  },
  {
    title: "sections",

    path: "/sections",
    image: "/star.png",
  },
  {
    title: "Profile",

    path: "/profile",
    image: "/profile.png",
  },
];

function sidebar() {
  return (
    <div className=" border-gray-300 border-r w-[18vw] h-screen fixed top-0">
      {" "}
      <div className="bg-white w-full flex justify-center items-center py-5">
        <Link href={"/"}>
          <Image src="/please.png" alt={""} width={100} height={100} />
        </Link>
      </div>
      <div className="bg-blue-100 h-full px-3 py-5 flex flex-col gap-5">
        {menuItems.map((item) => (
          <MenuLinks item={item} />
        ))}
      </div>
    </div>
  );
}

export default sidebar;
