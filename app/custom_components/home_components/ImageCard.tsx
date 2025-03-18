import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ImageCard = ({ src, alt, title, description }: ImageCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="h-[300px] relative mb-12">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
