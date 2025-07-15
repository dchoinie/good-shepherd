import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import SEO from "@/components/custom/SEO";

export default function StudentsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <SEO
          title="Students Ministry"
          keywords="Good Shepherd Lutheran Church, students ministry, college students, Mankato, MN, Minnesota, Church"
        />
        <PageTitle
          title="Students Ministry"
          subtitle="A warm welcome to college students in the Mankato area"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-lcms-navy/20 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-lcms-navy rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lcms-navy rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Welcome, College Students!
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Whether you&apos;re attending Bethany Lutheran College or
                    Mankato State University, we invite you to join us for
                    Sunday services and become part of our church family during
                    your time in Mankato.
                  </p>
                  <div className="bg-white bg-opacity-70 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Sunday Services
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">When:</span>
                        <span className="ml-2">Sundays at 9:00 AM</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">Bible Study:</span>
                        <span className="ml-2">Sundays at 10:15 AM</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">Where:</span>
                        <span className="ml-2">
                          Good Shepherd Lutheran Church
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">Transportation:</span>
                        <span className="ml-2">Available upon request</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* College Welcome Section */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Bethany Lutheran College Students
                </h3>
                <p className="text-gray-700 mb-4">
                  We&apos;re excited to have you in our community! Our church is
                  just a short distance from campus and we welcome you to join
                  us for worship and fellowship.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Connect with local families and church members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Find a home away from home during your college years
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Build lasting relationships with the Mankato community
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Mankato State University Students
                </h3>
                <p className="text-gray-700 mb-4">
                  Welcome to Mankato! We&apos;re here to support you during your
                  academic journey and provide a welcoming church community for
                  worship and spiritual growth.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Join our diverse congregation of students and families
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Experience traditional Lutheran worship and fellowship
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      Get involved in our church community and activities
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Annual Back to School Gathering */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Annual Back to School Gathering
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Fall Welcome Event
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Every fall, we host a special back-to-school gathering
                      that brings together college students and church members
                      for an evening of fellowship, food, and fun. This is the
                      perfect opportunity to meet new people and get connected
                      with our church family.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      What to Expect
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Enjoy a casual dinner, games, and conversation with church
                      members who are excited to welcome you to our community.
                      Learn about our church, ask questions, and discover ways
                      to get involved during your time in Mankato.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Building Connections
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      This annual event helps students and church members get to
                      know each other, fostering relationships that often last
                      throughout your college years and beyond. Many students
                      find mentors, friends, and a supportive community through
                      this gathering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Offer Students */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What We Offer Students
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Community & Fellowship
                  </h3>
                  <p className="text-gray-700">
                    Connect with families and individuals who are excited to
                    welcome you into our church family.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Spiritual Growth
                  </h3>
                  <p className="text-gray-700">
                    Experience traditional Lutheran worship and grow in your
                    faith through God&apos;s Word and Sacraments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Home Away from Home
                  </h3>
                  <p className="text-gray-700">
                    Find a welcoming place where you can feel at home during
                    your college years in Mankato.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-50 to-lcms-navy/20 rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Us This Sunday
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you&apos;re new to Mankato or have been here for a
                  while, we&apos;d love to welcome you to our church family.
                  Come as you are and experience the warmth of our congregation.
                </p>
                <div className="bg-white bg-opacity-70 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700">
                    <span className="font-medium">
                      Need transportation or have questions?
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
