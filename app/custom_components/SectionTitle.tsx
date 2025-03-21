import { Badge } from "@/components/ui/badge";
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
  tag?: string;
  tagColor?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  tag,
  tagColor = "bg-rose-900",
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center max-w-[800px] mx-auto text-center mb-16">
      <Badge className={`${tagColor} text-white`}>{tag}</Badge>
      <h2 className="text-4xl font-bold my-3 text-gray-800">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
