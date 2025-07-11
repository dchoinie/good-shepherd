"use client";

import PageTitle from "../../../components/custom/PageTitle";
import PageContainer from "../../../components/custom/PageContainer";
import SectionTitle from "../../../components/custom/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

import {
  BookOpen,
  Users,
  Clock,
  Heart,
  Lightbulb,
  MessageCircle,
  Calendar,
  MapPin,
} from "lucide-react";

export default function BibleStudy() {
  return (
    <div className="bg-gray-50 pb-24">
      <PageTitle
        title="Bible Study For Life"
        subtitle="Join us for an all-ages approach to Bible study that includes in-depth looks into scripture, meaningful discussion, and spiritual growth."
      />

      <PageContainer>
        {/* Hero Section with Image Placeholder */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl mx-4 mb-20">
          <div className="px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle
                  title="Deepen Your Faith Through Scripture"
                  subtitle="Our Bible Study For Life program offers a comprehensive approach to understanding God's Word in a welcoming, discussion-based environment."
                  tag="All Ages Welcome"
                  tagColor="bg-blue-700"
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Clock className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Sundays at 10:15 AM
                      </h3>
                      <p className="text-gray-600">Following Divine Service</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Users className="text-yellow-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        All Ages Welcome
                      </h3>
                      <p className="text-gray-600">From children to seniors</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-brown-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Interactive Discussion
                      </h3>
                      <p className="text-gray-600">
                        Questions and insights encouraged
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-200 rounded-2xl p-8 text-center min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div>
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">
                      Bible Study Image
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
        <div className="py-20 bg-gradient-to-r from-gray-100 to-blue-50 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative">
            <SectionTitle
              title="What to Expect"
              subtitle="Our Bible Study For Life program is designed to be engaging, educational, and spiritually enriching for everyone"
              tag="Program Overview"
              tagColor="bg-blue-700"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="bg-white shadow-xl border-l-4 border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="text-blue-700 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      In-Depth Scripture Study
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We dive deep into God&apos;s Word, exploring historical
                    context, theological meaning, and practical application for
                    our daily lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-yellow-600 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-yellow-700 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Meaningful Discussion
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Open dialogue where questions are encouraged and different
                    perspectives are valued. Everyone&apos;s voice matters in
                    our learning community.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-brown-600 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center">
                      <Heart className="text-brown-700 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Spiritual Growth
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Grow in your faith through prayer, fellowship, and the study
                    of Scripture. Build deeper relationships with God and fellow
                    believers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-gray-600 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Users className="text-gray-700 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      All Ages Together
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    From children to seniors, everyone participates in
                    age-appropriate ways. We learn from each other&apos;s
                    experiences and perspectives.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Lightbulb className="text-blue-700 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Practical Application
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Connect biblical teachings to real-life situations. Learn
                    how to apply God&apos;s Word in your daily walk with Christ.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-yellow-600 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Calendar className="text-yellow-700 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Consistent Schedule
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Join us every Sunday at 10:15 AM for a consistent time of
                    study and fellowship. No registration required - just come
                    as you are.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Current Study Section */}
        <div className="py-20">
          <SectionTitle
            title="Current Study Focus"
            subtitle="We explore various books of the Bible and theological topics throughout the year"
            tag="Current Topic"
            tagColor="bg-blue-700"
          />

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-12 border border-blue-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Exploring God&apos;s Word Together
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Our Bible Study For Life program covers a wide range of topics
                  including:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Complete books of the Bible with verse-by-verse study
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Theological themes and Christian doctrine
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brown-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Life application and practical Christian living
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Historical context and cultural background
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Contemporary issues from a biblical perspective
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Join Us This Sunday
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="text-blue-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Time</p>
                      <p className="text-gray-600">10:15 AM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Calendar className="text-yellow-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Day</p>
                      <p className="text-gray-600">Every Sunday</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-brown-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">Fellowship Hall</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-center">
                      No preparation required - just bring your Bible and an
                      open heart!
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
