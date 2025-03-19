import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ImageCard = ({ src, alt, title, description }: ImageCardProps) => {
  return (
    <div className="flex flex-col group">
      <div className="h-[300px] relative mb-6 overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B6F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-[#1B3B6F]">{title}</h3>
        <p className="text-gray-600 text-justify leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
