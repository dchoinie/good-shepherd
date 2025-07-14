"use client";

import PageTitle from "../../../components/custom/PageTitle";
import PageContainer from "../../../components/custom/PageContainer";
import SectionTitle from "../../../components/custom/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  BookOpen,
  Users,
  Clock,
  Heart,
  Lightbulb,
  MessageCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Palette,
  Music,
  Handshake,
} from "lucide-react";

export default function SundaySchoolPage() {
  return (
    <div className="bg-gray-50 pb-24">
      <PageTitle
        title="Sunday School"
        subtitle="Nurturing young hearts and minds in God's Word through age-appropriate learning and fellowship"
      />

      <PageContainer>
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-br from-lcms-navy/5 to-lcms-gold/10 rounded-3xl mx-4 mb-20">
          <div className="px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle
                  title="Growing in Faith Together"
                  subtitle="Our Sunday School program provides children with a solid foundation in biblical knowledge, Christian values, and spiritual growth. Through engaging lessons, interactive activities, and loving guidance, we help children develop a lifelong relationship with Jesus Christ."
                  tag="Children's Ministry"
                  tagBgColor="bg-lcms-navy"
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Clock className="text-lcms-navy text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Sundays 10:15 AM - 11:15 AM
                      </h3>
                      <p className="text-gray-600">
                        During school year (September - May)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lcms-gold/10 rounded-xl flex items-center justify-center">
                      <Users className="text-lcms-gold text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Age-Appropriate Groups
                      </h3>
                      <p className="text-gray-600">Pre-K through elementary</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <MapPin className="text-lcms-navy text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Sunday School Classrooms
                      </h3>
                      <p className="text-gray-600">In the church building</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-200 rounded-2xl p-8 text-center min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div>
                    <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">
                      Sunday School Image
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

        {/* What We Learn Section */}
        <div className="py-20 bg-gradient-to-r from-lcms-navy/5 to-lcms-gold/10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative">
            <SectionTitle
              title="What We Learn"
              subtitle="Our Sunday School program combines biblical education with fun, interactive activities to engage children of all ages"
              tag="Curriculum"
              tagBgColor="bg-lcms-navy"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <Card className="bg-white shadow-xl border-l-4 border-lcms-navy transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="text-lcms-navy text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Bible Stories
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Age-appropriate Bible stories with interactive storytelling
                    and memory verses to help children understand God's Word.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-lcms-gold transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-gold/10 rounded-xl flex items-center justify-center">
                      <Palette className="text-lcms-gold text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Crafts & Activities
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Creative crafts and fun activities that reinforce biblical
                    lessons and help children express their faith through art.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-lcms-navy transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Music className="text-lcms-navy text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Songs & Hymns
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Christian songs and hymns that teach biblical truths and
                    help children develop a love for worship and praise.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-lcms-gold transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-gold/10 rounded-xl flex items-center justify-center">
                      <Handshake className="text-lcms-gold text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Prayer & Fellowship
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Prayer time and fellowship activities that build friendships
                    and teach children the importance of community in faith.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Age Groups Section */}
        <div className="py-20">
          <SectionTitle
            title="Age Groups"
            subtitle="Children are divided into age-appropriate groups to ensure the best learning experience for each child"
            tag="Groups"
            tagBgColor="bg-lcms-navy"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-lcms-navy/5 to-lcms-gold/10 rounded-3xl p-12 border border-lcms-navy/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Younger Group
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-lcms-navy text-white text-lg px-4 py-2">
                  Pre-K & Kindergarten
                </Badge>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our youngest learners focus on foundational biblical concepts
                through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Simple Bible stories with colorful illustrations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Hands-on crafts and activities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Short memory verses and songs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Play-based learning activities
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-lcms-gold/5 to-lcms-navy/10 rounded-3xl p-12 border border-lcms-gold/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Older Group
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-lcms-gold text-white text-lg px-4 py-2">
                  1st Grade & Up
                </Badge>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our older students engage in more in-depth learning through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Deeper Bible study and discussion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    More complex crafts and projects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Scripture memorization and application
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Interactive games and activities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities Section */}
        <div className="py-20 bg-gradient-to-r from-lcms-navy/5 to-lcms-gold/10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative">
            <SectionTitle
              title="Join Our Teaching Team"
              subtitle="We are always looking for dedicated volunteers to help teach and guide our children in their faith journey"
              tag="Volunteer"
              tagBgColor="bg-lcms-navy"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="bg-white shadow-xl border-l-4 border-lcms-navy transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-navy/10 rounded-xl flex items-center justify-center">
                      <Heart className="text-lcms-navy text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      How You Can Help
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Lead or assist with lessons
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Help with crafts and activities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Provide classroom support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Share your faith and experiences
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-l-4 border-lcms-gold transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-lcms-gold/10 rounded-xl flex items-center justify-center">
                      <Lightbulb className="text-lcms-gold text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      What We Provide
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Curriculum and lesson materials
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Training and support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-gold rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Flexible scheduling options
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lcms-navy rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        A rewarding experience with children
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-md mx-auto">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Get Involved?
                </h4>
                <p className="text-gray-700 mb-6">
                  Contact our church office or speak with any of our current
                  Sunday School teachers to learn more about volunteering
                  opportunities.
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
        </div>
      </PageContainer>
    </div>
  );
}
