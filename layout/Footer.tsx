"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/types/navigation";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Image
              src="/Cross_blue.png"
              alt="Good Shepherd Lutheran Church"
              width={50}
              height={50}
              className="mx-auto md:mx-0"
            />
            <div className="text-sm space-y-2">
              <p>2101 Lor Ray Dr</p>
              <p>North Mankato, MN</p>
              <p>Phone: 507.388.4336</p>
              <p>Email: goodshepmankato@gmail.com</p>
            </div>
          </div>

          {/* Navigation Sections */}
          {navItems.map((section) => (
            <div key={section.label} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.label}</h3>
              <ul className="space-y-2">
                {section.subItems ? (
                  section.subItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.link}
                        className="text-sm hover:text-gray-300 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      href={section.link || "#"}
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      {section.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Good Shepherd Lutheran Church,
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-gray-300 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
