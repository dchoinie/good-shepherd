"use client";

import { useEffect, useState } from "react";
import PageTitle from "@/components/custom/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import Container from "@/components/custom/Container";
import { Skeleton } from "@/components/ui/skeleton";

interface YouTubeVideo {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    publishedAt: string;
  };
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: string;
  };
}

interface LiveStream {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    scheduledStartTime: string;
  };
}

interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
}

export default function LiveStreamPage() {
  const [upcomingStream, setUpcomingStream] = useState<LiveStream | null>(null);
  const [pastStreams, setPastStreams] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        // Fetch upcoming live streams
        const upcomingResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&eventType=upcoming&type=video&videoDuration=any&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const upcomingData = await upcomingResponse.json();
        console.log("Upcoming streams response:", upcomingData);

        if (upcomingData.items && upcomingData.items.length > 0) {
          setUpcomingStream(upcomingData.items[0]);
        }

        // Fetch past live streams with a broader search
        const pastResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&eventType=completed&type=video&videoDuration=any&maxResults=100&order=date&publishedAfter=2024-01-01T00:00:00Z&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const pastData = await pastResponse.json();
        console.log("Past streams response:", pastData);

        if (pastData.items) {
          // Get video details for past streams
          const videoIds = pastData.items
            .map((item: YouTubeSearchItem) => item.id.videoId)
            .join(",");
          const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
          );
          const detailsData = await detailsResponse.json();
          console.log("Stream details response:", detailsData);

          // Log streams by year and month for debugging
          const streamsByYearMonth = detailsData.items.reduce(
            (acc: Record<string, YouTubeVideo[]>, stream: YouTubeVideo) => {
              const date = new Date(stream.snippet.publishedAt);
              const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
              if (!acc[key]) acc[key] = [];
              acc[key].push(stream);
              return acc;
            },
            {}
          );

          console.log("Streams grouped by year-month:", streamsByYearMonth);

          // Limit to 9 most recent streams
          const limitedStreams = detailsData.items.slice(0, 9);
          console.log("Final limited streams:", limitedStreams);
          setPastStreams(limitedStreams);
        }
      } catch (error) {
        console.error("Error fetching streams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);

  return (
    <>
      <PageTitle title="Live Streams" />
      <Container className="mb-24">
        {/* Upcoming Stream Section */}
        {upcomingStream && (
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Live Stream</h2>
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative aspect-video">
                    {loading ? (
                      <Skeleton className="w-full h-full" />
                    ) : (
                      <iframe
                        src={`https://www.youtube.com/embed/${upcomingStream.id}`}
                        title={upcomingStream.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    )}
                  </div>
                </div>
                <CardContent className="p-4 md:w-2/3">
                  <h3 className="text-lg font-semibold mb-2">
                    {upcomingStream.snippet.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Scheduled for:{" "}
                    {upcomingStream.snippet.scheduledStartTime
                      ? format(
                          new Date(upcomingStream.snippet.scheduledStartTime),
                          "PPP p"
                        )
                      : "TBA"}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {upcomingStream.snippet.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        {/* Past Streams Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Past Live Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastStreams.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  {loading ? (
                    <Skeleton className="w-full h-full" />
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.snippet.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {video.snippet.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {video.snippet.publishedAt
                      ? format(new Date(video.snippet.publishedAt), "PPP")
                      : "Date unavailable"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {parseInt(video.statistics.viewCount).toLocaleString()}{" "}
                    views
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}
      </Container>
    </>
  );
}
