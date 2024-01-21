import React from "react";
import { Sections } from "../../../../data";

import { PiNotebookFill } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

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
      ))}
    </div>
  );
}

export default SectionPage;
