import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

type SidebarItemProp = {
  title: string;
  href: string;
  icon: any;
  isActive: boolean;
};

const SidebarItem = ({ title, href, icon, isActive }: SidebarItemProp) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex gap-3 items-center justify-left  rounded-md px-6 py-3 text-xs font-medium transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "bg-white text-black"
      )}
    >
      {" "}
      <span className="size-4 flex items-center justify-center">{icon}</span>
      <p>{title}</p>
    </Link>
  );
};

export default SidebarItem;
