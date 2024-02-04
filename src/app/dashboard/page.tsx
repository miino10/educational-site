import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import UploadHere from "./components/UploadHere";
import PostNewCourse from "./components/postNewCourse";

function Dashboard() {
  return (
    <div className="bg-green-300 w-full">
      {/* <PostNewCourse /> */}
      <UploadHere />
    </div>
  );
}

export default Dashboard;
