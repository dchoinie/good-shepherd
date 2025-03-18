"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "../../custom_components/PageContainer";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 h-screen w-full" />

      <PageContainer className="h-screen -mt-20">
        <div className="flex flex-col h-full justify-center relative">
          {/* Content Section */}

          <div className="max-w-xl">
            <h1 className="mb-4 text-5xl font-bold leading-tight text-gray-900">
              Grow in God&apos;s Truth. Show Jesus&apos; Love.
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Welcome to Good Shepherd Lutheran Church! We are a Lutheran
              Church-Missouri Synod congregation located in North Mankato, MN
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-rose-900 hover:bg-rose-700">
                I&apos;m New
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-900 text-rose-900 hover:bg-gray-50"
              >
                Live Stream
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute right-0 top-[25%] h-[250px] w-[450px]"
          >
            <Image
              src="/loft_2.jpg"
              alt="Church Exterior"
              fill
              className="object-cover object-[center_25%] rounded shadow"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 top-[62%] h-[260px] w-[250px]"
          >
            <Image
              src="/baptism.jpg"
              alt="Church Exterior"
              fill
              className="object-cover object-[center_20%] rounded shadow"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute right-[22%] top-[62%] h-[225px] w-[350px]"
          >
            <Image
              src="/altar_2.jpg"
              alt="Church Exterior"
              fill
              className="object-cover object-[center_10%] rounded shadow"
              priority
            />
          </motion.div>
        </div>
      </PageContainer>
    </>
  );
};

export default Hero;
