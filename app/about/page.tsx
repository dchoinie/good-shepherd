import React from "react";
import PageContainer from "../custom_components/PageContainer";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">
              About Good Shepherd
            </h1>
            <p className="text-xl text-center">
              Grow in God&apos;s Truth. Show Jesus&apos; Love.
            </p>
          </div>
        </div>

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-12">
            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Good Shepherd, we are committed to growing in our
                understanding of God&apos;s truth through worship, study, and
                fellowship. We strive to demonstrate Jesus&apos; love in our
                community and beyond through service, compassion, and outreach.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Grow in God&apos;s Truth
                </h3>
                <p className="text-gray-700">
                  We believe in deepening our faith through:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Regular worship and prayer</li>
                  <li>Bible study and spiritual formation</li>
                  <li>Christian education for all ages</li>
                  <li>Fellowship and community building</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Show Jesus&apos; Love
                </h3>
                <p className="text-gray-700">
                  We demonstrate Christ&apos;s love through:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Community service and outreach</li>
                  <li>Welcoming all who seek God</li>
                  <li>Supporting those in need</li>
                  <li>Sharing the Gospel message</li>
                </ul>
              </div>
            </div>

            {/* History Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our History
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Good Shepherd has been serving our community for many years,
                providing a place of worship, fellowship, and spiritual growth.
                We continue to build on the foundation of faith established by
                those who came before us, while looking forward to how God will
                work through us in the future.
              </p>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
