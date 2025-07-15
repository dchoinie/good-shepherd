"use client";

import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import ImageCard from "./ImageCard";
import { Cross, Book, ScrollText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Beliefs = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-stone-50 to-gray-50 relative overflow-hidden px-6 lg:px-0">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <PageContainer>
        <div className="relative z-10">
          <SectionTitle
            title="The Lutheran Confessions"
            tag="Our Faith"
            tagIcon={<Book className="w-4 h-4" />}
            subtitle="Drawn from God's Word, the Lutheran Confessions are a true and binding exposition of Holy Scripture and serve as authoritative texts for all pastors, congregations and other rostered church workers of The Lutheran Church—Missouri Synod."
          />

          {/* Main content in a 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Faith Alone Section */}
            <ImageCard
              src="/faith_alone.png"
              alt="Faith Alone"
              title="Faith Alone"
              latin="Sola Fide"
              icon={Cross}
            />

            {/* Grace Alone Section */}
            <ImageCard
              src="/grace_alone.png"
              alt="Grace Alone"
              title="Grace Alone"
              latin="Sola Gratia"
              icon={Book}
            />

            {/* Scripture Alone Section */}
            <ImageCard
              src="/scripture_alone.png"
              alt="Scripture Alone"
              title="Scripture Alone"
              latin="Sola Scriptura"
              icon={ScrollText}
            />
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center mt-16">
            <Button
              asChild
              className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 text-xl font-semibold px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <Link
                href="/our-faith"
                className="inline-flex items-center gap-2"
              >
                Learn More About Our Beliefs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Beliefs;
