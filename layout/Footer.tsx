"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/types/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FooterNewsletterSignup from "@/components/custom/FooterNewsletterSignup";

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

      <div className="max-w-screen-xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Column 1: Logo/Contact Info + Newsletter */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo and Contact Info */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
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

            {/* Newsletter Signup */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <FooterNewsletterSignup />
            </div>
          </div>

          {/* Column 2: Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
                         {/* First Row - First 3 navigation sections */}
             {navItems.slice(0, 3).map((section) => (
               <div key={section.label} className="space-y-4 flex flex-col items-center">
                 <h3 className="font-bold text-lg text-white border-b border-lcms-gold/30 pb-2 text-center">
                   {section.label}
                 </h3>
                 <div className="space-y-3 text-center">
                   {section.subItems ? (
                     section.subItems.map((item) => (
                       <div key={item.label}>
                         <Link
                           href={item.link as any}
                           className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 block"
                         >
                           {item.label}
                         </Link>
                       </div>
                     ))
                   ) : (
                     <div>
                       <Link
                         href={section.link || ("#" as any)}
                         className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 block"
                       >
                         {section.label}
                       </Link>
                     </div>
                   )}
                 </div>
               </div>
             ))}

                         {/* Second Row - Remaining navigation sections */}
             {navItems.slice(3, 6).map((section) => (
               <div key={section.label} className="space-y-4 flex flex-col items-center">
                 <h3 className="font-bold text-lg text-white border-b border-lcms-gold/30 pb-2 text-center">
                   {section.label}
                 </h3>
                 <div className="space-y-3 text-center">
                   {section.subItems ? (
                     section.subItems.map((item) => (
                       <div key={item.label}>
                         <Link
                           href={item.link as any}
                           className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 block"
                         >
                           {item.label}
                         </Link>
                       </div>
                     ))
                   ) : (
                     <div>
                       <Link
                         href={section.link || ("#" as any)}
                         className="text-sm text-gray-300 hover:text-lcms-gold transition-colors duration-300 block"
                       >
                         {section.label}
                       </Link>
                     </div>
                   )}
                 </div>
               </div>
             ))}
          </div>
        </div>

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
