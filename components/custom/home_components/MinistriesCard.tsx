import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col group">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 mb-6 overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B6F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="px-6">
          <CardTitle className="text-2xl font-serif font-bold text-stone-700">
            {title}
          </CardTitle>
          <div className="w-16 h-1 bg-[#D4AF37] mt-4" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button
          asChild
          variant="default"
          className="bg-stone-700 text-white hover:bg-stone-700/90 px-6 py-2 text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#1B3B6F]/10"
        >
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MinistriesCard;
