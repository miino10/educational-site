import React from "react";

import Authcomponents from "./authcomponent";

import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

import CoursesList from "./CoursesList";

function SidebarLeft() {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className=" justify-end  items-center w-full py-5 gap-2   lg:w-[35vw]  md:h-fit md:sticky md:top-0 md:pt-8 flex flex-col  md:gap-5 ">
      <div className="bg-red-200 w-[75vw] lg:w-full flex items-center justify-between rounded-md   p-5">
        <CoursesList />
        <div>{userId && <UserButton />}</div>
      </div>
      {!userId && <Authcomponents />}
    </div>
  );
}

export default SidebarLeft;
