import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
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
    <Card>
      <CardHeader>
        <div className="relative w-full h-48 mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded"
          />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <hr className="border-b border-yellow-500 w-1/2" />
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default">
          <Link href={href}>{title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MinistriesCard;
