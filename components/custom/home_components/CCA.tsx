"use client";

import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { GraduationCap, BookOpen, Music, Users, ArrowRight, School, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CCA = () => {
  const ccaFeatures = [
    {
      title: "Classical Education",
      description:
        "A time-tested approach combining the classical liberal arts with Lutheran catechesis, preparing students for effective service in the world and everlasting life.",
      icon: BookOpen,
      color: "from-lcms-navy/5 to-lcms-navy/10",
      borderColor: "border-lcms-navy/20",
      iconBg: "bg-lcms-navy",
    },
    {
      title: "Grades K-8",
      description:
        "Comprehensive education from kindergarten through eighth grade, building strong foundations in language, knowledge, critical thinking, and expression.",
      icon: GraduationCap,
      color: "from-lcms-gold/10 to-lcms-gold/20",
      borderColor: "border-lcms-gold/30",
      iconBg: "bg-lcms-gold",
    },
    {
      title: "Christ-Centered",
      description:
        "Faith is integrated throughout all aspects of learning, with daily chapel, Christian education, and spiritual growth as core components of our program.",
      icon: School,
      color: "from-lcms-navy/5 to-lcms-gold/10",
      borderColor: "border-lcms-navy/20",
      iconBg: "bg-lcms-navy",
    },
    {
      title: "Music & Arts",
      description:
        "A singing school with comprehensive strings program, orchestra performances, and choral excellence that develops musical talent and appreciation.",
      icon: Music,
      color: "from-lcms-gold/10 to-lcms-gold/20",
      borderColor: "border-lcms-gold/30",
      iconBg: "bg-lcms-gold",
    },
    {
      title: "Small Class Sizes",
      description:
        "With a 15-student per room capacity, teachers know each child well, providing personalized attention and fostering strong relationships.",
      icon: Users,
      color: "from-lcms-navy/5 to-lcms-navy/10",
      borderColor: "border-lcms-navy/20",
      iconBg: "bg-lcms-navy",
    },
    {
      title: "Community Connection",
      description:
        "Located in North Mankato, CCA is connected to Good Shepherd Lutheran Church, providing a supportive community environment for families and students.",
      icon: MapPin,
      color: "from-lcms-gold/10 to-lcms-gold/20",
      borderColor: "border-lcms-gold/30",
      iconBg: "bg-lcms-gold",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-stone-50 to-gray-50 relative overflow-hidden px-6 lg:px-0">
      <div className="relative">
        <PageContainer>
          <SectionTitle
            title="Concordia Classical Academy"
            subtitle="A Christ-centered classical education for grades K-8, combining academic excellence with spiritual formation to prepare students for both earthly service and eternal life."
            tag="Christian Education"
            tagBgColor="bg-lcms-gold"
            tagTextColor="text-stone-800"
            tagIcon={<School className="w-4 h-4" />}
          />

          {/* Main CCA Information */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                &ldquo;Make a Joyful Noise to the Lord&rdquo;
              </h3>
              <p className="text-lg text-gray-700 italic mb-4">
                Psalm 98:1-4 - Our 2025-2026 School Theme
              </p>
              <p className="text-gray-600">
                Concordia Classical Academy uses God&apos;s Word in a Christ-centered education to assist families in training students for Christian lives on earth and for eternity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {ccaFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-lcms-navy to-lcms-navy/90 rounded-xl p-8 text-white max-w-2xl mx-auto">
                <h4 className="text-2xl font-bold mb-4">
                  Begin Your Classical Education Journey
                </h4>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                  Join our Christ-centered community of learners. Now accepting applications for the 2025-2026 school year.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-medium px-8 py-3"
                  >
                    <Link
                      href="https://www.ccamankato.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Visit CCA Website
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-lcms-navy hover:bg-white hover:text-lcms-navy font-medium px-8 py-3"
                  >
                    <Link
                      href="https://www.ccamankato.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Apply Today
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default CCA;
