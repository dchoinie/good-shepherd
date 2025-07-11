import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";

export default function MenPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Men's Ministries"
          subtitle="Building strong men of faith through fellowship, study, and service"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Men&apos;s Bible Study
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Join us for our monthly Men&apos;s Bible Study where we
                    gather to study God&apos;s Word, share fellowship, and grow
                    together in our faith journey.
                  </p>
                  <div className="bg-white bg-opacity-70 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Meeting Details
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span className="font-medium">When:</span>
                        <span className="ml-2">
                          Last Thursday of each month
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span className="font-medium">Who:</span>
                        <span className="ml-2">
                          All men 18+ (including college students)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span className="font-medium">Where:</span>
                        <span className="ml-2">
                          Location varies - typically at a member&apos;s home
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Meeting Locations
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Bible study locations rotate to accommodate different
                  schedules and provide variety:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Most commonly at member&apos;s homes for a comfortable,
                      intimate setting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Sometimes at public establishments for convenience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Location details shared in advance via church
                      communications
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Transportation
                </h3>
                <p className="text-gray-700 mb-4">
                  We want everyone to be able to attend, regardless of
                  transportation needs:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Need a ride? Let us know and we&apos;ll coordinate
                      transportation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Can offer a ride? We&apos;re always looking for drivers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Contact the church office or speak with any member
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What to Expect */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Fellowship & Community
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Build meaningful relationships with other men of faith.
                      Share life experiences, challenges, and victories in a
                      supportive environment where we encourage one another in
                      our walk with Christ.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Bible Study & Discussion
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Engage in thoughtful discussion of Scripture, exploring
                      how God&apos;s Word applies to our daily lives as men,
                      husbands, fathers, and community members.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Prayer & Support
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Lift up one another in prayer, share prayer requests, and
                      experience the power of men praying together for our
                      families, church, and community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Us This Month
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you&apos;re a long-time member or new to our church,
                  all men are welcome. Come as you are and experience the
                  fellowship of brothers in Christ.
                </p>
                <div className="bg-white bg-opacity-70 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700">
                    <span className="font-medium">
                      Questions or need a ride?
                    </span>
                    <br />
                    Contact the church office or speak with any member.
                    We&apos;re here to help!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
