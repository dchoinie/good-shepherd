"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { NavItem, SubNavItem } from "../types/layout";
import Link from "next/link";

const NavItemComponent = ({ label, subItems, link }: NavItem) => {
  const [isOpen, setIsOpen] = useState(false);

  if (subItems) {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1.5 text-white/90 hover:text-white transition-all duration-300 cursor-pointer group">
          <span className="font-medium relative">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </span>
          <ChevronDown
            size={14}
            className={`self-center transition-transform duration-300 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="min-w-[220px] p-2 mt-2 rounded-xl shadow-lg border border-gray-100 bg-white/95 backdrop-blur-sm"
          align="start"
        >
          {subItems?.map((subItem: SubNavItem) => (
            <DropdownMenuItem
              key={subItem.label}
              className="cursor-pointer focus:bg-[#1B3B6F]/5 rounded-lg transition-colors duration-200"
            >
              <Link
                href={subItem.link}
                className="w-full text-[#4A4A4A]/90 hover:text-[#4A4A4A] transition-colors duration-200"
              >
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
        className="px-2 py-1.5 text-white/90 hover:text-white transition-all duration-300 font-medium cursor-pointer group relative"
      >
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  }

  return <></>;
};

export default NavItemComponent;
