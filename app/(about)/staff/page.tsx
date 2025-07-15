import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import SEO from "@/components/custom/SEO";

export default function StaffPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <SEO
          title="Our Staff & Leadership"
          keywords="Good Shepherd Lutheran Church, staff, leadership, church, Mankato, MN, Minnesota, Church"
        />
        <PageTitle
          title="Our Staff & Leadership"
          subtitle="Meet the dedicated people who serve our congregation"
        />

        <PageContainer>
          {/* Main Content */}
          <div className="container mx-auto px-4 py-24">
            {/* Staff Profiles */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Church Staff
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pastor Profile */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mr-6">
                        <span className="text-gray-500 text-2xl font-semibold">
                          PL
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Pastor LeRoy LaPlant
                        </h3>
                        <p className="text-blue-600 font-medium">Pastor</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pastor LaPlant serves as our pastor, providing spiritual
                      leadership and guidance to our congregation. He leads
                      worship services, provides pastoral care, and oversees the
                      spiritual life of our church community.
                    </p>
                  </div>
                </div>

                {/* Secretary Profile */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mr-6">
                        <span className="text-gray-500 text-2xl font-semibold">
                          JE
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Julie Evens
                        </h3>
                        <p className="text-blue-600 font-medium">
                          Church Secretary
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Julie serves as our church secretary, managing
                      administrative tasks, coordinating communications, and
                      providing support to our congregation and staff. She is
                      often the first point of contact for visitors and members.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elected Members */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Elected Leadership
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Church Council */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Church Council
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="font-semibold">President:</span> Dan
                      Choiniere
                    </p>
                    <p>
                      <span className="font-semibold">Vice President:</span>{" "}
                      Josh Schultz
                    </p>
                    <p>
                      <span className="font-semibold">Treasurer:</span> Lynn
                      Schwarz
                    </p>
                    <p>
                      <span className="font-semibold">
                        Financial Secretary:
                      </span>{" "}
                      Caled Heartbird
                    </p>
                  </div>
                </div>

                {/* Board of Elders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Board of Elders
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Pat Lease</p>
                    <p>Gary Urban</p>
                    <p>Jeremy Costello</p>
                    <p>Chad Lease</p>
                  </div>
                </div>

                {/* Board of Education */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Board of Education
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Bobbi Urban</p>
                    <p>Natasha Choiniere</p>
                  </div>
                </div>

                {/* Board of Evangelism */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Board of Evangelism
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Lynn Lease</p>
                    <p>Bernadette Schendel</p>
                  </div>
                </div>

                {/* Board of Trustees */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Board of Trustees
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Ricardo Gill</p>
                    <p>Robin Schendel</p>
                  </div>
                </div>

                {/* School Board */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    School Board
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Joe Holtmeier</p>
                    <p>Megan Lease</p>
                    <p>Andrew Bittner</p>
                    <p>Jesse Gilbertson</p>
                    <p>Jenean Cherney</p>
                    <p>Rhonda Harman</p>
                  </div>
                </div>

                {/* Music Director */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Music Director
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Emily LaPlant</p>
                  </div>
                </div>

                {/* Head Usher */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Head Usher
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Rev. Michael Harman</p>
                  </div>
                </div>

                {/* Board of Finance */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-lcms-navy rounded-full mr-3"></span>
                    Board of Finance
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Beth Jones</p>
                    <p>Kim Miller</p>
                    <p>Billy Pomranke</p>
                    <p>Soo Shin</p>
                    <p>Phil Adams</p>
                    <p>Jan Braam</p>
                    <p>Breanna Erdman</p>
                    <p>Sue Schwarz</p>
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
