type GtagEventParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function hasMeasurementId(id: unknown): id is string {
  return typeof id === "string" && /^G-[A-Z0-9]+$/i.test(id.trim());
}

let initialized = false;

export function initAnalytics(): void {
  if (initialized) return;

  const measurementId = (import.meta as any).env?.VITE_GA4_MEASUREMENT_ID as string | undefined;
  if (!hasMeasurementId(measurementId)) return;

  // Inject gtag script only when configured (avoids shipping a broken placeholder).
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    // SPA: we'll also send manual page_view on view changes.
    send_page_view: false,
  });

  initialized = true;
}

export function trackPageView(pageTitle: string, pagePath: string): void {
  const measurementId = (import.meta as any).env?.VITE_GA4_MEASUREMENT_ID as string | undefined;
  if (!hasMeasurementId(measurementId) || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

export function trackEvent(eventName: string, params?: GtagEventParams): void {
  const measurementId = (import.meta as any).env?.VITE_GA4_MEASUREMENT_ID as string | undefined;
  if (!hasMeasurementId(measurementId) || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params || {});
}

export function trackClickToCall(source: string): void {
  trackEvent("click_to_call", { source, device: isMobile() ? "mobile" : "desktop" });
}

export function trackOutboundMapClick(source: string): void {
  trackEvent("click_directions", { source, device: isMobile() ? "mobile" : "desktop" });
}

export function trackContactClick(kind: "email" | "contact", source: string): void {
  trackEvent("contact_click", { kind, source, device: isMobile() ? "mobile" : "desktop" });
}

function isMobile(): boolean {
  return typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(max-width: 768px)").matches
    : false;
}

