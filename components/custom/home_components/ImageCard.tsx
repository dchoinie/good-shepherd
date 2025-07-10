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
    <div className="flex flex-col">
      <div className="relative">
        <div className="flex flex-col items-center">
          <Icon className="w-12 h-12 text-lcms-gold mb-4" />
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-700 mb-1">
              {latin}
            </h2>
            <p className="text-stone-700/80 text-lg">{title}</p>
          </div>
          <div className="absolute -inset-8 bg-stone-700/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
      <div className="h-[350px] relative mb-6 overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 mt-3"
        />
      </div>
    </div>
  );
};

export default ImageCard;
