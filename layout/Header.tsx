"use client";

import NavItemComponent from "../components/custom/NavItemComponent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { navItems } from "@/types/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`w-full ${
        isHomePage
          ? "absolute top-0 left-0 right-0 bg-transparent"
          : "bg-gray-50"
      } z-50`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-serif font-bold ${
              isHomePage ? "text-white" : "text-lcms-gold"
            }`}
          >
            Good Shepherd
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              {navItems.map((item) => (
                <NavItemComponent
                  key={item.label}
                  label={item.label}
                  link={item.link}
                  subItems={item.subItems}
                  isHomePage={isHomePage}
                />
              ))}
            </nav>
            <Button
              asChild
              size="lg"
              className={`${
                isHomePage
                  ? "bg-[#D4AF37] text-[#1B3B6F] hover:bg-[#D4AF37]/90"
                  : "bg-lcms-gold text-lcms-navy hover:bg-lcms-gold/90"
              } font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Link href="/new">I&apos;m New</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
