import Link from "next/link";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SignIn, currentUser, SignUp } from "@clerk/nextjs";

async function Authcomponents() {
  const user = await currentUser();
  return (
    <div className="bg-white flex flex-col w-[75vw] lg:w-full gap-5 norger-gray-600 border rounded-xl py-4 px-8">
      <div>
        {" "}
        <p className=" text-center lg:text-xl">
          Create a profile to save your progress!
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <AlertDialog>
          <AlertDialogTrigger className="bg-green-300 p-2 rounded-md">
            {" "}
            sign up
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogFooter>
              <AlertDialogCancel>X</AlertDialogCancel>
            </AlertDialogFooter>
            <SignUp />
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <AlertDialog>
        <AlertDialogTrigger className="bg-red-300 p-2 rounded-md">
          {" "}
          sign in
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel>X</AlertDialogCancel>
          </AlertDialogFooter>
          <SignIn />
        </AlertDialogContent>
      </AlertDialog>
      <div></div>
    </div>
  );
}

export default Authcomponents;
