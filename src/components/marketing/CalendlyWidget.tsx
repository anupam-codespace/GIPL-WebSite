"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

export default function CalendlyWidget() {
  useEffect(() => {
    // 1. Ensure Calendly stylesheet is injected
    const cssId = "calendly-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // 2. Initialize badge widget once Calendly is loaded
    const initWidget = () => {
      if (typeof window === "undefined" || !window.Calendly) return;
      
      // Ensure only one badge widget is present
      if (!document.querySelector(".calendly-badge-widget")) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/globizhub-support",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    // 3. Ensure Calendly script is injected
    const scriptId = "calendly-widget-js";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      document.body.appendChild(script);
    } else {
      // Script was already loaded, initialize widget directly
      initWidget();
    }
  }, []);

  return null;
}
