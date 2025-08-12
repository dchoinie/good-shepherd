"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { NavItem, SubNavItem } from "../../types/layout";
import Link from "next/link";

interface NavItemComponentProps extends NavItem {
  isHomePage?: boolean;
}

const NavItemComponent = ({
  label,
  subItems,
  link,
  isHomePage = false,
}: NavItemComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (subItems && subItems.length > 0) {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          className={`flex items-center gap-1 text-[1rem] focus:outline-none ${
            isHomePage ? "text-white" : "text-stone-700"
          }`}
        >
          <span className="text-inherit">{label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 text-inherit ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="max-w-[200px] overflow-hidden"
          sideOffset={8}
          align="start"
        >
          {subItems?.map((subItem: SubNavItem) => (
            <DropdownMenuItem
              key={subItem.label}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <Link href={subItem.link as any} className="text-inherit w-full">
                {subItem.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (link) {
    return (
      <Link
        href={link as any}
        className={`text-inherit text-[1rem] ${
          isHomePage ? "text-white" : "text-stone-700"
        }`}
      >
        {label}
      </Link>
    );
  }

  return <></>;
};

export default NavItemComponent;
