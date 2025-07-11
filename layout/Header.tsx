"use client";

import React, { useRef, useEffect } from "react";
import NavItemComponent from "../components/custom/NavItemComponent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems } from "@/types/navigation";
import { NavItem } from "@/types/layout";
import { useHeaderHeight } from "@/context/HeaderContext";
import { Cross, ArrowRight } from "lucide-react";
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
      <div
        ref={containerRef}
        className="backdrop-blur-md border-b border-gray-200/50 shadow-lg"
      >
        <div className="max-w-screen-xl mx-auto flex py-4 w-full justify-between items-center px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Cross className="text-white text-xl" />
            </div>
            <div>
              <h1
                className={`text-4xl font-italianno leading-none transition-colors duration-300 ${
                  isHomePage ? "text-white" : "text-gray-700"
                }`}
              >
                Good Shepherd
              </h1>
              <p className="text-lcms-gold text-sm font-medium -mt-1">
                Lutheran Church
              </p>
            </div>
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((navItem: NavItem) => (
              <NavItemComponent
                key={navItem.label}
                {...navItem}
                isHomePage={isHomePage}
              />
            ))}
          </nav>

          {/* Button */}
          <div className="flex justify-end items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/new" className="inline-flex items-center gap-2">
                I&apos;m New Here
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
