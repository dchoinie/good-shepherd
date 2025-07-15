import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageTitle from "@/components/custom/PageTitle";
import { contentfulUtils } from "@/lib/contentful-utils";
import { contentfulHelpers } from "@/lib/contentful";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SEO from "@/components/custom/SEO";

interface SermonPageProps {
  params: Promise<{
    date: string;
  }>;
}

async function SermonContent({ date }: { date: string }) {
  try {
    const sermon = await contentfulUtils.getSermonByDate(date);

    if (!sermon) {
      notFound();
    }

    const sermonDate = new Date(sermon.fields.date);
    const formattedDate = contentfulUtils.formatDate(sermonDate.toISOString());

    // Render rich text content
    const renderRichText = async (richText: Record<string, unknown>) => {
      if (!richText || !richText.content) return "";

      const resolvedContent = await contentfulHelpers.resolveRichText(richText);
      return resolvedContent;
    };

    const sermonContent = await renderRichText(
      sermon.fields.sermon as unknown as Record<string, unknown>
    );

    return (
      <div className="max-w-4xl mx-auto">
        <SEO
          title={`Sermon - ${formattedDate}`}
          keywords={`Good Shepherd Lutheran Church, sermon, ${formattedDate}, worship, teachings, Mankato, MN, Minnesota, Church`}
          canonical={`https://goodshepherdmankato.org/sermons/${date}`}
        />
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Calendar className="h-5 w-5" />
              <CardTitle className="text-2xl font-bold">
                {formattedDate}
              </CardTitle>
            </div>
            <p className="text-gray-600">
              {sermonDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardHeader>
        </Card>
        <Card>
          <CardContent className="pt-8">
            <div className="prose prose-lg max-w-none">
              {sermonContent ? (
                <div
                  className="text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: sermonContent.replace(/\n/g, "<br />"),
                  }}
                />
              ) : (
                <p className="text-gray-600 italic">
                  Sermon content is not available at this time.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error("Error fetching sermon:", error);
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">
          Error loading sermon. Please try again later.
        </p>
      </div>
    );
  }
}

export default async function SermonPage({ params }: SermonPageProps) {
  const { date } = await params;

  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Sermon"
        subtitle={`Sermon from ${new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/sermons">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sermons
            </Button>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </CardHeader>
              </Card>
              <Card>
                <CardContent className="pt-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        >
          <SermonContent date={date} />
        </Suspense>
      </div>
    </div>
  );
}
