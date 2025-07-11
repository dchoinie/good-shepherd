import React from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  latin: string;
  icon: LucideIcon;
}

const ImageCard = ({ src, alt, title, latin, icon: Icon }: ImageCardProps) => {
  return (
    <div className="group relative">
      {/* Decorative background card */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300 opacity-20"></div>

      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 hover:shadow-2xl overflow-hidden">
        {/* Icon and Title Section */}
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">{latin}</h2>
          <p className="text-gray-700 text-lg font-medium">{title}</p>
        </div>

        {/* Image Section */}
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
