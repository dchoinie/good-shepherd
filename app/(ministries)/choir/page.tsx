import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import { Music, Users, Calendar, Heart } from "lucide-react";

export default function ChoirPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Adult Choir"
          subtitle="Lifting our voices in praise and worship together"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Welcome Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-lcms-navy/20 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-lcms-navy rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lcms-navy rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <Music className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      Everyone is Welcome!
                    </h2>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Our adult choir is open to anyone who loves to sing and
                    wants to serve the Lord through music. No auditions required
                    - we believe that everyone has a voice to offer in praise
                    and worship.
                  </p>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What We Offer
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Traditional hymns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>
                          Special music for holidays and special services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Fellowship and community building</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Opportunities to develop musical skills</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule and Details */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Practice Schedule
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We practice weekly during the school year to prepare for
                  Sunday services and special events. Our rehearsals are a time
                  of learning, fellowship, and spiritual growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    <span>Weekly practices during school year</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    <span>Time to be determined</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    <span>Sunday morning participation</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Practice time will be announced once
                    the school year schedule is finalized. Please check with our
                    choir director for current information.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Who Can Join
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our choir is open to adults of all ages and experience levels.
                  Whether you&apos;re a seasoned singer or just beginning your
                  musical journey, we welcome you with open arms.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Adults of all ages welcome
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    No auditions required
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    All experience levels accepted
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                    Commitment to regular attendance
                  </li>
                </ul>
              </div>
            </div>

            {/* Ministry Impact */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-sm border border-yellow-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <Heart className="h-8 w-8 text-yellow-600 mr-3" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      Serving Through Music
                    </h2>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Being part of our choir is more than just singing -
                    it&apos;s about serving the congregation and glorifying God
                    through music. Our choir members help lead worship and
                    create a beautiful atmosphere for prayer and praise.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Worship Leadership
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Leading congregational singing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Special music for services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Holiday and seasonal celebrations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Creating a worshipful atmosphere</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Community & Fellowship
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Building lasting friendships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Spiritual growth through music</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Supporting each other in faith</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>Joyful service to the Lord</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to Join?
                </h3>
                <p className="text-gray-700 mb-6">
                  If you&apos;re interested in joining our adult choir,
                  we&apos;d love to hear from you! Contact us to learn more
                  about practice times and how to get involved.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Contact:</strong> Speak with our choir director
                    after Sunday service or contact the church office
                  </p>
                  <p>
                    <strong>Location:</strong> Church sanctuary and choir room
                  </p>
                  <p>
                    <strong>Commitment:</strong> Weekly practices during school
                    year, Sunday morning participation
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
