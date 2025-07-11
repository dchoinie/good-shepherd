import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";

export default function VolunteerPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Volunteer Opportunities"
          subtitle="Join us in serving our church and community through various ministry opportunities"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Introduction */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serve With Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                There are many ways to get involved and serve our church
                community. Whether you&apos;re interested in leadership
                positions, teaching, or helping with special events, your gifts
                and talents are welcome here.
              </p>
            </div>

            {/* Elected Leadership Opportunities */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Elected Leadership Positions
              </h2>
              <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                These positions are filled through congregational elections and
                provide important leadership and governance for our church.
                Terms typically run for 2-3 years, and nominations are accepted
                during our annual meeting.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Church Council */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Church Council
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Provides overall leadership and governance for the
                    congregation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">President:</span> Leads
                      council meetings and represents the congregation
                    </p>
                    <p>
                      <span className="font-semibold">Vice President:</span>{" "}
                      Assists president and serves as backup
                    </p>
                    <p>
                      <span className="font-semibold">Treasurer:</span> Manages
                      church finances and budget
                    </p>
                    <p>
                      <span className="font-semibold">
                        Financial Secretary:
                      </span>{" "}
                      Handles financial records and reporting
                    </p>
                  </div>
                </div>

                {/* Board of Elders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Board of Elders
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Provides spiritual oversight and care for the congregation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Assist with communion distribution</p>
                    <p>• Provide care and guidance</p>
                    <p>• Support the pastor in spiritual matters</p>
                    <p>• Help with worship service coordination</p>
                  </div>
                </div>

                {/* Board of Education */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Board of Education
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Oversees educational programs and Sunday School curriculum.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Develop Sunday School curriculum</p>
                    <p>• Coordinate educational events</p>
                    <p>• Support teachers and volunteers</p>
                    <p>• Plan special educational programs</p>
                  </div>
                </div>

                {/* Board of Evangelism */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Board of Evangelism
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Focuses on outreach and welcoming new members to our church.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Welcome visitors and new members</p>
                    <p>• Plan outreach events</p>
                    <p>• Coordinate visitor follow-up</p>
                    <p>• Develop welcoming materials</p>
                  </div>
                </div>

                {/* Board of Trustees */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Board of Trustees
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Manages church property, buildings, and physical facilities.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Oversee building maintenance</p>
                    <p>• Manage property improvements</p>
                    <p>• Coordinate facility rentals</p>
                    <p>• Plan capital projects</p>
                  </div>
                </div>

                {/* School Board */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    School Board
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Governs our Christian school and educational programs.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Oversee school operations</p>
                    <p>• Support teachers and staff</p>
                    <p>• Develop school policies</p>
                    <p>• Plan school events</p>
                  </div>
                </div>

                {/* Board of Finance */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Board of Finance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Provides financial oversight and stewardship guidance.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Review financial reports</p>
                    <p>• Develop budget recommendations</p>
                    <p>• Oversee fundraising efforts</p>
                    <p>• Ensure financial accountability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Volunteer Opportunities */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Other Ways to Get Involved
              </h2>
              <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                Beyond elected positions, there are many opportunities to serve
                and contribute to our church community. These roles offer
                flexible time commitments and allow you to use your unique gifts
                and talents.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sunday School Teaching */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Sunday School Teaching
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Share your faith and knowledge with children and youth.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Teach weekly Sunday School classes</p>
                    <p>• Help with special events and activities</p>
                    <p>• Assist with curriculum preparation</p>
                    <p>• Provide classroom support</p>
                  </div>
                </div>

                {/* Vacation Bible School */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Vacation Bible School
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Help with our annual VBS program for children.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Lead classroom activities</p>
                    <p>• Help with crafts and games</p>
                    <p>• Provide snacks and refreshments</p>
                    <p>• Assist with registration and check-in</p>
                  </div>
                </div>

                {/* Music Ministry */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Music Ministry
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Use your musical talents to enhance our worship services.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Join the choir</p>
                    <p>• Play instruments during worship</p>
                    <p>• Help with special music programs</p>
                    <p>• Assist with sound and technical needs</p>
                  </div>
                </div>

                {/* Ushering */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Ushering
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Help welcome and assist worshippers during services.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Greet and welcome visitors</p>
                    <p>• Distribute bulletins and materials</p>
                    <p>• Assist with seating arrangements</p>
                    <p>• Help with offering collection</p>
                  </div>
                </div>

                {/* Hospitality */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Hospitality
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Help create a welcoming environment for our congregation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Prepare coffee and refreshments</p>
                    <p>• Help with fellowship events</p>
                    <p>• Assist with potlucks and meals</p>
                    <p>• Coordinate special celebrations</p>
                  </div>
                </div>

                {/* Maintenance & Grounds */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Maintenance & Grounds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Help maintain our church facilities and grounds.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Assist with building maintenance</p>
                    <p>• Help with yard work and landscaping</p>
                    <p>• Clean and organize facilities</p>
                    <p>• Help with special projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Involved?
                </h2>
                <p className="text-gray-700 mb-6">
                  We&apos;d love to help you find the perfect way to serve our
                  church community. Contact us to learn more about any of these
                  opportunities or to discuss other ways you might like to
                  contribute.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Contact:</span> Pastor LeRoy
                    LaPlant or Julie Evens (Church Secretary)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span> (Church office
                    number)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> (Church email
                    address)
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
