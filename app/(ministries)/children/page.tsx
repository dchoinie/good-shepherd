import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import SectionTitle from "../../../components/custom/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ChildrenPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Children's Ministries"
          subtitle="Nurturing young hearts and minds in faith, learning, and community"
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
                    Growing Together in Faith
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At Good Shepherd, we believe that children are a precious
                    gift from God. Our children&apos;s ministries provide a
                    nurturing environment where young hearts can grow in faith,
                    develop lasting friendships, and discover God&apos;s love
                    through age-appropriate learning and activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Sunday School Section */}
            <SectionTitle
              title="Sunday School"
              subtitle="Learning God's Word Together"
              tag="During School Year"
              tagColor="bg-blue-600"
            />

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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Bible Study
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our Sunday School program follows the divine service,
                  providing children with engaging Bible lessons that are
                  age-appropriate and interactive.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Interactive Bible stories and lessons
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Age-appropriate activities and crafts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Memory verses and songs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Prayer and fellowship time
                  </li>
                </ul>
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
                  Sunday School meets every Sunday during the school year,
                  immediately following our divine service.
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

            {/* VBS Section */}
            <SectionTitle
              title="Vacation Bible School"
              subtitle="Summer Adventure in Faith"
              tag="Summer Program"
              tagColor="bg-yellow-600"
            />

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    A Day of Fun, Faith & Friends
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our annual Vacation Bible School is a highlight of the
                    summer, offering children an exciting day filled with Bible
                    stories, music, crafts, games, and unforgettable memories.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Bible Theme
                        </h4>
                        <p className="text-gray-600">
                          Focus on a special Bible story or character
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Interactive Activities
                        </h4>
                        <p className="text-gray-600">
                          Crafts, games, music, and hands-on learning
                          experiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Snacks & Fellowship
                        </h4>
                        <p className="text-gray-600">
                          Refreshments and time to build friendships
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-yellow-600"
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
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Event Schedule
                    </h4>
                    <p className="text-gray-600">One Day Event</p>
                    <p className="text-gray-600">9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Concordia Classical Academy Section */}
            <SectionTitle
              title="Concordia Classical Academy"
              subtitle="Classical Christian Education"
              tag="K-8 Partnership"
              tagColor="bg-red-800"
            />

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 md:p-12 shadow-sm border border-red-200 mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Educational Partnership
                  </h3>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Good Shepherd is proud to partner with Concordia Classical
                    Academy, a classical Christian school serving grades K-8
                    that provides exceptional education grounded in Lutheran
                    values and classical learning methods. Our church and school
                    work hand in hand to provide a strong foundation of faith
                    for our students.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-red-800 text-white rounded-t-lg">
                      <CardTitle className="text-xl">
                        Classical Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-700 rounded-full mr-2 mt-2"></span>
                          Trivium-based curriculum (Grammar, Logic, Rhetoric)
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-700 rounded-full mr-2 mt-2"></span>
                          Focus on great books and classical literature
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-700 rounded-full mr-2 mt-2"></span>
                          Latin instruction beginning in 3rd grade
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-700 rounded-full mr-2 mt-2"></span>
                          Small class sizes with personalized attention
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-red-700 text-white rounded-t-lg">
                      <CardTitle className="text-xl">
                        Christian Formation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                          Daily chapel services and prayer time
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                          Lutheran theology integrated throughout curriculum
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                          Stronger belief in Jesus&apos; divinity and grace
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                          Character development and moral formation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-red-900 text-white rounded-t-lg">
                      <CardTitle className="text-xl">
                        Academic Excellence
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-800 rounded-full mr-2 mt-2"></span>
                          Strong foundation in reading, writing, and math
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-800 rounded-full mr-2 mt-2"></span>
                          History and science through classical approach
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-800 rounded-full mr-2 mt-2"></span>
                          Preparation for high school and beyond
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-800 rounded-full mr-2 mt-2"></span>
                          Partnership with Good Shepherd Lutheran Church
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-800 rounded-full mr-2 mt-2"></span>
                          Church and school work together for faith formation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Learn More About Concordia Classical Academy
                    </h4>
                    <p className="text-gray-700 mb-6">
                      Discover how our partnership provides children with an
                      exceptional educational experience that nurtures both mind
                      and spirit. Visit their website to learn more about
                      enrollment, curriculum, and the strong partnership between
                      our church and school.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Badge className="bg-red-100 text-red-800 text-sm px-4 py-2">
                        K-8 Elementary Education
                      </Badge>
                      <Badge className="bg-red-100 text-red-800 text-sm px-4 py-2">
                        Classical Curriculum
                      </Badge>
                      <Badge className="bg-red-100 text-red-800 text-sm px-4 py-2">
                        Lutheran Values
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Involved Section */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Involved in Children&apos;s Ministries
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you&apos;re a parent, grandparent, or community member,
                there are many ways to support and participate in our
                children&apos;s ministries.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Volunteer Opportunities
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Help teach Sunday School, assist with VBS, or support
                    special events.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">
                    Contact our office
                  </Badge>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Prayer Support
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pray for our children, teachers, and families as we grow
                    together in faith.
                  </p>
                  <Badge className="bg-green-100 text-green-800">
                    Join our prayer team
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
