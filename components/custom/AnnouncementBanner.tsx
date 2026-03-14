"use client";

import { useEffect, useRef } from "react";
import { CloudRain } from "lucide-react";
import { useHeaderHeight } from "@/context/HeaderContext";

export default function AnnouncementBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { setBannerHeight } = useHeaderHeight();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateHeight = () => setBannerHeight(el.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [setBannerHeight]);

  return (
    <div
      ref={ref}
      className="bg-amber-50 border-b border-amber-200 px-4 py-3 text-center text-sm text-amber-900 flex-shrink-0"
      role="alert"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 min-w-0">
        <CloudRain className="h-4 w-4 flex-shrink-0 text-amber-600" aria-hidden />
        <span className="min-w-0">
          <strong>Weather Announcement:</strong> Bible Study & Sunday School
          are cancelled on 3/15/26 due to weather. Stay tuned for an
          announcement about the Divine Service.
        </span>
      </div>
    </div>
  );
}
