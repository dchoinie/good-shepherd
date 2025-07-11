"use client";

import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  MessageCircle,
  Users,
  Heart,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "2101 Lor Ray Drive, North Mankato, MN 56003",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(507) 388-4336",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      iconBg: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "goodshepmankato@gmail.com",
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-500",
    },
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Send a Message",
      description:
        "Have a question or prayer request? We'd love to hear from you.",
      href: "/contact",
    },
    {
      icon: Users,
      title: "Plan Your Visit",
      description:
        "New to Good Shepherd? Let us know you're coming and we'll welcome you.",
      href: "/new",
    },
    {
      icon: Heart,
      title: "Prayer Requests",
      description:
        "Share your prayer requests with our congregation and pastoral staff.",
      href: "/contact",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-stone-50 relative overflow-hidden">
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
            title="Get in Touch"
            subtitle="We'd love to hear from you and welcome you to our Good Shepherd family. Whether you have questions, need prayer, or want to learn more about our church, we're here for you."
            tag="Contact Us"
            tagColor="bg-stone-700"
          />

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group relative bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg border ${item.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {/* Decorative background elements */}
                  <div
                    className={`absolute top-0 left-0 w-12 h-12 ${item.iconBg} rounded-full opacity-10 -translate-x-6 -translate-y-6`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 ${item.iconBg} rounded-full opacity-10 translate-x-8 translate-y-8`}
                  ></div>

                  <div className="relative text-center">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}
                    >
                      <IconComponent className="text-white text-lg" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <div key={action.title} className="group relative">
                  {/* Decorative background card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300 opacity-20"></div>

                  {/* Main card */}
                  <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 hover:shadow-2xl p-8 text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <IconComponent className="text-white text-2xl" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {action.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {action.description}
                    </p>

                    {/* Button */}
                    <Button
                      asChild
                      className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Link
                        href={action.href}
                        className="inline-flex items-center gap-2"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Connect?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you&apos;re looking for a church home, have questions
                about our faith, or need prayer and support, we&apos;re here to
                help. Reach out to us today and let&apos;s start this journey
                together.
              </p>
              <Button
                asChild
                className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 text-xl font-semibold px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Contact;
