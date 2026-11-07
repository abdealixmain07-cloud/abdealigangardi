import { useState, useRef, useEffect } from "react";
import hero768 from "@/assets/hero-768.webp";
import hero1280 from "@/assets/hero-1280.webp";
import hero1920 from "@/assets/hero-1920.webp";
import heroPreview from "@/assets/hero-preview.webp";
import portrait480 from "@/assets/portrait-480.webp";
import portrait768 from "@/assets/portrait-768.webp";
import portrait1024 from "@/assets/portrait-1024.webp";
import portraitPreview from "@/assets/portrait-preview.webp";
const HERO_URL = hero1280;
const HERO_SRCSET = `${hero768} 768w, ${hero1280} 1280w, ${hero1920} 1920w`;
const HERO_SIZES = "100vw";
const PORTRAIT_URL = portrait768;
const PORTRAIT_SRCSET = `${portrait480} 480w, ${portrait768} 768w, ${portrait1024} 1024w`;
const PORTRAIT_SIZES = "(max-width: 768px) 80vw, 400px";
const MAX_PORTRAIT_RETRIES = 3;

function logPortrait(event: string, detail: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const started = (window as unknown as { __portraitStart?: number }).__portraitStart;
  const elapsed = started === undefined ? null : Math.round(performance.now() - started);
  // eslint-disable-next-line no-console
  console.info(`[portrait] ${event}`, { elapsedMs: elapsed, ...detail });
}

export function Portrait() {
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const imgRef = useRef<HTMLImageElement | null>(null);

  const src = attempt === 0 ? PORTRAIT_URL : `${PORTRAIT_URL}?retry=${attempt}`;

  // Images cached or served during SSR can finish before React attaches onLoad.
  useEffect(() => {
    const w = window as unknown as { __portraitStart?: number };
    if (w.__portraitStart === undefined) w.__portraitStart = performance.now();
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setStatus("loaded");
      logPortrait("loaded", { source: "cache-or-ssr", attempt });
      return;
    }
    // Runtime watchdog: if the image never reports back after hydration
    // (missed event, stalled decode), poll then force a re-render/retry.
    let ticks = 0;
    const id = window.setInterval(() => {
      ticks += 1;
      const el = imgRef.current;
      if (el?.complete && el.naturalWidth > 0) {
        setStatus("loaded");
        logPortrait("loaded", { source: "watchdog", attempt });
        window.clearInterval(id);
      } else if (ticks >= 6) {
        window.clearInterval(id);
        logPortrait("watchdog-timeout", { attempt });
        if (attempt < MAX_PORTRAIT_RETRIES) {
          setAttempt((a) => a + 1);
        } else {
          logPortrait("fallback-initials", { attempt });
          setStatus("failed");
        }
      }
    }, 500);
    return () => window.clearInterval(id);
  }, [attempt]);

  const handleError = () => {
    if (attempt < MAX_PORTRAIT_RETRIES) {
      const next = attempt + 1;
      logPortrait("error-retry", { attempt, nextAttempt: next });
      setTimeout(() => {
        setStatus("loading");
        setAttempt(next);
      }, 400 * 2 ** attempt);
    } else {
      logPortrait("fallback-initials", { attempt });
      setStatus("failed");
    }
  };

  return (
    <div className="relative w-full h-full bg-surface-container-high">
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-10 flex items-center justify-center bg-surface-container-high transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          status === "loaded" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {status === "loading" ? (
          <img src={portraitPreview} alt="" width={32} height={32} className="w-full h-full object-cover" />
        ) : (
          <span className="font-display text-5xl text-primary/60">AG</span>
        )}
      </div>
      <span role="status" aria-live="polite" className="sr-only">
        {status === "loading"
          ? "Portrait of Abdeali Gangardiwala is loading"
          : status === "failed"
            ? "Portrait image unavailable; showing initials A G instead"
            : "Portrait of Abdeali Gangardiwala loaded"}
      </span>
      {status !== "failed" && (
        <img
          key={attempt}
          ref={imgRef}
          alt="Abdeali Gangardiwala, CMA — Financial Reporting and Management Accountant based in Dubai, wearing glasses and a dark suit"
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable={false}
          onLoad={() => {
            setStatus("loaded");
            logPortrait("loaded", { source: "onload", attempt });
          }}
          onError={handleError}
          src={src}
          srcSet={attempt === 0 ? PORTRAIT_SRCSET : undefined}
          sizes={PORTRAIT_SIZES}
          width={768}
          height={768}
        />
      )}
    </div>
  );
}

export function HeroSkyline() {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <img
        src={heroPreview}
        alt=""
        aria-hidden="true"
        width={48}
        height={27}
        className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center scale-105"
      />
      <img
        ref={imageRef}
        alt="Dubai skyline at night with illuminated high-rise towers"
        className={`absolute inset-0 w-full h-full object-cover object-bottom md:object-center scale-105 transition-opacity duration-500 ease-out motion-reduce:transition-none ${loaded ? "opacity-100" : "opacity-0"}`}
        src={HERO_URL}
        srcSet={HERO_SRCSET}
        sizes={HERO_SIZES}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setLoaded(true)}
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 skyline-overlay z-10" />
    </div>
  );
}





