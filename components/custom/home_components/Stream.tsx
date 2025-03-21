"use client";

import React, { useEffect, useState } from "react";
import { YouTubeVideo } from "@/types/video";
import PageContainer from "../PageContainer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

interface YouTubeVideoDetails {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  liveStreamingDetails: {
    scheduledStartTime: string;
  };
}

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
}

interface YouTubeDetailsResponse {
  items: YouTubeVideoDetails[];
}

const Stream = (): JSX.Element => {
  const [latestVideo, setLatestVideo] = useState<YouTubeVideo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;

  useEffect(() => {
    const fetchLatestVideo = async () => {
      setIsLoading(true);
      if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
        setError("Missing API key or Channel ID");
        setIsLoading(false);
        return;
      }

      try {
        // First get all upcoming videos from the channel
        const searchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}` +
            `&channelId=${CHANNEL_ID}` +
            `&part=snippet,id` +
            `&type=video` +
            `&eventType=upcoming` +
            `&maxResults=10`
        );

        if (!searchResponse.ok) {
          throw new Error(`HTTP error! status: ${searchResponse.status}`);
        }

        const searchData: YouTubeSearchResponse = await searchResponse.json();

        if (!searchData.items || searchData.items.length === 0) {
          setError("No upcoming livestreams scheduled");
          return;
        }

        // Get all video IDs
        const videoIds = searchData.items.map((item) => item.id.videoId);

        // Get detailed information including exact scheduled times
        const detailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}` +
            `&id=${videoIds.join(",")}` +
            `&part=snippet,liveStreamingDetails` +
            `&maxResults=10`
        );

        if (!detailsResponse.ok) {
          throw new Error(`HTTP error! status: ${detailsResponse.status}`);
        }

        const detailsData: YouTubeDetailsResponse =
          await detailsResponse.json();

        // Find the video with the closest future date
        const now = new Date().getTime();
        const nextStream = detailsData.items
          .filter((video) => {
            const streamTime = new Date(
              video.liveStreamingDetails.scheduledStartTime
            ).getTime();
            return streamTime > now;
          })
          .sort((a, b) => {
            const timeA = new Date(
              a.liveStreamingDetails.scheduledStartTime
            ).getTime();
            const timeB = new Date(
              b.liveStreamingDetails.scheduledStartTime
            ).getTime();
            return timeA - timeB;
          })[0];

        if (!nextStream) {
          setError("No upcoming livestreams found");
          return;
        }

        setLatestVideo({
          id: nextStream.id,
          title: nextStream.snippet.title,
          description: nextStream.snippet.description,
          thumbnail: nextStream.snippet.thumbnails.high.url,
          publishedAt: nextStream.liveStreamingDetails.scheduledStartTime,
        });
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch upcoming livestream"
        );
        console.error("Error fetching YouTube data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestVideo();
  }, []);

  if (error) {
    return <></>;
  }

  return (
    <div className="py-12 my-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/side_2.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-stone-800/90" />
      <PageContainer>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-12 relative z-10">
          <div className="flex w-1/2">
            <AspectRatio ratio={16 / 9}>
              {isLoading ? (
                <Skeleton className="w-full h-full rounded-xl" />
              ) : (
                <div className="w-full h-full rounded-xl shadow-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${latestVideo?.id}?modestbranding=1&rel=0&showinfo=0&autoplay=0&origin=${window.location.origin}`}
                    title={latestVideo?.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </AspectRatio>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h4 className="text-white text-5xl">Live Stream</h4>
            <div>
              {isLoading ? (
                <>
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-8 w-full" />
                </>
              ) : (
                <>
                  <p className="text-lcms-gold">
                    {new Date(
                      latestVideo?.publishedAt || ""
                    ).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-2xl font-serif text-white">
                    {latestVideo?.title}
                  </h3>
                </>
              )}
            </div>
            {isLoading ? (
              <Skeleton className="h-14 w-48" />
            ) : (
              <Button
                asChild
                variant="default"
                className="self-start bg-white text-stone-700 hover:bg-stone-700/90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                size="sm"
              >
                <Link href="/watch">View Previous Streams</Link>
              </Button>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Stream;
