import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import SidebarLeft from "./components/sidebarLeft";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Sidebar /> */}
        <div className=" flex gap-2  w-full justify-between ">
          <div className=" w-[33vh] md:w-[33vh]   ">
            <Sidebar />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className=" h-fit lg:hidden ">
              <SidebarLeft />
            </div>
            <div className=" w-full px-9 pt-8  lg:w-[45vw] lg:mx-5  "> {children}</div>
            <div className=" hidden lg:flex    ">
              <SidebarLeft />
            </div>
          </div> 
        </div>
      </body>
    </html>
  );
}
