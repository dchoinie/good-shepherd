"use client";

import { CloudRain } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div
      className="bg-amber-50 border-b border-amber-200 px-4 py-3 text-center text-sm text-amber-900"
      role="alert"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <CloudRain className="h-4 w-4 flex-shrink-0 text-amber-600" aria-hidden />
        <span>
          <strong>Weather Announcement:</strong> Bible Study & Sunday School
          are cancelled on 3/15/26 due to weather. Stay tuned for an
          announcement about the Divine Service.
        </span>
      </div>
    </div>
  );
}
