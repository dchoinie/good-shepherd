import React from "react";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import ImageCard from "./ImageCard";
import { Cross, Book, ScrollText } from "lucide-react";

const Beliefs = () => {
  return (
    <PageContainer>
      <div className="my-24">
        <SectionTitle
          title="The Lutheran Confessions"
          tag="Our Faith"
          tagColor="bg-lcms-navy"
          subtitle="Drawn from God's Word, the Lutheran Confessions are a true and binding exposition of Holy Scripture and serve as authoritative texts for all pastors, congregations and other rostered church workers of The Lutheran Church—Missouri Synod."
        />

        {/* Main content in a 3-column grid */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {/* Faith Alone Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="flex flex-col items-center">
                <Cross className="w-12 h-12 text-[#D4AF37] mb-4" />
                <div className="text-center">
                  <h2 className="text-3xl font-serif font-bold text-[#1B3B6F] mb-1">
                    Sola Fide
                  </h2>
                  <p className="text-[#1B3B6F]/80 text-lg">Faith Alone</p>
                </div>
                <div className="absolute -inset-8 bg-[#1B3B6F]/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
            <ImageCard
              src="/faith_alone.png"
              alt="Faith Alone"
              title="Faith Alone"
              description="The Lutheran Church-Missouri Synod (LCMS) upholds the belief in faith alone (Sola Fide), teaching that salvation is received through faith in Jesus Christ, not by human works or efforts. This faith is a trust in God's promises, made possible by the Holy Spirit, and rests entirely on the life, death, and resurrection of Christ for the forgiveness of sins. By emphasizing 'faith alone,' the LCMS affirms that righteousness before God is granted solely through believing in Christ, not by anything we do, ensuring that all glory belongs to God."
            />
          </div>

          {/* Grace Alone Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="flex flex-col items-center">
                <Book className="w-12 h-12 text-[#D4AF37] mb-4" />
                <div className="text-center">
                  <h2 className="text-3xl font-serif font-bold text-[#1B3B6F] mb-1">
                    Sola Gratia
                  </h2>
                  <p className="text-[#1B3B6F]/80 text-lg">Grace Alone</p>
                </div>
                <div className="absolute -inset-8 bg-[#1B3B6F]/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
            <ImageCard
              src="/grace_alone.png"
              alt="Grace Alone"
              title="Grace Alone"
              description="The Lutheran Church-Missouri Synod &#40;LCMS&#41; holds firmly to the belief in grace alone &#40;Sola Gratia&#41;, emphasizing that salvation is a free gift from God, given purely out of His love and mercy. This belief teaches that humans cannot earn salvation through their own efforts, works, or merits. Instead, it is through God's unearned grace, made known to us through the life, death, and resurrection of Jesus Christ, that forgiveness and eternal life are offered to all who believe. This foundational truth highlights God's unconditional love and serves as a cornerstone of faith within the LCMS."
            />
          </div>

          {/* Scripture Alone Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="flex flex-col items-center">
                <ScrollText className="w-12 h-12 text-[#D4AF37] mb-4" />
                <div className="text-center">
                  <h2 className="text-3xl font-serif font-bold text-[#1B3B6F] mb-1">
                    Sola Scriptura
                  </h2>
                  <p className="text-[#1B3B6F]/80 text-lg">Scripture Alone</p>
                </div>
                <div className="absolute -inset-8 bg-[#1B3B6F]/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
            <ImageCard
              src="/scripture_alone.png"
              alt="Scripture Alone"
              title="Scripture Alone"
              description='The Lutheran Church-Missouri Synod (LCMS) holds to the belief in "Scripture alone" (Sola Scriptura), affirming that the Bible is the sole, authoritative source of truth for faith and life. The LCMS teaches that Scripture is the inspired and inerrant Word of God, sufficient for revealing His will and guiding His people. This belief underscores that all teachings, traditions, and practices of the church must be rooted in and measured against the Word of God, ensuring that Christ remains at the center of all doctrine and life.'
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Beliefs;
