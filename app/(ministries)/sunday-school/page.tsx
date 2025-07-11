import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import { Badge } from "@/components/ui/badge";

export default function SundaySchoolPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Sunday School"
          subtitle="Nurturing young hearts and minds in God's Word through age-appropriate learning and fellowship"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            {/* Introduction */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Growing in Faith Together
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our Sunday School program provides children with a solid
                    foundation in biblical knowledge, Christian values, and
                    spiritual growth. Through engaging lessons, interactive
                    activities, and loving guidance, we help children develop a
                    lifelong relationship with Jesus Christ.
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule and Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Schedule
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      When We Meet
                    </h4>
                    <p className="text-gray-700">
                      Sundays during the school year (September - May)
                    </p>
                    <p className="text-gray-700 font-medium">
                      10:15 AM - 11:15 AM
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Location
                    </h4>
                    <p className="text-gray-700">
                      Sunday School classrooms in the church building
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Timing</h4>
                    <p className="text-gray-700">
                      Immediately following the Divine Service
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Age Groups
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Children are divided into age-appropriate groups to ensure the
                  best learning experience for each child.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">
                      Pre-K & Kindergarten
                    </span>
                    <Badge className="bg-blue-100 text-blue-800">
                      Younger Group
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">
                      1st Grade & Up
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      Older Group
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-sm border border-green-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-green-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    What We Learn
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Bible Stories & Lessons
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Age-appropriate Bible stories</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Interactive storytelling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Memory verses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Christian songs and hymns</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Activities & Crafts
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Creative crafts and projects</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Games and activities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Prayer time</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Fellowship and friendship building</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-sm border border-amber-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Join Our Teaching Team
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    We are always looking for dedicated volunteers to help teach
                    and guide our children in their faith journey. Whether you
                    have teaching experience or simply a heart for children,
                    your help is always appreciated.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        How You Can Help
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Lead or assist with lessons</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Help with crafts and activities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Provide classroom support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Share your faith and experiences</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        What We Provide
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Curriculum and lesson materials</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Training and support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Flexible scheduling options</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>A rewarding experience with children</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block">
                      <p className="text-lg font-semibold text-gray-900 mb-2">
                        Ready to Get Involved?
                      </p>
                      <p className="text-gray-700">
                        Contact our church office or speak with any of our
                        current Sunday School teachers to learn more about
                        volunteering opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Questions About Sunday School?
                </h3>
                <p className="text-gray-700 mb-6">
                  We&apos;d love to hear from you! Contact us for more
                  information about our Sunday School program, volunteer
                  opportunities, or to register your child.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Phone:</strong> (507) 387-4334
                  </p>
                  <p>
                    <strong>Email:</strong> office@goodshepherdmankato.org
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
