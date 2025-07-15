"use client";

import PageTitle from "../../../components/custom/PageTitle";
import PageContainer from "../../../components/custom/PageContainer";
import SectionTitle from "../../../components/custom/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/custom/SEO";
import { Users, Heart, MessageCircle, Calendar, Car, Home } from "lucide-react";

export default function MenPage() {
  return (
    <div className="bg-gray-50 pb-24">
      <SEO
        title="Men's Ministries"
        keywords="Good Shepherd Lutheran Church, men's ministries, faith, fellowship, study, service, Mankato, MN, Minnesota, Church"
      />
      <PageTitle
        title="Men's Ministries"
        subtitle="Building strong men of faith through fellowship, study, and service"
      />

      <PageContainer>
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-br from-lcms-navy/5 to-lcms-gold/10 rounded-3xl mx-4 mb-20">
          <div className="px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle
                  title="Men's Bible Study"
                  subtitle="Join us for our monthly Men's Bible Study where we gather to study God's Word, share fellowship, and grow together in our faith journey."
                  tag="Monthly Gathering"
                  tagBgColor="bg-lcms-navy"
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Calendar className="text-lcms-navy text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Last Thursday of Each Month
                      </h3>
                      <p className="text-gray-600">
                        Monthly gathering schedule
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lcms-gold/10 rounded-xl flex items-center justify-center">
                      <Users className="text-lcms-gold text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        All Men 18+ Welcome
                      </h3>
                      <p className="text-gray-600">
                        Including college students
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Home className="text-lcms-navy text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Rotating Locations
                      </h3>
                      <p className="text-gray-600">
                        Typically at member&apos;s homes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-200 rounded-2xl p-8 text-center min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div>
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">
                      Men&apos;s Ministry Image
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Image will be added here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="py-20 bg-gradient-to-r from-lcms-navy/5 to-lcms-gold/10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative">
            <SectionTitle
              title="What to Expect"
              subtitle="Our Men's Bible Study is designed to build strong relationships and deepen faith through fellowship and study"
              tag="Program Overview"
              tagBgColor="bg-lcms-navy"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="bg-white shadow-xl border-l-4 border-lcms-navy transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Users className="text-lcms-navy text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Fellowship & Community
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Build meaningful relationships with other men of faith.
                    Share life experiences, challenges, and victories in a
                    supportive environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-lcms-gold transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-gold/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-lcms-gold text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Bible Study & Discussion
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Engage in thoughtful discussion of Scripture, exploring how
                    God&apos;s Word applies to our daily lives as men, husbands,
                    and fathers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-lcms-navy transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Heart className="text-lcms-navy text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Prayer & Support
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Lift up one another in prayer, share prayer requests, and
                    experience the power of men praying together for our
                    families and community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Meeting Details Section */}
        <div className="py-20">
          <SectionTitle
            title="Meeting Details"
            subtitle="Everything you need to know about joining our Men's Bible Study"
            tag="Join Us"
            tagBgColor="bg-lcms-navy"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-lcms-navy/5 to-lcms-gold/10 rounded-3xl p-12 border border-lcms-navy/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Meeting Locations
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our Bible study locations rotate to accommodate different
                schedules and provide variety:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Most commonly at member&apos;s homes for a comfortable,
                    intimate setting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Sometimes at public establishments for convenience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Location details shared in advance via church communications
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-lcms-gold/5 to-lcms-navy/10 rounded-3xl p-12 border border-lcms-gold/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Transportation
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We want everyone to be able to attend, regardless of
                transportation needs:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Need a ride? Let us know and we&apos;ll coordinate
                    transportation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Can offer a ride? We&apos;re always looking for drivers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Contact the church office or speak with any member
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20">
          <div className="bg-gradient-to-br from-lcms-navy/5 to-lcms-gold/10 rounded-3xl p-12 border border-lcms-navy/20">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Join Us This Month
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Whether you&apos;re a long-time member or new to our church, all
                men are welcome. Come as you are and experience the fellowship
                of brothers in Christ.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-md mx-auto">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Questions or Need a Ride?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-lcms-navy/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="text-lcms-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Contact</p>
                      <p className="text-gray-600">
                        Church office or any member
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-lcms-gold/10 rounded-lg flex items-center justify-center">
                      <Car className="text-lcms-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Transportation
                      </p>
                      <p className="text-gray-600">
                        Rides available upon request
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-center">
                      We&apos;re here to help you get connected!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
