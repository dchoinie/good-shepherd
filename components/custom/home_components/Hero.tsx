"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "../Container";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = (): React.ReactNode => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/church_exterior.jpg"
          alt="Church Exterior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col h-full items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome to{" "}
          <motion.span
            className="font-italianno font-medium text-lcms-gold text-[6rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Good Shepherd
          </motion.span>
        </h1>
        <h4 className="text-stone-300 text-3xl leading-relaxed mb-3 -mt-2">
          Grow in God&apos;s Truth. Show Jesus&apos; Love.
        </h4>
        <div className="flex gap-6">
          <Button
            asChild
            variant="default"
            className="bg-lcms-gold hover:bg-lcms-gold/80 text-lg text-stone-800 font-medium px-8 py-3"
            size="lg"
          >
            <Link href="/new">I&apos;m New</Link>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-stone-800 text-lg font-medium px-8 py-3"
            size="lg"
            asChild
          >
            <Link href="/stream">Live Stream</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
