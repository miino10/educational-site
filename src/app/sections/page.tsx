import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Sections } from "../../../data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

function SectionsPage() {
  return (
    <div className=" flex flex-col gap-12 h-fit  w-[70vw] lg:w-[40vw] py-2">
      {Sections.map((data) => (
        <div
          className={
            data.isContined
              ? "bg-[rgb(232,168,247)]  rounded-md h-fit flex flex-col md:flex-row p-5"
              : "bg-gray-300 rounded-md h-fit flex p-5 flex-col md:flex-row"
          }
          key={data.id}
        >
          <div className="flex-1 py-4 flex  flex-col gap-5">
            <div
              className={
                data.isContined
                  ? "bg-green-400 py-0 px-5 rounded-md w-fit "
                  : "bg-gray-100 py-0 px-5 rounded-md w-fit"
              }
            >
              <p>{data.level}</p>
            </div>
            <div>
              <h1 className="lg:text-xl font-semibold ">
                Section {data.sectionNumber}: {data.title}
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <Progress value={33} className="border-black border" />
              <p>
                {data.jobDone}/{data.jobNumber}
              </p>
            </div>
            <div className="flex gap-2">
              {data.isContined ? (
                <>
                  {" "}
                  <Link
                    href={`/section/${data.sectionNumber}`}
                    className="bg-white text-black rounded-md p-2  "
                  >
                    Continue
                  </Link>
                  <button>See details</button>
                </>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger>
                      <DialogDescription className="bg-white text-blue-400 rounded-md p-2  ">
                        Jump here
                      </DialogDescription>
                    </DialogTrigger>
                    <DialogContent className="p-5">
                      <DialogHeader>
                        <DialogTitle>Please finish previous parts.</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <button className="text-blue-400">See details</button>
                </>
              )}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image src={data.Image} alt={""} width={150} height={150} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionsPage;
