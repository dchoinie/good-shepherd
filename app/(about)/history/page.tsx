"use client";

import React from "react";
import PageContainer from "../../../components/custom/PageContainer";
import PageTitle from "../../../components/custom/PageTitle";
import SectionTitle from "../../../components/custom/SectionTitle";
import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "April 5, 1957",
    title: "Formation of Mission Congregation",
    description:
      "13 families from Our Savior's Lutheran Church in Mankato, Minnesota met to form a new Lutheran Church-Missouri Synod mission congregation. The action was endorsed by the District, Our Savior's Lutheran Church congregation and their pastor.",
  },
  {
    date: "April 26, 1957",
    title: "Constitution Accepted",
    description:
      "A constitution for a new Lutheran Church-Missouri Synod congregation in Mankato, Minnesota was accepted.",
  },
  {
    date: "May 5, 1957",
    title: "Name and Officers Selected",
    description:
      "The name 'The Lutheran Church of the Good Shepherd' was approved and officers elected. They were President Myron Ulen, Vice President Lorin Flitter, Secretary Ben Buck, Treasurer William Morris, Elders Karl Malwitz, Ernie Kretschmar & Harold Stavenua, Trustees Erwin Fuller & Walter Kuhlman and Head Usher Robert Quint.",
  },
  {
    date: "Summer 1957",
    title: "Vacancy Pastor Called",
    description:
      "Pastor E.J.A Marxhausen of New Ulm was called as vacancy pastor for the newly formed The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "September 8, 1957",
    title: "First Service Held",
    description:
      "The 1st service of The Lutheran Church of the Good Shepherd was held at the 7th Day Adventist Church at 319 State Street in Mankato. Rent was $100.00 per month.",
  },
  {
    date: "September 29, 1957",
    title: "First Communion Service",
    description:
      "The 1st communion service of The Lutheran Church of the Good Shepherd was held.",
  },
  {
    date: "October 20, 1957",
    title: "First Baptism",
    description:
      "Beverly Jane Buck, daughter of Ben & Dorothy Buck, was the first baptism at the newly formed Good Shepherd.",
  },
  {
    date: "November 24, 1957",
    title: "Pastor E.P. Kauffeld Called",
    description:
      "Pastor E.P. Kauffeld was called to serve The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "December 22, 1957",
    title: "Pastor Kauffeld Installed",
    description:
      "Pastor E.P. Kauffeld was installed as the first pastor of The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "December 29, 1957",
    title: "Pastor Kauffeld's First Service",
    description:
      "Pastor E.P. Kauffeld conducted his 1st service at Good Shepherd.",
  },
  {
    date: "January 27, 1958",
    title: "Building Site Approved",
    description:
      "The district approved the purchase of the building site at 937 Charles Avenue in West Mankato and loaned the congregation $10,000.00.",
  },
  {
    date: "March 30, 1958",
    title: "First Confirmation",
    description:
      "The first Rite of Confirmation was held. Members of the class were Aaron Buddensiek, Robert Mees, Roger Sayler, Donald Savenau, Herbert Rader Jr. & Harvey Polchow Jr.",
  },
  {
    date: "August 28, 1958",
    title: "Groundbreaking Ceremonies",
    description:
      "Groundbreaking ceremonies were held for the construction of the church building at 937 Charles Avenue. The building was constructed by General Contractor Robert W. Carlstrom, Mechanical Contractor E.A. Hodapp, Electrical Contractor K&W Electric, Co.",
  },
  {
    date: "December 14, 1958",
    title: "Parsonage Dedicated",
    description:
      "The parsonage was dedicated & the cornerstone for the church building was laid.",
  },
  {
    date: "August 16, 1959",
    title: "First Service in New Building",
    description: "The first service was held in the new church building.",
  },
  {
    date: "September 13, 1959",
    title: "Church Building Dedicated",
    description:
      "The church building was dedicated with 3 services: 10:30am Dedication Service, 3pm Dedicatory Service of Praise & 7pm Dedicatory Service of Thanksgiving & Prayer.",
  },
  {
    date: "April 2, 1967",
    title: "Pastor Ronald Bongard Installed",
    description:
      "Pastor Ronald Bongard was installed as the 2nd pastor of The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "October 12, 1975",
    title: "Pastor Victor Roth Installed",
    description:
      "Pastor Victor Roth was installed as the 3rd pastor of The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "October 3, 1982",
    title: "25th Anniversary Celebration",
    description:
      "A 25th anniversary celebration was held with a service conducted by Pastor Ben Buck and Pastor Victor Roth as liturgist.",
  },
  {
    date: "August 8, 1987",
    title: "Pastor Michael Dooling Installed",
    description:
      "Pastor Michael W. Dooling was installed as the 4th pastor of The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "October 9, 1990",
    title: "Mortgage Burned",
    description: "The mortgage was burned.",
  },
  {
    date: "December 4, 1994",
    title: "Pastor Greggory Coop Installed",
    description:
      "Pastor Greggory Coop was installed as the 5th pastor of The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "February 27, 1997",
    title: "New Land Purchased",
    description:
      "10.7 acres in North Mankato, Minnesota was purchased as the site of a new church home.",
  },
  {
    date: "1998",
    title: "Transition Period",
    description:
      "The church building at 937 Charles Avenue was sold to Victory Life Church. Sunday services were held at Garfield Elem. School in North Mankato and weekday services were held at Campus Chapel at Mankato State University.",
  },
  {
    date: "1999",
    title: "New Building Construction Begins",
    description:
      "Groundbreaking services were conducted and construction begun for Phase I (fellowship hall & education wing) for the new church building at 2101 Lor Ray Drive in North Mankato. The General Contractor was WEB Construction.",
  },
  {
    date: "2000",
    title: "Phase I Dedication",
    description:
      "Dedication of Phase I was held. Services were held in the fellowship hall.",
  },
  {
    date: "September 2001",
    title: "Little Lambs Preschool Begins",
    description:
      "Little Lambs Preschool was begun. Teacher Tracy Mielke had 8 students.",
  },
  {
    date: "July 2003",
    title: "Pastor Vance Becker Installed",
    description:
      "Pastor Vance Becker was installed as the 6th pastor of The Lutheran Church of the Good Shepherd.",
  },
  {
    date: "September 2005",
    title: "Christian Day School Formed",
    description:
      "A Christian Day School was formed. Good Shepherd Lutheran School opened with 4 students in kindergarten with teacher Alice Brase.",
  },
  {
    date: "April 2006",
    title: "Sanctuary Construction Begins",
    description:
      "Groundbreaking ceremonies were held for construction of the sanctuary (Phase II). The General Contractor was Holtmeier Construction. Inc.",
  },
  {
    date: "September 2006",
    title: "School Expansion",
    description:
      "Good Shepherd Lutheran School grew to add classes in grades 1st through 6th with teachers Carolyn Garman & Linda Becker.",
  },
  {
    date: "October 1, 2006",
    title: "Sanctuary Dedication",
    description:
      "Dedication of the sanctuary (Phase II) of The Lutheran Church of the Good Shepherd was held. The service were conducted by Pastor Greggory Coop with Pastor Victor as liturgist.",
  },
  {
    date: "2007",
    title: "50th Jubilee Celebration",
    description:
      "Yearlong activities celebrating the Jubilee of The Lutheran Church of the Good Shepherd. A celebration service is held on September 9.",
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex items-start space-x-4"
    >
      {/* Timeline line */}
      <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>

      {/* Content */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="text-sm font-semibold text-blue-600 mb-2">
          {item.date}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default function HistoryPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Our History"
          subtitle="A journey of faith, community, and God's grace since 1957"
        />

        <PageContainer>
          <div className="container mx-auto px-4 py-24">
            {/* Introduction Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    On April 5, 1957, a group of West Mankato residents
                    interested in forming a new Lutheran-Missouri Synod
                    congregation met to form a mission congregation. We accepted
                    a constitution on April 26, 1957, and on May 7, 1957,
                    selected the name &ldquo;The Lutheran Church of the Good
                    Shepherd&rdquo; and elected officers.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    The Lutheran Church of the Good Shepherd is Christ-centered,
                    Gospel-oriented and people loving. God has blessed our
                    congregation and throughout these 65+ years, we have
                    maintained our sound Lutheran confessional theology despite
                    changes in society and the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Pastoral Leadership Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <SectionTitle
                title="Pastoral Leadership Through the Years"
                subtitle="Faithful servants who have guided our congregation"
                tag="Leadership"
                tagColor="bg-green-600"
              />
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Pastors
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor E.P. Kauffeld</strong> (1957-1966)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor Ronald Bongard</strong> (1966-1976)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor Victor Roth</strong> (1975-1987)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor Michael Dooling</strong> (1988-1994)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor Greggory S. Coop</strong> (1994-2001)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor Vance Becker</strong> (2003-2019)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Pastor LaPlant</strong> (2021-Present)
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Milestones
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>1959:</strong> First church building dedicated
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>1990:</strong> Mortgage burned
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>1997:</strong> New land purchased in North
                          Mankato
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>2000:</strong> New church facility dedicated
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>2006:</strong> Sanctuary (Phase II) completed
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Our Journey Through Time"
                subtitle="Key moments in the life of Good Shepherd Lutheran Church"
                tag="Timeline"
                tagColor="bg-orange-600"
              />

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                {/* Timeline items */}
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Looking Forward
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We want to express our sincere appreciation to all our
                  members, both past and present, for their willingness to serve
                  and in sharing their lives with our Good Shepherd family. We
                  look forward, with the help of God, as He continues to lead
                  us, as we carry out the mission He has set for us in Christ.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
