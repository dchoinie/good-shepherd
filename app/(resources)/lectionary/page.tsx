"use client";

import PageTitle from "@/components/custom/PageTitle";
import SEO from "@/components/custom/SEO";
import LectionaryDisplay from "@/components/custom/LectionaryDisplay";

export default function LectionaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Lectionary"
        keywords="Good Shepherd Lutheran Church, lectionary, upcoming readings, recent readings, liturgical color, first reading, second reading, gospel, Mankato, MN, Minnesota, Church"
        canonical="https://goodshepherdmankato.org/lectionary"
      />
      <PageTitle
        title="Lectionary"
        subtitle="Explore the lectionary readings for Sundays. Navigate between Sundays and switch between one-year and three-year series."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LectionaryDisplay series={1} />
      </div>
    </div>
  );
}
