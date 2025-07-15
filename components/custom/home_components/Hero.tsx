"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "../Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = (): React.ReactNode => {
  return (
    <div className="relative w-full h-screen overflow-hidden px-6 lg:px-0 pt-28 lg:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/church_exterior.jpg"
          alt="Church Exterior"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-800/70 to-gray-900/80" />
      </div>

      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col h-full items-center justify-center text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-7xl font-bold text-white mb-6 leading-tight"
        >
          Welcome to{" "}
          <span className="font-italianno font-medium text-lcms-gold text-[7.5rem] leading-none">
            Good Shepherd
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-stone-300 text-2xl leading-relaxed mb-8 max-w-3xl"
        >
          Grow in God&apos;s Truth. Show Jesus&apos; Love.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl"
        >
          At Good Shepherd, we are committed to growing in our understanding of
          God&apos;s truth through worship, study, and fellowship.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button
            asChild
            className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 text-xl font-semibold px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            <Link href="/new" className="inline-flex items-center gap-2">
              I&apos;m New Here
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-stone-800 text-xl font-semibold px-10 py-4 transition-all duration-300 transform hover:scale-105"
            size="lg"
            asChild
          >
            <Link href="/stream" className="inline-flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Live
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
