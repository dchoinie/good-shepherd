import React from "react";
import PageContainer from "../../custom_components/PageContainer";
import SectionTitle from "../SectionTitle";
import ImageCard from "./ImageCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Beliefs = () => {
  return (
    <PageContainer>
      <div className="my-24">
        <SectionTitle
          title="The Lutheran Confessions"
          tag="Our Faith"
          subtitle="Drawn from God's Word, the Lutheran Confessions are a true and binding exposition of Holy Scripture and serve as authoritative texts for all pastors, congregations and other rostered church workers of The Lutheran Church—Missouri Synod."
        />
        <div className="grid grid-cols-3 gap-12">
          <ImageCard
            src="/faith_alone.png"
            alt="Faith Alone"
            title="Faith Alone"
            description="The Lutheran Church-Missouri Synod (LCMS) upholds the belief in faith alone (Sola Fide), teaching that salvation is received through faith in Jesus Christ, not by human works or efforts. This faith is a trust in God's promises, made possible by the Holy Spirit, and rests entirely on the life, death, and resurrection of Christ for the forgiveness of sins. By emphasizing 'faith alone,' the LCMS affirms that righteousness before God is granted solely through believing in Christ, not by anything we do, ensuring that all glory belongs to God."
          />
          <ImageCard
            src="/grace_alone.png"
            alt="Grace Alone"
            title="Grace Alone"
            description="The Lutheran Church-Missouri Synod &#40;LCMS&#41; holds firmly to the belief in grace alone &#40;Sola Gratia&#41;, emphasizing that salvation is a free gift from God, given purely out of His love and mercy. This belief teaches that humans cannot earn salvation through their own efforts, works, or merits. Instead, it is through God's unearned grace, made known to us through the life, death, and resurrection of Jesus Christ, that forgiveness and eternal life are offered to all who believe. This foundational truth highlights God's unconditional love and serves as a cornerstone of faith within the LCMS."
          />
          <ImageCard
            src="/scripture_alone.png"
            alt="Scripture Alone"
            title="Scripture Alone"
            description='The Lutheran Church-Missouri Synod (LCMS) holds to the belief in "Scripture alone" (Sola Scriptura), affirming that the Bible is the sole, authoritative source of truth for faith and life. The LCMS teaches that Scripture is the inspired and inerrant Word of God, sufficient for revealing His will and guiding His people. This belief underscores that all teachings, traditions, and practices of the church must be rooted in and measured against the Word of God, ensuring that Christ remains at the center of all doctrine and life.'
          />
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link href="/beliefs">Learn More</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Beliefs;
