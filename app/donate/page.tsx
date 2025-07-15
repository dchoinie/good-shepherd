import React from "react";
import PageContainer from "../../components/custom/PageContainer";
import PageTitle from "../../components/custom/PageTitle";
import DonationForm from "../../components/custom/DonationForm";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import SEO from "@/components/custom/SEO";

export default function DonatePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <SEO
          title="Support Our Ministry"
          keywords="Good Shepherd Lutheran Church, donate, support, ministry, worship, study, fellowship, service, compassion, outreach, Mankato, MN, Minnesota, Church"
          canonical="https://goodshepherdmankato.org/donate"
        />
        <PageTitle
          title="Support Our Ministry"
          subtitle="Your generous donations help us continue our mission of growing in God's truth and showing Jesus' love"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Button
                  asChild
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Link href="/support">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Support
                  </Link>
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Donation Form */}
                <div className="lg:order-2">
                  <DonationForm />
                </div>

                {/* Information Section */}
                <div className="lg:order-1 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Why Give?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Your donations directly support our ministry and help us
                      serve our community through worship, education, outreach,
                      and pastoral care.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Worship Services
                        </h3>
                        <p className="text-gray-700">
                          Supporting our weekly worship services, music
                          ministry, and spiritual programs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Community Outreach
                        </h3>
                        <p className="text-gray-700">
                          Funding programs that serve those in need in our local
                          community and beyond.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Facility & Operations
                        </h3>
                        <p className="text-gray-700">
                          Maintaining our church facilities and supporting our
                          staff and volunteers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Secure & Private
                    </h3>
                    <p className="text-blue-800 text-sm">
                      All donations are processed securely through Stripe. Your
                      financial information is protected and your donation
                      history is kept private.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
