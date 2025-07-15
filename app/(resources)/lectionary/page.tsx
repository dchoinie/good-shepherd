"use client";

import { useState, useEffect } from "react";
import PageTitle from "@/components/custom/PageTitle";
import { contentfulUtils } from "@/lib/contentful-utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SEO from "@/components/custom/SEO";

export default function LectionaryPage() {
  const [lectionary, setLectionary] = useState<any[]>([]);
  const [closest, setClosest] = useState<any | null>(null);
  const [recent, setRecent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLectionary = async () => {
      setLoading(true);
      try {
        const all = await contentfulUtils.getAllLectionary();
        if (!all || all.length === 0) {
          setLectionary([]);
          setClosest(null);
          setRecent([]);
          setLoading(false);
          return;
        }
        // Sort by date ascending
        const sorted = all
          .slice()
          .sort(
            (a, b) =>
              new Date(a.fields.date).getTime() -
              new Date(b.fields.date).getTime()
          );
        const now = new Date();
        // Find the closest upcoming (today or future)
        const closestUpcoming =
          sorted.find((item) => new Date(item.fields.date) >= now) ||
          sorted[sorted.length - 1];
        setClosest(closestUpcoming);
        // For recent, get the next 10 most recent (descending), excluding the closest if it's in the future
        const closestId = closestUpcoming.sys.id;
        const recentItems = sorted
          .filter(
            (item) =>
              item.sys.id !== closestId &&
              new Date(item.fields.date) < new Date(closestUpcoming.fields.date)
          )
          .sort(
            (a, b) =>
              new Date(b.fields.date).getTime() -
              new Date(a.fields.date).getTime()
          )
          .slice(0, 10);
        setRecent(recentItems);
        setLectionary(sorted);
      } catch (e) {
        setLectionary([]);
        setClosest(null);
        setRecent([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLectionary();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Lectionary"
        keywords="Good Shepherd Lutheran Church, lectionary, upcoming readings, recent readings, liturgical color, first reading, second reading, gospel, Mankato, MN, Minnesota, Church"
        canonical="https://goodshepherdmankato.org/lectionary"
      />
      <PageTitle
        title="Lectionary"
        subtitle="Explore the upcoming and recent lectionary readings."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading lectionary...
          </div>
        ) : !closest ? (
          <div className="text-center py-12 text-gray-500">
            No lectionary data available.
          </div>
        ) : (
          <>
            <Card className="mb-10 border-blue-400 border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">
                  {contentfulUtils.formatDate(closest.fields.date)}
                </CardTitle>
                <div className="text-lg text-gray-700 mt-2">
                  {closest.fields.liturgicalDay}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Liturgical Color:{" "}
                  <span className="font-semibold">
                    {closest.fields.liturgicalColor}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="font-semibold">First Reading:</span>{" "}
                  {closest.fields.firstReading}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Second Reading:</span>{" "}
                  {closest.fields.secondReading}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Gospel:</span>{" "}
                  {closest.fields.gospel}
                </div>
              </CardContent>
            </Card>
            <div className="mb-6 text-xl font-semibold text-gray-800">
              Recent Lectionary Readings
            </div>
            {recent.length === 0 ? (
              <div className="text-gray-500">
                No recent lectionary readings found.
              </div>
            ) : (
              <div className="grid gap-6">
                {recent.map((item) => (
                  <Card key={item.sys.id}>
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        {contentfulUtils.formatDate(item.fields.date)}
                      </CardTitle>
                      <div className="text-gray-700">
                        {item.fields.liturgicalDay}
                      </div>
                      <div className="text-sm text-gray-500">
                        Liturgical Color:{" "}
                        <span className="font-semibold">
                          {item.fields.liturgicalColor}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2">
                        <span className="font-semibold">First Reading:</span>{" "}
                        {item.fields.firstReading}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Second Reading:</span>{" "}
                        {item.fields.secondReading}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Gospel:</span>{" "}
                        {item.fields.gospel}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
