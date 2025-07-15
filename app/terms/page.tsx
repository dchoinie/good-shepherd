import React from "react";
import PageTitle from "@/components/custom/PageTitle";
import SEO from "@/components/custom/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Good Shepherd Lutheran Church"
        description="Read the Terms & Conditions for using the Good Shepherd Lutheran Church website, including information about privacy, user responsibilities, and online services."
        keywords="terms, conditions, privacy, Good Shepherd Lutheran Church, Mankato, online services"
        canonical="https://goodshepherdmankato.org/terms"
        ogTitle="Terms & Conditions | Good Shepherd Lutheran Church"
        ogDescription="Review the terms and conditions for using our website, including privacy, donations, and user responsibilities."
      />
      <PageTitle
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using our website."
      />
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using the Good Shepherd Lutheran Church website
          (&quot;Site&quot;), you agree to be bound by these Terms &amp;
          Conditions and all applicable laws and regulations. If you do not
          agree with any of these terms, you are prohibited from using or
          accessing this Site.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. Use of Website</h2>
        <p className="mb-6">
          The Site provides information about our church, ministries, events,
          worship services, and resources. You may also use features such as
          newsletter signup, contact forms, and online donations. You agree to
          use the Site only for lawful purposes and in a manner that does not
          infringe the rights of, restrict, or inhibit anyone else&apos;s use of
          the Site.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Privacy Policy</h2>
        <p className="mb-6">
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and safeguard your information when
          you use our Site, including when you submit forms or make donations.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Online Donations</h2>
        <p className="mb-6">
          If you make a donation through our Site, you agree to provide accurate
          and complete information. All donations are processed securely. We do
          not store your payment information. Donations are non-refundable
          unless otherwise stated.
        </p>
        <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
        <p className="mb-6">
          All content on this Site, including text, images, graphics, and logos,
          is the property of Good Shepherd Lutheran Church or its content
          suppliers and is protected by copyright laws. You may not reproduce,
          distribute, or use any content without our prior written permission.
        </p>
        <h2 className="text-2xl font-bold mb-4">6. External Links</h2>
        <p className="mb-6">
          Our Site may contain links to third-party websites. We are not
          responsible for the content or privacy practices of these external
          sites. Accessing any such linked website is at your own risk.
        </p>
        <h2 className="text-2xl font-bold mb-4">7. Disclaimer</h2>
        <p className="mb-6">
          The information on this Site is provided &quot;as is&quot; and without
          warranties of any kind, either express or implied. Good Shepherd
          Lutheran Church does not warrant that the Site will be available,
          error-free, or free of viruses or other harmful components.
        </p>
        <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall Good Shepherd Lutheran Church, its staff, or
          volunteers be liable for any damages arising out of the use or
          inability to use the Site, even if we have been notified of the
          possibility of such damages.
        </p>
        <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to update or modify these Terms &amp; Conditions
          at any time. Changes will be effective immediately upon posting to
          this page. Your continued use of the Site constitutes acceptance of
          those changes.
        </p>
        <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms &amp; Conditions, please
          contact us through our{" "}
          <a href="/contact" className="text-blue-600 underline">
            Contact page
          </a>
          .
        </p>
      </div>
    </>
  );
}
