import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";

export default function WomenPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Women's Ministries"
          subtitle="Serving Christ through the Lutheran Women's Missionary League (LWML)"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-lcms-navy/20 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-lcms-navy rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lcms-navy rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Lutheran Women&apos;s Missionary League
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    The LWML is the official women&apos;s auxiliary of The
                    Lutheran Church—Missouri Synod. We are dedicated to serving
                    Christ by serving others through mission projects, Bible
                    study, fellowship, and prayer.
                  </p>
                  <div className="bg-white bg-opacity-70 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Our Mission
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">Purpose:</span>
                        <span className="ml-2">
                          To assist each woman of The Lutheran Church—Missouri
                          Synod in affirming her relationship with the Triune
                          God
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">Focus:</span>
                        <span className="ml-2">
                          Mission projects, Bible study, and Christian
                          fellowship
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3"></span>
                        <span className="font-medium">Motto:</span>
                        <span className="ml-2">
                          &quot;Serve the Lord with gladness&quot; (Psalm 100:2)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LWML Activities */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Mission Projects
                </h3>
                <p className="text-gray-700 mb-4">
                  Our LWML chapter actively supports various mission projects:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Mite Box Collections:</strong> Supporting national
                      and district mission grants
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Local Outreach:</strong> Serving our community
                      through various ministries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>International Missions:</strong> Supporting global
                      mission efforts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Care Ministries:</strong> Providing comfort and
                      support to those in need
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Bible Study & Fellowship
                </h3>
                <p className="text-gray-700 mb-4">
                  We gather regularly for spiritual growth and Christian
                  fellowship:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Monthly Meetings:</strong> Bible study, prayer,
                      and mission updates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Quarterly Programs:</strong> Special events and
                      guest speakers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>District Conventions:</strong> Connecting with
                      LWML sisters across the region
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lcms-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Prayer Partners:</strong> Supporting one another
                      through prayer
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What LWML Offers */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What LWML Offers
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Spiritual Growth
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Deepen your faith through Bible study, prayer, and
                      fellowship with other Christian women. LWML provides
                      opportunities to grow in your relationship with Christ
                      while serving others.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Mission Involvement
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Participate in meaningful mission work both locally and
                      globally. From mite box collections to hands-on service
                      projects, you can make a real difference in spreading the
                      Gospel.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Christian Fellowship
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Build lasting friendships with sisters in Christ. Share
                      joys and sorrows, support one another in prayer, and
                      experience the love of Christian community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Leadership Development
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Develop your gifts and talents through various leadership
                      opportunities within the organization. LWML provides
                      training and support for women to grow as leaders in their
                      church and community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mite Box Information */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mite Box Ministry
                </h3>
                <p className="text-gray-700 mb-6">
                  The mite box is a symbol of LWMLs mission work. Based on the
                  biblical story of the widow&apos;s mite, these small boxes
                  collect offerings that fund mission projects around the world.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-70 rounded-lg p-6 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      How It Works
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Place your mite box in a visible location</li>
                      <li>• Add spare change or small donations regularly</li>
                      <li>• Return filled boxes to the church</li>
                      <li>
                        • Funds support national and district mission grants
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white bg-opacity-70 rounded-lg p-6 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Mission Impact
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Evangelism and outreach programs</li>
                      <li>• Seminary student support</li>
                      <li>• International mission projects</li>
                      <li>• Disaster relief and humanitarian aid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-50 to-lcms-navy/20 rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our LWML Chapter
                </h3>
                <p className="text-gray-700 mb-6">
                  All women of our congregation are invited to participate in
                  LWML activities. Whether you&apos;re interested in mission
                  work, Bible study, or Christian fellowship, there&apos;s a
                  place for you in our LWML family.
                </p>
                <div className="bg-white bg-opacity-70 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700">
                    <span className="font-medium">
                      Want to learn more or get involved?
                    </span>
                    <br />
                    Contact our LWML president or speak with any member.
                    We&apos;d love to welcome you!
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
