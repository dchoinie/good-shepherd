"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/types/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const handleScrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="bg-lcms-navy text-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 relative z-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center md:items-start">
          {/* Logo and Contact Info */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/Cross_blue.png"
                alt="Good Shepherd Lutheran Church"
                width={50}
                height={50}
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="font-bold text-xl text-white">Good Shepherd</h3>
                <p className="text-lcms-gold text-sm font-medium">
                  Lutheran Church
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lcms-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <p className="font-medium text-white">2101 Lor Ray Dr</p>
                  <p className="text-gray-300">North Mankato, MN</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lcms-gold flex-shrink-0" />
                <p className="text-sm text-gray-300">507.388.4336</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lcms-gold flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  goodshepmankato@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-lcms-gold flex-shrink-0" />
                <p className="text-sm text-gray-300">Divine Service: 9:00 AM</p>
              </div>
            </div>
          </div>

          {/* Navigation Sections - First Row */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h3 className="font-bold text-lg text-white border-b border-lcms-gold/30 pb-2 w-full text-center md:text-left">
              {navItems[0]?.label}
            </h3>
            <ul className="space-y-3 w-full">
              {navItems[0]?.subItems ? (
                navItems[0].subItems.map((item) => (
                  <li key={item.label} className="w-full">
                    <Link
                      href={item.link as any}
                      className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group w-full"
                    >
                      <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="w-full">
                  <Link
                    href={navItems[0].link as any}
                    className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group w-full"
                  >
                    <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {navItems[0]?.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Navigation Sections - Second Row */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg text-white border-b border-lcms-gold/30 pb-2">
              {navItems[1]?.label}
            </h3>
            <ul className="space-y-3">
              {navItems[1]?.subItems ? (
                navItems[1].subItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.link as any}
                      className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group"
                    >
                      <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <Link
                    href={navItems[1]?.link || ("#" as any)}
                    className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group"
                  >
                    <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {navItems[1]?.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Navigation Sections - Third Row */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg text-white border-b border-lcms-gold/30 pb-2">
              {navItems[2]?.label}
            </h3>
            <ul className="space-y-3">
              {navItems[2]?.subItems ? (
                navItems[2].subItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.link as any}
                      className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group"
                    >
                      <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <Link
                    href={navItems[2]?.link || ("#" as any)}
                    className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group"
                  >
                    <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {navItems[2]?.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Additional Navigation Sections - Fourth Row (if needed) */}
        {navItems.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 items-center md:items-start text-center md:text-left">
            <div></div> {/* Empty space to align with first column */}
            {navItems.slice(3).map((section) => (
              <div
                key={section.label}
                className="space-y-4 flex flex-col items-center md:items-start"
              >
                <h3 className="font-bold text-lg text-white border-b border-lcms-gold/30 pb-2">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.subItems ? (
                    section.subItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.link as any}
                          className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group"
                        >
                          <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          {item.label}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <Link
                        href={section.link || ("#" as any)}
                        className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 flex items-center md:justify-start justify-center gap-2 group"
                      >
                        <span className="hidden md:inline w-1 h-1 bg-lcms-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {section.label}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Good Shepherd Lutheran Church,
              All rights reserved.
            </p>
            <div className="flex flex-col items-center space-y-2 md:flex-row md:items-center md:space-x-6 md:space-y-0 text-sm">
              <Link
                href={"/terms" as any}
                className="text-gray-400 hover:text-lcms-gold transition-colors duration-300"
                onClick={handleScrollToTop}
              >
                Terms & Conditions
              </Link>
              <Link
                href={"/privacy" as any}
                className="text-gray-400 hover:text-lcms-gold transition-colors duration-300"
                onClick={handleScrollToTop}
              >
                Privacy Policy
              </Link>
              <Link
                href={"/accessibility" as any}
                className="text-gray-400 hover:text-lcms-gold transition-colors duration-300"
                onClick={handleScrollToTop}
              >
                Accessibility
              </Link>
              <Link
                href="https://app.contentful.com/spaces/02dyhx9snvj0"
                target="_blank"
                className="text-gray-400 hover:text-lcms-gold transition-colors duration-300"
              >
                Website Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
