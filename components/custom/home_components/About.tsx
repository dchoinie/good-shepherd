"use client";

import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { Cross, BookOpen, Clock, ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const About = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      description:
        "We are committed to growing in God's truth through worship, study, and fellowship, while demonstrating Jesus' love in our community through service, compassion, and outreach.",
      icon: Cross,
      href: "/mission",
      color: "from-lcms-navy/5 to-lcms-navy/10",
      borderColor: "border-lcms-navy/20",
      iconBg: "bg-lcms-navy",
      buttonColor: "bg-lcms-navy hover:bg-lcms-navy/80",
    },
    {
      title: "Our History",
      description:
        "Founded in 1957, Good Shepherd has been serving our community for over 65 years, providing a place of worship, fellowship, and spiritual growth while building on a foundation of faith.",
      icon: Clock,
      href: "/history",
      color: "from-lcms-gold/10 to-lcms-gold/20",
      borderColor: "border-lcms-gold/30",
      iconBg: "bg-lcms-gold",
      buttonColor: "bg-lcms-gold hover:bg-lcms-gold/80",
    },
    {
      title: "Our Beliefs",
      description:
        "As members of The Lutheran Church—Missouri Synod, we hold to the teachings of the Bible and confess the faith as handed down in the Lutheran Confessions, centered on Christ crucified and risen.",
      icon: BookOpen,
      href: "/our-faith",
      color: "from-lcms-navy/5 to-lcms-gold/10",
      borderColor: "border-lcms-navy/20",
      iconBg: "bg-lcms-navy",
      buttonColor: "bg-lcms-navy hover:bg-lcms-navy/80",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-stone-50">
      <PageContainer>
        <SectionTitle
          title="About Good Shepherd"
          subtitle="Discover our mission, explore our rich history, and learn about the beliefs that guide our congregation as we serve God and our community."
          tag="About Us"
          tagBgColor="bg-lcms-navy"
          tagIcon={<Info className="w-4 h-4" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {aboutSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.title}
                className={`relative bg-gradient-to-br ${section.color} rounded-2xl p-8 shadow-lg border ${section.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Decorative background elements */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 ${section.iconBg} rounded-full opacity-10 -translate-x-8 -translate-y-8`}
                ></div>
                <div
                  className={`absolute bottom-0 right-0 w-20 h-20 ${section.iconBg} rounded-full opacity-10 translate-x-10 translate-y-10`}
                ></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${section.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {section.description}
                  </p>

                  {/* Learn More Button */}
                  <Button
                    asChild
                    className={`${section.buttonColor} text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-700 mb-6">
              We invite you to learn more about Good Shepherd and discover how
              you can be part of our mission to grow in God&apos;s truth and
              show Jesus&apos; love.
            </p>
            <Button
              asChild
              className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-medium px-8 py-3 text-lg"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default About;
