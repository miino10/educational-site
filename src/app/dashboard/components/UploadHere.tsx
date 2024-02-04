"use client";

import { Progress } from "@/components/ui/progress";
import Dropzone from "react-dropzone";
import { Cloud, Image } from "lucide-react";
import { FormEvent, useState } from "react";
import { useUploadThing } from "@/utils/uploadthing";
import { useToast } from "@/components/ui/use-toast";

export default function UploadHere() {
  const [isUploading, setIsuploading] = useState<boolean>(false);

  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { startUpload } = useUploadThing("imageUploader");

  const { toast } = useToast();

  const startSimulatedProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress: number) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);
    return interval;
  };
  const uploadDropzon = () => {
    return (
      <Dropzone
        multiple={false}
        onDrop={async (acceptedFiles) => {
          setIsuploading(true);
          const progressInterval = startSimulatedProgress();
          // await new Promise((resolve) => setTimeout(resolve, 15000));

          //handle file uploading
          console.log(acceptedFiles);

          const res = await startUpload(acceptedFiles);
          if (!res) {
            return toast({
              title: "something went wrong",
              description: "please try again ama usabir",
              variant: "destructive",
            });
          }

          const [fileResponse] = res;

          const key = fileResponse.key;
          console.log(res);
          if (!key) {
            return toast({
              title: "something went wrong",
              description: "please try again ama usabir",
              variant: "destructive",
            });
          }
          clearInterval(progressInterval);
          setUploadProgress(100);

          console.log(acceptedFiles);
        }}
      >
        {({ acceptedFiles, getRootProps }) => (
          <div
            {...getRootProps()}
            className="border border-dashed border-gray-400  m-4  rounded-lg  h-64 w-full"
          >
            <div className="w-full h-full  flex justify-center items-center">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-full cursor-pointer rounded-lg bg-gray-50  hover:bg-gray-100"
              >
                <div className="flex flex-col pb-6 pt-5  items-center justify-center">
                  <Cloud className="h-6 w-6  text-zinc-500 mb-2" />
                  <p className="font-semibold">click to upload</p>
                </div>
                {acceptedFiles && acceptedFiles[0] ? (
                  <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline  outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                    <div className="grid  px-3 py-2  place-items-center">
                      {" "}
                      <Image className="text-red-500 h-6 w-6" />
                    </div>
                    <div className="text-sm truncate px-3 py-2 w-full">
                      {acceptedFiles[0].name}
                    </div>
                  </div>
                ) : null}
                {isUploading ? (
                  <div className="w-full  max-w-xs mx-auto mt-4">
                    <Progress
                      value={uploadProgress}
                      className="h-1 w-full bg-zinc-200 text-blue-500"
                    />
                  </div>
                ) : null}
              </label>
            </div>
          </div>
        )}
      </Dropzone>
    );
  };

  return <div>{uploadDropzon()}</div>;
}
