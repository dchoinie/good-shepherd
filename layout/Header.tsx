"use client";

import React, { useRef, useEffect } from "react";
import NavItemComponent from "../components/custom/NavItemComponent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems } from "@/types/navigation";
import { NavItem } from "@/types/layout";
import { useHeaderHeight } from "@/context/HeaderContext";
import { Cross } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const containerRef = useRef<HTMLDivElement>(null);
  const { setHeaderHeight } = useHeaderHeight();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };

    // Initial calculation
    updateHeaderHeight();

    // Add resize listener to recalculate on window resize
    window.addEventListener("resize", updateHeaderHeight);

    // Cleanup
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [setHeaderHeight]);

  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <div className="flex py-6 w-full justify-between items-center px-8">
        <div className="flex gap-24">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lcms-gold">
              <Cross />
            </span>
            <h1 className="text-lcms-gold text-6xl font-italianno">
              Good Shepherd
            </h1>
          </Link>
          <div className="flex gap-16 items-center">
            {navItems.map((navItem: NavItem) => (
              <NavItemComponent
                key={navItem.label}
                {...navItem}
                isHomePage={isHomePage}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-4">
          <Button
            asChild
            variant="default"
            size="lg"
            className="text-stone-800 bg-lcms-gold hover:bg-lcms-gold/80"
          >
            <Link href="/new">I&apos;m New</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
