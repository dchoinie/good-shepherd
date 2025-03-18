"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavItem, SubNavItem } from "../types/layout";
import Link from "next/link";

const NavItemComponent = ({ label, subItems, link }: NavItem) => {
  const [isOpen, setIsOpen] = useState(false);

  if (subItems) {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-rose-900 transition-colors cursor-pointer">
          <span className="font-medium">{label}</span>
          {isOpen ? (
            <ChevronUp size={14} className="self-center" />
          ) : (
            <ChevronDown size={14} className="self-center" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[200px] p-2">
          {subItems?.map((subItem: SubNavItem) => (
            <DropdownMenuItem
              key={subItem.label}
              className="cursor-pointer focus:bg-rose-50"
            >
              <Link href={subItem.link} className="w-full text-gray-700">
                {subItem.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (!subItems && link) {
    return (
      <Link
        href={link}
        className="px-2 py-1 text-gray-700 hover:text-rose-900 transition-colors font-medium cursor-pointer"
      >
        {label}
      </Link>
    );
  }

  return <></>;
};

export default NavItemComponent;
