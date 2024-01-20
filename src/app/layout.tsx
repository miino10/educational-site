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
        <div className=" md:flex gap-2">
          <div className="bg-yellow-200 w-[33vh]   ">
            <Sidebar />
          </div>
          <div className="flex-1 w-full px-9 pt-8"> {children}</div>
          <div className="  w-[60vh]">
            <SidebarLeft />
          </div>
        </div>
      </body>
    </html>
  );
}
