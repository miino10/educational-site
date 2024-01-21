import React from "react";
import { Sections } from "../../../../data";

import { PiNotebookFill } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { MdStars } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

function SectionPage({ params }: { params: { slug: string } }) {
  const chapterColors = [
    "bg-[rgb(88,203,5)]",
    "bg-[rgb(206,129,255)]",
    "bg-[rgb(2,205,156)]",
    "bg-[rgb(28,175,246)]",
    "bg-[rgb(255,133,208)]",
  ];

  const selectedSection = Sections.find(
    (data) => data.sectionNumber === parseInt(params.slug)
  );

  if (!selectedSection) {
    return (
      <div>
        <p>Section not found</p> <p>{params.slug}</p>
      </div>
    );
  }

  return (
    <div className="ml-5 w-[70vw] lg:w-[40vw]">
      <div className="flex gap-5 items-center   rounded-lg p-2  mb-5 border-b border-gray-300 ">
        {" "}
        <div>
          <Link href={"/sections"}>
            <FaArrowLeft className="cursor-pointer text-gray-500" />
          </Link>
        </div>
        <div className="w-full flex justify-center p-2">
          <p className="text-gray-500 text-xl">
            Section {selectedSection.sectionNumber}: {selectedSection.title}
          </p>
        </div>
      </div>

      {selectedSection.chapters?.map((chapter, chapterIndex) => (
        <>
          <div
            key={chapter.id}
            className={`${
              chapterColors[chapterIndex % chapterColors.length]
            } px-4 py-7 rounded-xl text-white flex flex-col md:flex-row gap-5 items-center justify-between mb-6  `}
          >
            <div className="flex flex-col  gap-3">
              <h1 className="text-xl font-semibold">{chapter.name}</h1>
              <p>{chapter.description}</p>
            </div>
            <div
              key={chapter.id}
              className={
                "border-gray-600 flex gap-4 border shadow-2xl font-semibold   p-2 rounded-xl  items-center "
              }
            >
              <PiNotebookFill className="text-xl" />
              <button>GUIDEBOOK</button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:gap-2  h-full w-[70vw] lg:w-full py-2    ">
            <div className="h-[20rem]   flex justify-center items-start md:p-4 w-full">
              <div className="relative w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem]  ">
                <Image
                  src={"/tomjerry.png"}
                  alt={""}
                  fill
                  className=" object-cover "
                />
              </div>
            </div>
            <div className="w-full py-2  ">
              {chapter.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className=" md:w-full  flex  justify-center gap-20 mb-5"
                >
                  <Popover>
                    <PopoverTrigger>
                      {" "}
                      <MdStars
                        className={`${
                          (lesson.status === "start" &&
                            " w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] text-green-500") ||
                          (lesson.status === "LOCKED" &&
                            "w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] text-gray-500")
                        }`}
                      />
                    </PopoverTrigger>
                    <PopoverContent
                      className={`${
                        (lesson.status === "start" &&
                          " bg-green-500 w-[10rem] md:w-[18rem] text-white") ||
                        (lesson.status === "LOCKED" &&
                          "  w-[10rem] md:w-[18rem]  bg-[rgb(247,247,247)] text-[rgb(175,175,175)]")
                      }`}
                    >
                      <div className="flex flex-col gap-5">
                        <p className="text-lg font-semibold">{lesson.name}</p>
                        <p>decription im good at</p>

                        <button
                          className={`${
                            (lesson.status === "start" &&
                              "text-green-600 bg-white p-3 rounded-xl font-semibold") ||
                            (lesson.status === "LOCKED" &&
                              "   bg-[rgb(229,229,229)] p-3 rounded-xl font-semibold")
                          }`}
                        >
                          {lesson.status}
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              ))}
            </div>
            <div className="h-[20rem]  flex justify-center items-end md:p-4 w-full">
              <div className="relative w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem]  flex  ">
                <Image
                  src={"/tomjerry.png"}
                  alt={""}
                  fill
                  className=" object-cover "
                />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default SectionPage;
