import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
  tag?: string;
  tagIcon?: React.ReactNode;
  titleColor?: string;
  subtitleColor?: string;
  tagBgColor?: string;
  tagTextColor?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  tag,
  tagIcon,
  titleColor = "text-gray-800",
  subtitleColor = "text-gray-500",
  tagBgColor = "bg-lcms-navy",
  tagTextColor = "text-lcms-gold",
}: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      {tag && (
        <div
          className={`inline-flex items-center gap-2 ${tagBgColor} ${tagTextColor} px-4 py-2 rounded-full text-sm font-medium mb-4`}
        >
          {tagIcon}
          {tag}
        </div>
      )}
      <h2 className={`text-5xl font-bold ${titleColor} mb-4`}>{title}</h2>
      {subtitle && (
        <p className={`text-xl ${subtitleColor} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
