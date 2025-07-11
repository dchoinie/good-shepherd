import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function SupportPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Support & Care"
          subtitle="We're here to support you in your faith journey and life's challenges"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            {/* Prayer Requests Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-sm border border-green-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-green-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Prayer Requests
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    We believe in the power of prayer and would be honored to
                    pray for you and your loved ones. Submit your prayer
                    requests and know that our congregation is lifting you up in
                    prayer.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact">Submit Prayer Request</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastoral Care */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Pastoral Care</CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      Available
                    </Badge>
                  </div>
                  <CardDescription className="text-lg">
                    One-on-one spiritual guidance and support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-lg">
                    Our pastor is available for confidential conversations,
                    spiritual guidance, and support during difficult times.
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                      Hospital visits
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                      Home visits
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                      Crisis counseling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                      Spiritual direction
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/contact">Request Pastoral Care</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Financial Support */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-lcms-navy/20 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-lcms-navy rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lcms-navy rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Support Our Ministry
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Your generous donations help us continue our mission of
                    growing in God&apos;s truth and showing Jesus&apos; love to
                    our community and beyond.
                  </p>

                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                      Make a Donation
                    </h3>
                    <p className="text-gray-700 mb-6 text-center text-lg">
                      Your generous donations help support our ministry
                      operations, community outreach programs, facility
                      maintenance, and staff support.
                    </p>
                    <div className="text-center">
                      <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                      >
                        <Link href="/donate">Donate Now</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Other Ways to Give
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold mb-2">
                          Recurring Donations
                        </p>
                        <p>Set up automatic monthly or weekly contributions</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Memorial Gifts</p>
                        <p>Honor loved ones with a special donation</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Planned Giving</p>
                        <p>Include the church in your estate planning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Help?
                </h2>
                <p className="text-gray-700 mb-6">
                  If you need assistance with any of our support services or
                  have questions about giving, please don&apos;t hesitate to
                  reach out.
                </p>
                <Button asChild className="bg-gray-800 hover:bg-gray-900">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
