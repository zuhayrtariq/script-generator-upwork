"use client";
import {
  BookOpenIcon,
  CircleQuestionMarkIcon,
  CircleUserRoundIcon,
  SettingsIcon,
  SparkleIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import SidebarItem from "./sidebar-item";
import { Button } from "./ui/button";
import Image from "next/image";

const sidebarItems = [
  {
    title: "Script Generator",
    href: "/",
    icon: <SparkleIcon />,
  },
  {
    title: "Script Library",
    href: "/#",
    icon: <BookOpenIcon />,
  },
  {
    title: "Settings",
    href: "/#",
    icon: <SettingsIcon />,
  },
  {
    title: "Support",
    href: "/#",
    icon: <CircleQuestionMarkIcon />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen bg-gray-100 px-8 py-4">
      <div className="text-xl italic flex items-center gap-2 mb-12">
        <Image src={"/logo.png"} alt="Script It Logo" width={30} height={30} />{" "}
        Script It
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <SidebarItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              href={item.href}
              isActive={isActive}
            />
          );
        })}
      </div>

      {/* Sidebar Bottom */}
      <div className="">
        <div className="flex  gap-1 my-2 text-xs font-semibold items-center">
          <CircleUserRoundIcon className="size-5" />
          info@examplemail.com
        </div>
        <Button className="w-full text-xs">Sign out</Button>
      </div>
    </div>
  );
};

export default Sidebar;
