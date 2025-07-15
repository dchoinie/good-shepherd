import PageTitle from "@/components/custom/PageTitle";
import PageContainer from "@/components/custom/PageContainer";
import SEO from "@/components/custom/SEO";

export default function CalendarPage() {
  return (
    <>
      <SEO
        title="Event Calendar | Good Shepherd Lutheran Church"
        canonical="https://goodshepherdmankato.org/calendar"
      />
      <PageTitle
        title="Church Calendar"
        subtitle="Stay up to date with all our church events, services, and activities"
      />

      <PageContainer className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600 mb-6">
                View our complete church calendar below. You can also add events
                to your personal calendar by clicking on any event.
              </p>

              <div className="flex justify-center">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=goodshepmankato%40gmail.com&ctz=America%2FChicago"
                  style={{ border: 0 }}
                  width="800"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full max-w-4xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
