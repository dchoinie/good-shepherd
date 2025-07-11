import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="About Good Shepherd"
          subtitle="Grow in God's Truth. Show Jesus' Love."
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-lcms-navy/20 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-lcms-navy rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lcms-navy rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At Good Shepherd, we are committed to growing in our
                    understanding of God&apos;s truth through worship, study,
                    and fellowship. We strive to demonstrate Jesus&apos; love in
                    our community and beyond through service, compassion, and
                    outreach.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Grow in God&apos;s Truth
                </h3>
                <p className="text-gray-700 mb-4">
                  We believe in deepening our faith through:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Regular worship and prayer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Bible study and spiritual formation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Christian education for all ages
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Fellowship and community building
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Show Jesus&apos; Love
                </h3>
                <p className="text-gray-700 mb-4">
                  We demonstrate Christ&apos;s love through:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Community service and outreach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Welcoming all who seek God
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Supporting those in need
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Sharing the Gospel message
                  </li>
                </ul>
              </div>
            </div>

            {/* History Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Good Shepherd has been serving our community for many years,
                providing a place of worship, fellowship, and spiritual growth.
                We continue to build on the foundation of faith established by
                those who came before us, while looking forward to how God will
                work through us in the future.
              </p>
              <div className="text-center">
                <Button asChild>
                  <Link href="/history">Learn More About Our History</Link>
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
