"use client";

import React, { useEffect, useState } from "react";
import { YouTubeVideo } from "@/types/video";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { Play, Calendar, ArrowRight } from "lucide-react";

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
    <div className="py-24 bg-lcms-navy relative overflow-hidden mb-24">
      {/* Background Image */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-lcms-navy/90" />

      <PageContainer>
        <div className="relative z-10">
          {/* Section Title */}
          <SectionTitle
            tag="Live Stream"
            tagIcon={<Play className="w-4 h-4" />}
            title="Join Us Online"
            subtitle="Can't make it to church? Join us for our live stream services and stay connected with our community from anywhere."
            titleColor="text-white"
            subtitleColor="text-gray-300"
          />

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="group relative">
              {/* Decorative background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-lcms-gold to-yellow-500 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300 opacity-20"></div>

              {/* Video container */}
              <div className="relative bg-white rounded-2xl shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  {isLoading ? (
                    <Skeleton className="w-full h-full rounded-2xl" />
                  ) : (
                    <div className="w-full h-full rounded-2xl overflow-hidden">
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
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {isLoading ? (
                <>
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-20 w-full" />
                </>
              ) : (
                <>
                  {/* Date */}
                  <div className="flex items-center gap-3 text-lcms-gold">
                    <Calendar className="w-5 h-5" />
                    <p className="text-lg font-medium">
                      {new Date(
                        latestVideo?.publishedAt || ""
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {latestVideo?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Join us for this special service as we gather together in
                    worship, prayer, and the study of God&apos;s Word. All are
                    welcome to participate in our online community.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      className="bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-medium px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link
                        href={
                          `https://www.youtube.com/watch?v=${latestVideo?.id}` as any
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Watch Live
                        <Play className="w-4 h-4" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-white text-stone-800 hover:bg-white hover:text-stone-800 font-medium px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Link
                        href="/sermons"
                        className="inline-flex items-center gap-2"
                      >
                        Previous Streams
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Stream;
