import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { Book, Cross, School } from "lucide-react";

const servicesGridItems = [
  {
    name: "Divine Service",
    time: "9:00 AM",
    icon: <Cross size={48} />,
    description:
      "Join us for worship and praise as we gather together in God's Word and Sacraments. Experience traditional Lutheran liturgy and meaningful hymns that proclaim Christ crucified and risen.",
  },
  {
    name: "Bible Study For Life",
    time: "10:15 AM",
    icon: <Book size={48} />,
    description:
      "Grow in your faith through Scripture study and discussion. This all-ages Bible study explores God's Word in depth, applying it to our daily lives and strengthening our walk with Christ.",
  },
  {
    name: "Sunday School",
    time: "10:15 AM",
    icon: <School size={48} />,
    description:
      "Children ages 3 through 8th grade are invited to learn about Jesus through age-appropriate lessons, crafts, and activities. Classes run September through June.",
  },
];

const Services = (): JSX.Element => {
  return (
    <PageContainer>
      <SectionTitle
        title="Worship Schedule"
        tag="Join Us"
        subtitle="We welcome you to worship with us every Sunday morning."
        tagColor="bg-stone-700"
      />
      <div className="max-w-5xl mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesGridItems.map((item) => (
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
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Services;
