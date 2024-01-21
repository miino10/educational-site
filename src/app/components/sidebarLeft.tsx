import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

function SidebarLeft() {
  return (
    <div className=" justify-end bg-blue-500 items-center w-full py-5 gap-2   lg:w-[35vw]  md:h-fit md:sticky md:top-0 md:pt-8 flex flex-col  md:gap-5 ">
      <div className="bg-red-200 w-[75vw] lg:w-full flex items-center gap-5  p-5">
        <Select>
          <SelectTrigger className="w-[150px] py-5">
            <SelectValue placeholder="Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mm" className="w-full">
              <div className="flex w-full items-center gap-2">
                <Image src={"/language.svg"} alt={""} width={40} height={40} />
                <p>Somali</p>
              </div>
            </SelectItem>
            <SelectItem value="dark">
              {" "}
              <div className="flex w-full items-center gap-2">
                <Image src={"/math.svg"} alt={""} width={40} height={40} />
                <p>Math</p>
              </div>
            </SelectItem>

            <div>
              <Link href={"/invoice"} className="bg-green-200 p-2 w-full">
                Add new course
              </Link>
            </div>
          </SelectContent>
        </Select>
        <div className="flex gap-2 items-center justify-center ">
          <Image src={"/love.svg"} width={30} height={30} alt={""} />
          <p className="text-red-500 font-semibold">5</p>
        </div>
      </div>
      <div>
        <div></div>
        <div className="bg-white flex flex-col w-[75vw] lg:w-full gap-5 norger-gray-600 border rounded-xl py-4 px-8">
          <div>
            {" "}
            <p className=" text-center lg:text-xl">
              Create a profile to save your progress!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button className=" bg-green-400 p-2">Create a profile</button>
            <button>sign in</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SidebarLeft;
