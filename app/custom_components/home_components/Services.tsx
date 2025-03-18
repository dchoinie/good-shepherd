import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { Book, Cross, School } from "lucide-react";

const servicesGridItems = [
  {
    name: "Divine Service",
    time: "9:00 AM",
    icon: <Cross size={40} />,
  },
  {
    name: "Bible Study For Life",
    time: "10:15 AM",
    icon: <Book size={40} />,
  },
  {
    name: "Sunday School",
    time: "10:15 AM",
    icon: <School size={40} />,
  },
];

const Services = (): JSX.Element => {
  return (
    <PageContainer>
      <SectionTitle
        title="Divine Service"
        tag="Worship Schedule"
        subtitle="Join us Sunday mornings for our Divine Service."
      />
      <div className="grid grid-cols-3 my-24">
        {servicesGridItems.map((item) => (
          <div
            className={`flex flex-col items-center justify-center ${
              item.name === "Bible Study For Life"
                ? "border-x border-gray-300"
                : ""
            }`}
            key={item.name}
          >
            <span className="text-rose-900 mb-3">{item.icon}</span>
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <p className="text-md text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Services;
