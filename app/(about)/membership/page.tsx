import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MembershipPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Membership"
          subtitle="Join our church family and grow in faith together"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            {/* Welcome Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-lcms-navy rounded-full opacity-10 -translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-lcms-gold rounded-full opacity-10 translate-x-10 translate-y-10"></div>

                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Welcome to Good Shepherd
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We are delighted that you are considering joining our church
                    family. Whether you are a current LCMS member looking to
                    transfer, someone new to the Lutheran faith, or a student
                    seeking a spiritual home, we have a place for you here.
                  </p>
                </div>
              </div>
            </div>

            {/* Membership Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* LCMS Members */}
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="bg-lcms-navy border-b border-lcms-navy rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white">
                      LCMS Members
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-lcms-gold text-stone-800"
                    >
                      Transfer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    If you are currently a member of an LCMS church and wish to
                    visit or transfer to Good Shepherd, we would love to have
                    you join our congregation!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Contact our church office to begin the transfer process
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        We&apos;ll coordinate with your current congregation
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Welcome you into our church family
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-lcms-gold rounded-lg">
                    <p className="text-sm text-stone-800 font-medium">
                      💡 Tip: Feel free to visit us for worship first to get to
                      know our congregation!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* New Member Class */}
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="bg-lcms-gold border-b border-lcms-gold rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-stone-800">
                      New Member Class
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-lcms-navy text-white"
                    >
                      Learn
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Individual or families who are not currently LCMS are
                    encouraged to take our &quot;New Member Class&quot; - an
                    instructional class with Pastor LaPlant set up at your
                    convenience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-lcms-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Learn about Lutheran doctrine and beliefs
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-lcms-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Understand our church&apos;s mission and values
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-lcms-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Get to know our congregation and ministries
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-lcms-navy rounded-lg">
                    <p className="text-sm text-white font-medium">
                      📅 Schedule: Classes are arranged at times convenient for
                      you and Pastor LaPlant
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Student Outreach */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="bg-lcms-navy border-b border-lcms-navy rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white">
                      Students Welcome!
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-lcms-gold text-stone-800"
                    >
                      Campus
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Bethany College Students
                      </h3>
                      <p className="text-gray-700 mb-4">
                        We warmly welcome Bethany College students to worship
                        with us on Sundays. Our congregation provides a
                        supportive spiritual community for your college journey.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-lcms-gold rounded-full mr-2"></span>
                          <span className="text-gray-700">
                            Convenient Sunday worship times
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-lcms-gold rounded-full mr-2"></span>
                          <span className="text-gray-700">
                            Fellowship opportunities
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-lcms-gold rounded-full mr-2"></span>
                          <span className="text-gray-700">
                            Spiritual guidance and support
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Mankato State University Students
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Mankato State University students are also encouraged to
                        join us for worship and fellowship. Find a spiritual
                        home away from home in our welcoming congregation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-lcms-gold rounded-full mr-2"></span>
                          <span className="text-gray-700">
                            Welcoming student community
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-lcms-gold rounded-full mr-2"></span>
                          <span className="text-gray-700">
                            Mentorship opportunities
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-lcms-gold rounded-full mr-2"></span>
                          <span className="text-gray-700">
                            Faith-based activities and events
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-lcms-gold rounded-lg">
                    <p className="text-sm text-stone-800 font-medium">
                      🎓 Special Note: We understand the unique needs of college
                      students and are here to support your spiritual growth
                      during this important time in your life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact us to learn more about membership, schedule a new member
                class, or simply visit us for worship. We look forward to
                meeting you!
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>📞 Call our church office</p>
                  <p>📧 Email Pastor LaPlant</p>
                  <p>📍 Visit us during worship hours</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
