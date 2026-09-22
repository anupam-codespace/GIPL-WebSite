"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track if user has consented
    const consent = localStorage.getItem("ghpl_cookie_consent");
    if (consent === "essential") {
      return; // Respect user privacy preference
    }

    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;
    // Log pageview telemetry for internal performance analytics
    if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
      // Future Google Analytics (gtag) or Plausible dispatch
      if (typeof (window as unknown as { gtag: (...args: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "page_view", {
          page_path: url,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}
