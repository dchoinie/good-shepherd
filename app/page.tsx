import Hero from "../components/custom/home_components/Hero";
import Beliefs from "../components/custom/home_components/Beliefs";
import Stream from "../components/custom/home_components/Stream";
import Services from "../components/custom/home_components/Services";
import Ministries from "../components/custom/home_components/Ministries";
import About from "../components/custom/home_components/About";
import Contact from "../components/custom/home_components/Contact";
import SEO from "@/components/custom/SEO";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <SEO
        title="Good Shepherd Lutheran Church"
        keywords="Good Shepherd, Lutheran Church, Worship, Study, Fellowship, Service, Compassion, Outreach, Mankato, MN, Minnesota, Church"
        canonical="https://goodshepherdmankato.org/"
      />
      <Hero />
      <Beliefs />
      <Stream />
      <Services />
      <Ministries />
      <About />
      <Contact />
    </div>
  );
}
