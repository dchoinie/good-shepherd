import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { CheckCircle, Heart, ArrowLeft } from "lucide-react";
import SEO from "@/components/custom/SEO";

export default function DonationSuccessPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <SEO
          title="Donation Successful"
          keywords="Good Shepherd Lutheran Church, donation successful, thank you for your support, ministry, worship, study, fellowship, service, compassion, outreach, Mankato, MN, Minnesota, Church"
        />
        <PageTitle
          title="Thank You!"
          subtitle="Your donation has been received and will help us continue our ministry"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>

              {/* Success Message */}
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Donation Successful!
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Thank you for your generous donation. Your support helps us
                continue our mission of growing in God&apos;s truth and showing
                Jesus&apos; love to our community and beyond.
              </p>

              {/* What happens next */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What happens next?
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm font-semibold">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Email Receipt
                      </p>
                      <p className="text-gray-700">
                        You&apos;ll receive a confirmation email with your
                        donation receipt.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm font-semibold">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Prayer</p>
                      <p className="text-gray-700">
                        Our congregation will be praying for you and your
                        family.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm font-semibold">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Ministry Impact
                      </p>
                      <p className="text-gray-700">
                        Your donation will be used to support our worship
                        services, community outreach, and ministry programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bible Verse */}
              <div className="bg-gradient-to-br from-blue-50 to-lcms-navy/20 p-6 rounded-xl border border-blue-100 mb-8">
                <Heart className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <blockquote className="text-lg text-gray-800 italic">
                  &quot;Each of you must give as you have made up your mind, not
                  reluctantly or under compulsion, for God loves a cheerful
                  giver.&quot;
                </blockquote>
                <p className="text-gray-600 mt-2">— 2 Corinthians 9:7</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return to Home
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/support">Back to Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
