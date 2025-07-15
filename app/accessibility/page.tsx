import PageTitle from "@/components/custom/PageTitle";
import SEO from "@/components/custom/SEO";

export default function AccessibilityPage() {
  return (
    <>
      <SEO
        title="Accessibility | Good Shepherd Lutheran Church"
        description="Learn about the accessibility features and commitment of Good Shepherd Lutheran Church's website. We strive to make our site usable for everyone."
        keywords="accessibility, ADA, inclusive, Good Shepherd Lutheran Church, website access"
        ogTitle="Accessibility at Good Shepherd Lutheran Church"
        ogDescription="Our website is designed to be accessible to all users, including those with disabilities. Read about our accessibility features and how to contact us for help."
      />
      <PageTitle
        title="Accessibility"
        subtitle="Our commitment to an inclusive and accessible online experience for all."
      />
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
          <p>
            Good Shepherd Lutheran Church is committed to ensuring digital
            accessibility for all visitors, including people with disabilities.
            We continually improve the user experience for everyone and apply
            relevant accessibility standards to our website.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Accessibility Features
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keyboard navigation is supported throughout the site.</li>
            <li>
              All images include descriptive{" "}
              <span className="font-mono">alt</span> text.
            </li>
            <li>
              Text and background colors are chosen for strong contrast and
              readability.
            </li>
            <li>
              Headings and landmarks are used for clear page structure and
              screen reader support.
            </li>
            <li>Forms are labeled and accessible to assistive technologies.</li>
            <li>
              Videos and streams include captions or transcripts when available.
            </li>
            <li>
              Responsive design ensures usability on all devices and screen
              sizes.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ongoing Improvements</h2>
          <p>
            We regularly review our website to maintain and improve
            accessibility. If you encounter any barriers or have suggestions,
            please let us know.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you need assistance accessing any part of our website, or would
            like to report an accessibility issue, please contact us at{" "}
            <a
              href="mailto:goodshepmankato@gmail.com"
              className="text-blue-700 underline"
            >
              goodshepmankato@gmail.com
            </a>{" "}
            or use our{" "}
            <a href="/contact" className="text-blue-700 underline">
              contact form
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
