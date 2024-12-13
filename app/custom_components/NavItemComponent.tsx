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

const NavItemComponent = ({ label, subItems }: NavItem) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <div className="flex">
          {label}
          {isOpen ? (
            <ChevronUp size={14} className="ml-2 self-center" />
          ) : (
            <ChevronDown size={14} className="ml-2 self-center" />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {subItems?.map((subItem: SubNavItem) => (
          <DropdownMenuItem key={subItem.label}>
            <Link href={subItem.link}>{subItem.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavItemComponent;
