import Hero from "../components/custom/home_components/Hero";
import Beliefs from "../components/custom/home_components/Beliefs";
import Stream from "../components/custom/home_components/Stream";
import Services from "../components/custom/home_components/Services";
import Ministries from "../components/custom/home_components/Ministries";
import About from "../components/custom/home_components/About";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Beliefs />
      <Stream />
      <Services />
      <Ministries />
      <About />
      {/* Events */}
      {/* CCA */}
      {/* Support */}
      {/* Contact */}
    </div>
  );
}
