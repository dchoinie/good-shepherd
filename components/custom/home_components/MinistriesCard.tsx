import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MinistriesCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const MinistriesCard = ({
  title,
  description,
  image,
  href,
}: MinistriesCardProps): JSX.Element => {
  return (
    <div className="group relative">
      {/* Decorative background card */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>

      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 hover:shadow-2xl">
        {/* Image section */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content section */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-stone-700 transition-colors duration-300">
            {title}
          </h3>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-lcms-gold mb-4 transform origin-left group-hover:scale-x-125 transition-transform duration-300"></div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed flex-1 mb-6">
            {description}
          </p>

          {/* Button */}
          <Button
            asChild
            className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 self-start"
          >
            <Link href={href} className="inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MinistriesCard;
