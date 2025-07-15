import PageTitle from "@/components/custom/PageTitle";
import SEO from "@/components/custom/SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Good Shepherd Lutheran Church"
        description="Read the privacy policy for Good Shepherd Lutheran Church. Learn how we collect, use, and protect your information when you use our website, contact us, sign up for newsletters, or make donations."
        keywords="privacy policy, data protection, Good Shepherd Lutheran Church, newsletter, donations, contact"
        ogTitle="Privacy Policy | Good Shepherd Lutheran Church"
        ogDescription="How Good Shepherd Lutheran Church collects, uses, and protects your information online."
        canonical="https://goodshepherdmankato.org/privacy"
      />
      <PageTitle
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we handle your information."
      />
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-6">
          Good Shepherd Lutheran Church (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website (goodshepherdmankato.org),
          contact us, sign up for our newsletter, make donations, or use other
          features of our site.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Personal Information:</strong> When you fill out contact
            forms, sign up for our newsletter, or make a donation, we may
            collect your name, email address, mailing address, phone number, and
            payment information.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how
            you interact with our website, such as your IP address, browser
            type, pages visited, and time spent on the site.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            To respond to your inquiries and provide information about our
            church and ministries.
          </li>
          <li>To send newsletters and updates if you have subscribed.</li>
          <li>To process donations securely.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          How We Share Your Information
        </h2>
        <p className="mb-6">
          We do not sell or rent your personal information. We may share your
          information with trusted third-party service providers (such as
          payment processors and email newsletter services) only as necessary to
          operate our website and services. We may also disclose information if
          required by law.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Cookies &amp; Tracking</h2>
        <p className="mb-6">
          Our website may use cookies and similar technologies to enhance your
          experience and analyze site usage. You can control cookies through
          your browser settings.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-6">
          We implement reasonable security measures to protect your information.
          However, no method of transmission over the Internet or electronic
          storage is 100% secure.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
        <p className="mb-6">
          Our website is not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If you believe we
          have collected such information, please contact us to have it removed.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            You may unsubscribe from our newsletter at any time using the link
            provided in each email.
          </li>
          <li>
            You may contact us to update or delete your personal information.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at{" "}
          <a
            href="mailto:goodshepmankato@gmail.com"
            className="text-blue-600 underline"
          >
            goodshepmankato@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
