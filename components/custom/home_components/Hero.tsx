"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "../PageContainer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundPattern from "@/components/custom/background-pattern";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-lcms-navy to-[#2C5282]">
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Main Content */}
      <PageContainer className="relative h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-12 py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-white"
              >
                Good Shepherd
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight text-[#D4AF37]"
              >
                Lutheran Church
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed font-source-serif font-semibold mx-auto lg:mx-0">
                Grow in God&apos;s Truth. Show Jesus&apos; Love.
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed mx-auto lg:mx-0 font-source-serif">
                Welcome to Good Shepherd Lutheran Church! We are a Lutheran
                Church-Missouri Synod congregation located in North Mankato, MN
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/new"
                className="bg-lcms-gold text-lcms-navy hover:bg-lcms-gold/90 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-source-serif flex items-center rounded"
              >
                I&apos;m New
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-14 bg-transparent border-2 border-lcms-gold text-lcms-gold hover:bg-lcms-gold/10 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-source-serif"
              >
                Live Stream
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative w-full max-w-lg mx-auto"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/loft_2.jpg"
                alt="Church Sanctuary"
                fill
                className="object-cover"
                priority
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B6F]/20 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20" />
          </motion.div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Hero;
