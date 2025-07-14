"use client";

import { useState, useEffect } from "react";
import PageTitle from "@/components/custom/PageTitle";
import { contentfulUtils } from "@/lib/contentful-utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, FileText } from "lucide-react";

interface Newsletter {
  sys: {
    id: string;
  };
  fields: {
    date: Date;
  };
}

export default function NewsletterPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const fetchNewsletters = async (
    currentSkip: number = 0,
    append: boolean = false
  ) => {
    try {
      const newNewsletters = await contentfulUtils.getNewsletters(
        limit,
        currentSkip
      );

      if (append) {
        setNewsletters((prev) => [...prev, ...newNewsletters]);
      } else {
        setNewsletters(newNewsletters);
      }

      setHasMore(newNewsletters.length === limit);
      setSkip(currentSkip + newNewsletters.length);
    } catch (error) {
      console.error("Error fetching newsletters:", error);
    }
  };

  const loadMore = async () => {
    setLoadingMore(true);
    await fetchNewsletters(skip, true);
    setLoadingMore(false);
  };

  useEffect(() => {
    fetchNewsletters(0, false).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageTitle
          title="Newsletter"
          subtitle="Stay updated with our church newsletter and community announcements."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-full">
                <CardHeader className="pb-3">
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Newsletter"
        subtitle="Stay updated with our church newsletter and community announcements."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Latest Newsletters
          </h2>
          <p className="text-gray-600">
            Browse through our recent newsletters and community updates. Click
            on any date to read the full newsletter.
          </p>
        </div>

        {newsletters.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No newsletters available at this time.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsletters.map((newsletter) => {
                const newsletterDate = new Date(newsletter.fields.date);
                const formattedDate = contentfulUtils.formatDate(
                  newsletterDate.toISOString()
                );
                const dateSlug = newsletterDate.toISOString().split("T")[0]; // YYYY-MM-DD format

                return (
                  <Link
                    key={newsletter.sys.id}
                    href={`/newsletter/${dateSlug}` as any}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer border-gray-200 hover:border-blue-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 text-blue-600">
                          <FileText className="h-4 w-4" />
                          <CardTitle className="text-lg font-semibold">
                            {formattedDate}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mt-2 text-sm">
                          Click to read the full newsletter
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {hasMore && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMore}
                  disabled={loadingMore}
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  {loadingMore ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Load More Newsletters"
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
