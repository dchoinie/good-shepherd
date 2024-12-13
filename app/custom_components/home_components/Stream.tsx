"use client";

import React, { useEffect, useState } from "react";
import { YouTubeVideo } from "@/app/types/video";
import PageContainer from "../PageContainer";
import SectionTitle from "../SectionTitle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Stream = (): JSX.Element => {
  const [latestVideo, setLatestVideo] = useState<YouTubeVideo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;

  useEffect(() => {
    const fetchLatestVideo = async () => {
      if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
        setError("Missing API key or Channel ID");
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

        const searchData = await searchResponse.json();

        if (!searchData.items || searchData.items.length === 0) {
          setError("No upcoming livestreams scheduled");
          return;
        }

        // Get all video IDs
        const videoIds = searchData.items.map(
          (item: string) => item.id.videoId
        );

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

        const detailsData = await detailsResponse.json();

        // Find the video with the closest future date
        const now = new Date().getTime();
        const nextStream = detailsData.items
          .filter((video: any) => {
            const streamTime = new Date(
              video.liveStreamingDetails.scheduledStartTime
            ).getTime();
            return streamTime > now;
          })
          .sort((a: any, b: any) => {
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
      }
    };

    fetchLatestVideo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!latestVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-24 my-24 shadow-inner">
      <PageContainer>
        <SectionTitle
          title="Live Stream"
          tag="Watch"
          subtitle="Watch our upcoming live stream from our YouTube channel."
        />
        <div className="flex gap-12">
          <div className="flex w-3/5">
            <AspectRatio ratio={16 / 9}>
              <div
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${latestVideo.thumbnail})` }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${latestVideo.id}?modestbranding=1&rel=0&showinfo=0&autoplay=0&origin=${window.location.origin}`}
                  title={latestVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </AspectRatio>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-yellow-500">
              {new Date(latestVideo.publishedAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h3 className="text-2xl font-bold">{latestVideo.title}</h3>
            <Button
              asChild
              variant="default"
              className="self-start mt-3"
              size="lg"
            >
              <Link href="/watch">View Previous Streams</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Stream;
