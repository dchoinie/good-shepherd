import React from "react";
import SectionTitle from "../SectionTitle";
import MinistriesCard from "./MinistriesCard";
import PageContainer from "../PageContainer";

const ministriesData = [
  {
    title: "Men",
    description:
      "Our Men's Ministry provides opportunities for men to grow in faith, build strong relationships, and serve the community through fellowship, study, and acts of service.",
    image: "/men.jpg",
    href: "/ministries/men",
  },
  {
    title: "Women",
    description:
      "Our Women's Ministry offers a welcoming space for women to connect, deepen their faith, and serve others through fellowship, study, and outreach opportunities.",
    image: "/women.jpg",
    href: "/ministries/women",
  },
  {
    title: "Students",
    description:
      "Our Student Ministry welcomes both Bethany Lutheran College and Mankato State University students, providing a supportive community to grow in faith, build friendships, and serve others.",
    image: "/students.jpg",
    href: "/ministries/students",
  },
  {
    title: "Youth",
    description:
      "Youth Ministry nurtures faith, friendship, and fun for young people through engaging activities, Bible study, and opportunities to serve and grow together.",
    image: "/youth.jpg",
    href: "/ministries/youth",
  },
  {
    title: "Children",
    description:
      "Children's Ministry provides a loving and joyful environment where kids can learn about God, grow in faith, and build lasting friendships through fun and engaging activities.",
    image: "/children.jpg",
    href: "/ministries/children",
  },
  {
    title: "Music",
    description:
      "Good Shepherd's Music Ministry, centered around our choir, offers a meaningful way to glorify God through music while fostering fellowship and inspiring worship.",
    image: "/choir.jpg",
    href: "/ministries/music",
  },
];

const Ministries = (): JSX.Element => {
  return (
    <div className="py-24 bg-gradient-to-br from-stone-50 to-gray-50">
      <div className="relative">
        <SectionTitle
          title="Ministries"
          tag="Get Involved"
          tagColor="bg-stone-700"
          subtitle="We offer a variety of ministries to help you get involved and make a difference. Whether you're passionate about community outreach, music, youth programs, or small group fellowship, there's a place for you here. Join us in serving others, building relationships, and growing together in faith."
        />
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministriesData.map((ministry) => (
              <MinistriesCard
                key={ministry.title}
                title={ministry.title}
                description={ministry.description}
                image={ministry.image}
                href={ministry.href}
              />
            ))}
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default Ministries;
