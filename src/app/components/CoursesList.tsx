import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { db } from "@/db";
import { courses } from "@/db/schema/courses";

async function CoursesList() {
  const data = await db.select().from(courses).all();
  return (
    <div className="flex items-center gap-5">
      <Select>
        <SelectTrigger className="w-[150px] py-5">
          <SelectValue placeholder="Courses" />
        </SelectTrigger>
        <SelectContent>
          {data.map((course) => (
            <SelectItem key={course.id} value={course.name} className="w-full">
              <div className="flex w-full items-center gap-2">
                <Image src={"/language.svg"} alt={""} width={30} height={30} />
                <p>{course.name}</p>
              </div>
            </SelectItem>
          ))}

          <div className="my-4">
            <Link href={"/invoice"} className="bg-green-200 p-3 w-ful rounded-md">
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
  );
}

export default CoursesList;
