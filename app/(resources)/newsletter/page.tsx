"use client";

import PageTitle from "@/components/custom/PageTitle";
import NewsletterSignupForm from "@/components/custom/NewsletterSignupForm";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Newsletter"
        subtitle="Stay connected with our church community through our newsletter."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the latest updates about church events, community news, and
            spiritual insights delivered directly to your inbox.
          </p>
        </div>

        <div className="flex justify-center">
          <NewsletterSignupForm />
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What You'll Receive
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Weekly Events
                </h4>
                <p className="text-sm text-gray-600">
                  Stay updated with our worship schedule, Bible studies, and
                  special events.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                <h4 className="font-medium text-gray-900 mb-2">
                  Spiritual Insights
                </h4>
                <p className="text-sm text-gray-600">
                  Receive devotional thoughts, sermon summaries, and biblical
                  teachings.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
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
                <h4 className="font-medium text-gray-900 mb-2">
                  Community News
                </h4>
                <p className="text-sm text-gray-600">
                  Learn about ministry opportunities, prayer requests, and
                  community updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
