"use client";

import React, { useRef, useEffect, useState } from "react";
import NavItemComponent from "../components/custom/NavItemComponent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { navItems } from "@/types/navigation";
import { NavItem } from "@/types/layout";
import { useHeaderHeight } from "@/context/HeaderContext";
import { Cross, ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const containerRef = useRef<HTMLDivElement>(null);
  const { setHeaderHeight } = useHeaderHeight();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [setHeaderHeight]);

  return (
    <div className="absolute top-0 left-0 z-50 w-full overflow-x-hidden">
      <div
        ref={containerRef}
        className="backdrop-blur-md border-b border-gray-200/50 shadow-lg overflow-x-hidden"
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

          {/* Centered Navigation (Desktop Only) */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((navItem: NavItem) => (
              <NavItemComponent
                key={navItem.label}
                {...navItem}
                isHomePage={isHomePage}
              />
            ))}
          </nav>

          {/* Hamburger Menu (Mobile Only) */}
          {isMobile && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu
                  className={`w-7 h-7 ${isHomePage ? "text-white" : "text-[hsl(var(--lcms-navy))]"}`}
                />
              </Button>
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetContent side="left" className="p-0 w-64 max-w-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
                      <Link href="/">
                        <div className="w-10 h-10 bg-gradient-to-br from-stone-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                          <Cross className="text-white text-xl" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-italianno leading-none text-gray-700">
                            Good Shepherd
                          </h1>
                          <p className="text-lcms-gold text-xs font-medium -mt-1">
                            Lutheran Church
                          </p>
                        </div>
                      </Link>
                    </div>
                    <nav className="flex-1 overflow-y-auto px-4 py-6">
                      <ul className="flex flex-col gap-2">
                        {navItems.map((item) => (
                          <li key={item.label}>
                            {item.subItems ? (
                              <div>
                                <span className="font-semibold text-gray-700 block mb-1">
                                  {item.label}
                                </span>
                                <ul className="pl-4 flex flex-col gap-1">
                                  {item.subItems.map((sub) => (
                                    <li key={sub.label}>
                                      <Link
                                        href={sub.link as any}
                                        className="block py-1 px-2 rounded hover:bg-gray-100 text-gray-600"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link
                                href={(item.link || "#") as any}
                                className="block py-2 px-2 rounded hover:bg-gray-100 text-gray-700 font-semibold"
                                onClick={() => setMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex justify-center">
                        <Button
                          asChild
                          size="lg"
                          className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full"
                        >
                          <Link
                            href="/new"
                            className="inline-flex items-center gap-2"
                            onClick={() => setMenuOpen(false)}
                          >
                            I&apos;m New Here
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          )}

          {/* Button (Desktop Only) */}
          {!isMobile && (
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
          )}
        </div>
      </div>
    </div>
  );
}
