import Hero from "./custom_components/home_components/Hero";
import Beliefs from "./custom_components/home_components/Beliefs";
import Stream from "./custom_components/home_components/Stream";
import Services from "./custom_components/home_components/Services";
import Ministries from "./custom_components/home_components/Ministries";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Beliefs />
      <Stream />
      <Services />
      <Ministries />
      {/* Events */}
      {/* CCA */}
      {/* Support */}
      {/* Contact */}
    </div>
  );
}
