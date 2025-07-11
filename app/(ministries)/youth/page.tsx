import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import { ExternalLink } from "lucide-react";

export default function YouthPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Youth Ministries"
          subtitle="Nurturing faith and building character in the next generation"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Bible Study for Life */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-lcms-navy/20 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-lcms-navy rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lcms-navy rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Bible Study for Life
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Join us for an all-ages Bible study that meets after Sunday
                    service. This is a wonderful opportunity for families to
                    grow together in faith and understanding of God&apos;s Word.
                  </p>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Engaging discussions suitable for all ages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Practical applications for daily life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Fellowship and community building</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Questions and answers welcome</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday School */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sunday School
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Sunday School program runs during the school year and is
                  designed for children. We provide age-appropriate biblical
                  education that helps children grow in their faith through
                  stories, activities, and lessons.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    <span>Pre-school & Kindergarten group</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    <span>Older grades group</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Schedule:</strong> Sundays during the school year,
                    following Divine Service from 10:15 AM - 11:15 AM
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Youth Activities
                </h3>
                <p className="text-gray-700 mb-4">
                  Beyond Sunday School, we offer various activities and events
                  designed to help young people connect with their faith and
                  each other.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Seasonal events and celebrations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Service projects and outreach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Fellowship and social activities
                  </li>
                </ul>
              </div>
            </div>

            {/* Concordia Classical Academy */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-sm border border-yellow-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Concordia Classical Academy
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Concordia Classical Academy is our church&apos;s affiliated
                    school, providing excellent classical Christian education
                    from preschool through high school. We are proud to partner
                    with CCA in nurturing both academic excellence and spiritual
                    growth.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Classical Education
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Traditional liberal arts curriculum</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Latin and classical languages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Great books and classical literature</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Logic and rhetoric development</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Christian Formation
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Daily chapel and prayer</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Biblical worldview integration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Character development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Service and leadership opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://www.ccamankato.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-sm"
                    >
                      Visit CCA Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <p className="text-sm text-gray-600 mt-3">
                      Learn more about enrollment, curriculum, and school life
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Involved
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We welcome all families to participate in our youth ministries.
                Whether you&apos;re interested in Bible study, Sunday School, or
                learning more about Concordia Classical Academy, we&apos;d love
                to connect with you.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700">
                  <strong>Questions about our youth programs?</strong>
                  <br />
                  Contact our church office or speak with any of our ministry
                  leaders after Sunday service.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
