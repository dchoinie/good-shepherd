import React from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "../../custom_components/PageContainer";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 h-screen w-full">
        <Image
          src="/church_exterior.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        {/* Add gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />
      </div>
      <PageContainer>
        <div className="flex flex-col relative z-40 h-screen justify-center -mt-12">
          <h1 className="text-gray-50 text-4xl font-bold">
            Grow in God&apos;s Truth. Show Jesus&apos; Love.
          </h1>
          <h4 className="text-yellow-500 text-2xl italic mt-1 mb-6">
            Welcome To Good Shepherd Lutheran Church
          </h4>
          <div className="flex gap-6">
            <Button variant="default" size="lg" className="bg-yellow-500">
              I&apos;m New
            </Button>
            <Button
              variant="default"
              className="bg-white text-black hover:text-black hover:bg-slate-200"
              size="lg"
            >
              Live Stream
            </Button>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Hero;
