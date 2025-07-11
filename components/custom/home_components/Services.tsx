import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { Book, Cross, School, Clock } from "lucide-react";

const servicesGridItems = [
  {
    name: "Divine Service",
    time: "9:00 AM",
    icon: Cross,
    description:
      "Join us for worship and praise as we gather together in God's Word and Sacraments. Experience traditional Lutheran liturgy and meaningful hymns that proclaim Christ crucified and risen.",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    name: "Bible Study For Life",
    time: "10:15 AM",
    icon: Book,
    description:
      "Grow in your faith through Scripture study and discussion. This all-ages Bible study explores God's Word in depth, applying it to our daily lives and strengthening our walk with Christ.",
    color: "from-green-50 to-emerald-50",
    borderColor: "border-green-100",
    iconBg: "bg-green-500",
  },
  {
    name: "Sunday School",
    time: "10:15 AM",
    icon: School,
    description:
      "Children ages 3 through 12 are invited to learn about Jesus through age-appropriate lessons, crafts, and activities. Classes run September through June.",
    color: "from-purple-50 to-violet-50",
    borderColor: "border-purple-100",
    iconBg: "bg-purple-500",
  },
];

const Services = (): JSX.Element => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <PageContainer>
        <div className="relative z-10">
          <SectionTitle
            title="Worship Schedule"
            tag="Join Us"
            subtitle="We welcome you to worship with us every Sunday morning."
            tagColor="bg-stone-700"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {servicesGridItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className={`group relative bg-gradient-to-br ${item.color} rounded-2xl p-8 shadow-lg border ${item.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {/* Decorative background elements */}
                  <div
                    className={`absolute top-0 left-0 w-16 h-16 ${item.iconBg} rounded-full opacity-10 -translate-x-8 -translate-y-8`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 ${item.iconBg} rounded-full opacity-10 translate-x-10 translate-y-10`}
                  ></div>

                  <div className="relative text-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <IconComponent className="text-white text-2xl" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.name}
                    </h3>

                    {/* Time with clock icon */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-lcms-gold" />
                      <p className="text-2xl font-semibold text-lcms-gold">
                        {item.time}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Services;
