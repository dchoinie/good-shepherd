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
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover shadow-[0_0_10px_rgba(255,0,0,0.5),0_0_20px_rgba(255,165,0,0.5),0_0_30px_rgba(255,255,0,0.5),0_0_40px_rgba(0,255,0,0.5),0_0_50px_rgba(0,0,255,0.5),0_0_60px_rgba(75,0,130,0.5)]"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
