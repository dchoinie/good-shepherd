import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import { Book, Cross, School, Calendar } from "lucide-react";
import SEO from "@/components/custom/SEO";

const scheduleItems = [
  {
    name: "Divine Service",
    time: "9:00 AM",
    icon: <Cross size={48} />,
    description:
      "Join us for worship and praise as we gather together in God's Word and Sacraments. Experience traditional Lutheran liturgy and meaningful hymns that proclaim Christ crucified and risen.",

    season: "Year-round",
  },
  {
    name: "Bible Study For Life",
    time: "10:15 AM",
    icon: <Book size={48} />,
    description:
      "Grow in your faith through Scripture study and discussion. This all-ages Bible study explores God's Word in depth, applying it to our daily lives and strengthening our walk with Christ.",
    season: "Year-round",
  },
  {
    name: "Sunday School",
    time: "10:15 AM",
    icon: <School size={48} />,
    description:
      "Children ages 3 through 8th grade are invited to learn about Jesus through age-appropriate lessons, crafts, and activities.",
    season: "September through May",
  },
];

export default function SchedulePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <SEO
          title="Worship Schedule"
          keywords="Good Shepherd Lutheran Church, worship schedule, church service times, Mankato, MN, Minnesota, Church"
        />
        <PageTitle
          title="Worship Schedule"
          subtitle="Join us every Sunday morning for worship, study, and fellowship"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            {/* Main Schedule Grid */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {scheduleItems.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
                  >
                    <div className="flex flex-col items-center text-center flex-grow">
                      <div className="bg-stone-700/10 p-4 rounded-full mb-6">
                        <span className="text-stone-700">{item.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-stone-700 mb-2 whitespace-nowrap">
                        {item.name}
                      </h3>
                      <p className="text-3xl font-semibold text-[#FFB81C] mb-3">
                        {item.time}
                      </p>
                      <p className="text-gray-600 flex-grow mb-4">
                        {item.description}
                      </p>

                      {/* Additional Details */}
                      <div className="w-full space-y-2">
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          <span>{item.season}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Divine Service
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our worship follows the traditional Lutheran liturgy,
                      featuring:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Confession and Absolution
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Scripture readings and sermon
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Holy Communion
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Traditional hymns and liturgy
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Bible Study & Sunday School
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Following worship, join us for:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        All-ages Bible study discussion
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Age-appropriate children&apos;s classes
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Fellowship and refreshments
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-lcms-navy rounded-full mr-2"></span>
                        Questions and discussion welcome
                      </li>
                    </ul>
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
