import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

import heroBg from "@/assets/hero-dubai-skyline.jpg";
import resumeAsset from "@/assets/abdeali-gangardiwala-cv.pdf.asset.json";

import portrait480 from "@/assets/portrait-480.webp";
import portrait768 from "@/assets/portrait-768.webp";
import portrait1024 from "@/assets/portrait-1024.webp";

const PORTRAIT_URL = portrait768;
const PORTRAIT_SRCSET = `${portrait480} 480w, ${portrait768} 768w, ${portrait1024} 1024w`;
const PORTRAIT_SIZES = "(max-width: 768px) 60vw, 400px";


const SITE_URL = "https://cmaabdealixwork.lovable.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdeali Gangardiwala — Financial Reporting & FP&A Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Abdeali Gangardiwala, CMA — FP&A analyst specializing in multi-entity financial reporting, dashboards, forecasting and month-end close.",
      },
      {
        property: "og:title",
        content: "Abdeali Gangardiwala — Financial Reporting & FP&A Analyst",
      },
      {
        property: "og:description",
        content:
          "CMA professional transforming complex multi-entity financial data into strategic decision-ready intelligence.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preload", as: "image", href: PORTRAIT_URL, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abdeali Gangardiwala",
          jobTitle: "Financial Reporting & FP&A Analyst",
          email: "mailto:abdealixmain07@gmail.com",
          telephone: "+971553037751",
          url: SITE_URL + "/",
          sameAs: ["https://www.linkedin.com/in/abdeali-main/"],
          address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
          knowsAbout: [
            "Financial Planning & Analysis",
            "Financial Reporting",
            "Power BI",
            "Budgeting and Forecasting",
            "Month-end Close",
          ],
        }),
      },
    ],
  }),
});

const LINKEDIN_URL = "https://www.linkedin.com/in/abdeali-main/";
const RESUME_URL = resumeAsset.url;

const TOOLS = [
  "Power BI",
  "QuickBooks",
  "Xero",
  "SAP",
  "Zoho Books",
  "Tally ERP",
  "Dynamics 365",
  "Teams",
  "Excel",
  "PowerPoint",
];

type Project = {
  icon: string;
  tag: string;
  title: string;
  problem: string;
  built: string;
  impact: string;
  chips: string[];
  image: string;
};

const PROJECTS: Project[] = [
  {
    icon: "dashboard",
    tag: "Advanced Excel · Power Query",
    title: "Real-Time FP&A Dashboard for Multi-Entity Decision Making",
    problem:
      "Leadership lacked real-time visibility into performance across multiple entities, leading to delayed reactive decision making.",
    built:
      "Integrated Advanced Excel dashboard powered by Power Query. Automated KPI tracking system for real-time updates.",
    impact:
      "Reduced reporting time by 70%. Enabled faster funding and cost optimization decisions.",
    chips: ["Advanced Excel", "Power Query"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1UE7AWG5q3a_Otjg2N5GpfS_Bi7ChRaBKTX8Q7-BPaJolDBsP2-sJ-qjAWCoowW1Y2nVHozBlEXg6URR_lZbYrdqTRAu6GbKM6JO4CSvQqGRoyxwjzv3IEhQRt-pi0RavOZzzADk4vVKjceR3_Nx4cPHTQhp-wd4LDrsykIQPNNd9iqKKrFiPlmTWe8WhWMSSgKyRuJ_glWSJXV-6ZcDjtbyRx2fO7DPRthwXjF_Tx37M3VKBBgu7DpATYkRr-5Vr1ZWbft4UnASx",
  },
  {
    icon: "query_stats",
    tag: "QuickBooks · Tally · Xero",
    title: "Bookkeeping Ledger Cleanup & Accuracy Restoration",
    problem:
      "Financial records contained thousands of misclassified transactions, making reporting unreliable.",
    built:
      "Redesigned chart of accounts and reporting structure, restoring financial clarity for stakeholders.",
    impact: "Restored financial clarity for stakeholders. Accurate reporting enabled.",
    chips: ["QuickBooks", "Tally", "Xero"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDikdCJZxyZGw2MBCGaYncEcUO88dNg2mH9CNDd5uDhvOKM7EJQD45b86URr0x7CiCwO3drCpyZwGwu0dayIYzI3AS_O6CUK_PEnpV5aM25TF_9ZD3ioP-oBlizyjOZQ6qmj_NzIUseh4Pf1RWDuZZ4tOe1C6ooEUy5VBWRtuSaqzhh0lR65HTlF0QIDTtMIGzc_GStM3791FQg5t2LVyzcWuoZgRM0SHIriNx8c8UJjoY2bSbmMtumhfFzJaYIVS77fUENT2ERyJwh",
  },
  {
    icon: "account_balance_wallet",
    tag: "Power BI · Advanced Excel · Power Query",
    title: "KPI Dashboard & Performance Tracking System",
    problem:
      "Lack of structured KPI tracking limited visibility into operational performance.",
    built:
      "Built KPI dashboard using Power BI. Integrated multiple data sources into a unified model. 15+ KPIs tracked across revenue, cost, and operational metrics.",
    impact:
      "Improved visibility into performance metrics. Enabled data-driven management decisions.",
    chips: ["Power BI", "Advanced Excel", "Power Query"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkhjJbr8he_jxlAY4GEx4fHhE-OUgPCfUswifgukG54WmxRATw7HRyBicT9TCvGzPaM7vu_14ydeNZH7vKJIlvZeEhi6jREPVmSfyCgqk6lT2jgF9Ly1WStz8_aP0QQmUm4cgPn3A2UOJNSs37qq5CZyuh6xBcgCcI1BqUs-wo9_A0I_tM3e7fwQ3GIwrT0h4uQfSwH1q2E3uwuMEFI4atZ4GKjY4_QljajOeYou6EamOQG2G6CjXgLIElJkq42wwUE4dnbI9DY0rk",
  },
  {
    icon: "monitoring",
    tag: "Budgeting · Investor Reporting · Forecasting",
    title: "Month-on-Month & Year-on-Year Variance Analysis",
    problem:
      "Investors required deep visibility into performance fluctuations and future cash flow predictability across various market scenarios.",
    built:
      "Developed a dynamic variance analysis framework with scenario modeling (Upside/Base/Downside). Integrated automated budgeting and forecasting linked to real-time MoM and YoY cost and expense analysis.",
    impact:
      "Enabled proactive investor reporting and strategic capital allocation through precise future cash flow predictions.",
    chips: ["Budgeting", "Investor Reporting", "Forecasting"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxoGL1BhCquGVY9VeRTcteYQykGAmGWGPAKYBZ03dTR36JNu4rTBAbMbBMW55LZUuy8MtuDuW_NpiWn5TIb4N6iHd0Ye7L4DsKPbJLll_fW6LF439j2yl7rXPY8Vy0ZOkzEgieSxZcva03wSj__bxBWKGfxPq3ZcdkYEZp_ABDtvg37W6rE9CNPat0BIZAvH0-eAHB8nmX2bGf-UqdBrR9_8A4ikQm5bpD0AXthwdvo-xTcUeetWAdkUkK9CX3H2ux8y-ye-mIrYnU",
  },
];

type TimelineItem = {
  date: string;
  title: string;
  org: string;
  icon: string;
  bullets?: string[];
  body?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    date: "July 2025 – July 2026",
    title: "Financial Reporting Analyst — FP&A",
    org: "Ascendancy Consultants & Advisors Pvt. Ltd.",
    icon: "trending_up",
    bullets: [
      "Managing end-to-end month-end close for 8+ multi-entity international clients (US, UK, Israel, and Canada) using QuickBooks, SAGE, and Xero.",
      "Prepared monthly cash flow statements and monitored cash runway, flagging liquidity risks to ensure operational funding.",
      "Led ERP migration for trust clients with 5+ years of financial history, ensuring 100% accurate bank reconciliations.",
      "Collaborated across SaaS, Gaming, and Trust accounting sectors, delivering tailored financial reporting and insights.",
    ],
  },
  {
    date: "2021 – 2026",
    title: "Cost and Management Accountant (CMA)",
    org: "Institute of Cost Accountants of India",
    icon: "workspace_premium",
    body: "Specialized in Cost Management, Statutory & Internal Audits, Direct & Indirect Taxation, Financial Reporting (IND AS & IFRS), and Strategic Finance & Company Valuation.",
  },
  {
    date: "Jan 2024 – April 2025",
    title: "Article Assistant",
    org: "S.S. Puranik & Associates",
    icon: "fact_check",
    bullets: [
      "Executed 30+ statutory and tax audits, including preparation and filing of Forms 3CA/3CB and validation of statutory dues (GST, TDS).",
      "Analyzed detailed cost records for manufacturing and power sector clients, covering raw materials, labor, and utilities for margin analysis.",
      "Managed GST and TDS compliance for 70+ clients with 100% on-time filings and zero penalties.",
      "Gained cross-industry exposure across chemicals, power utilities, transmission, and banking sectors.",
    ],
  },
  {
    date: "2021 – 2024",
    title: "B.Com Graduate",
    org: "Gujarat University",
    icon: "school",
    body: "Completed undergraduate degree with a focus on Accounting, Finance, and Business Management.",
  },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function TopNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between">
        <a href="#about" className="flex min-w-0 items-center gap-2 font-display text-lg">
          <span className="text-primary shrink-0">AG.</span>
          <span className="text-on-surface-variant hidden sm:inline truncate text-sm tracking-widest uppercase">
            Abdeali Gangardiwala
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-on-surface-variant">
          <a href="#work" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <a
          href={RESUME_URL}
          download
          className="shrink-0 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:scale-[1.02] transition-transform"
        >
          <Icon name="download" className="text-base" />
          Resume
        </a>
      </div>
    </header>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glass-panel overflow-hidden rounded-xl border transition-all duration-500 ${
        open ? "gold-glow border-primary/30" : "border-white/5 hover:border-primary/30"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full p-5 sm:p-6 md:p-8 flex items-center justify-between gap-4 md:gap-6 text-left"
      >
        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-surface-container-high flex items-center justify-center rounded-md">
            <Icon name={project.icon} className="text-2xl md:text-3xl text-primary" />
          </div>
          <div className="min-w-0">
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
              {project.tag}
            </span>
            <h3 className="text-base sm:text-lg md:text-2xl mt-1 font-display font-semibold text-on-surface leading-snug">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-on-surface-variant uppercase hidden md:block tracking-widest">
            {open ? "Close" : "Open"}
          </span>
          <Icon
            name="expand_more"
            className={`transition-transform duration-300 text-primary ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5">
            <div className="p-5 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-primary text-xs uppercase tracking-wider mb-1 font-semibold">
                    Business Problem
                  </p>
                  <p className="text-on-surface-variant text-sm md:text-base">{project.problem}</p>
                </div>
                <div>
                  <p className="text-primary text-xs uppercase tracking-wider mb-1 font-semibold">
                    What I Built
                  </p>
                  <p className="text-on-surface-variant text-sm md:text-base">{project.built}</p>
                </div>
                <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r">
                  <p className="text-primary font-bold text-xs uppercase tracking-wider">Impact</p>
                  <p className="text-on-surface mt-1 text-sm md:text-base">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.chips.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 bg-surface-container-high text-xs text-on-surface-variant border border-white/5 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded overflow-hidden border border-white/10 h-56 sm:h-64 md:h-full md:min-h-64">
                <img
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-contain bg-surface-container-lowest"
                  src={project.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="glass-panel rounded-xl border border-white/5 p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-15px_rgba(242,202,80,0.35)]">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 shrink-0 rounded-md bg-surface-container-high flex items-center justify-center">
          <Icon name={item.icon} className="text-xl text-primary" />
        </div>
        <div className="min-w-0 text-left">
          <p className="md:hidden text-on-surface-variant text-[11px] tracking-widest uppercase">
            {item.date}
          </p>
          <h3 className="font-display text-lg md:text-2xl text-on-surface leading-snug">
            {item.title}
          </h3>
          <p className="text-primary text-[11px] md:text-xs uppercase tracking-wider mt-1 font-semibold">
            {item.org}
          </p>
        </div>
      </div>
      {item.bullets ? (
        <ul className="text-on-surface-variant text-sm mt-4 space-y-2 list-disc pl-5 text-left">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : (
        <p className="text-on-surface-variant text-sm mt-4 text-left">{item.body}</p>
      )}
    </div>
  );
}

const MAX_PORTRAIT_RETRIES = 3;

function Portrait() {
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const imgRef = useRef<HTMLImageElement | null>(null);

  const src = attempt === 0 ? PORTRAIT_URL : `${PORTRAIT_URL}?retry=${attempt}`;

  // Images cached or served during SSR can finish before React attaches onLoad.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setStatus("loaded");
  }, [attempt]);

  const handleError = () => {
    if (attempt < MAX_PORTRAIT_RETRIES) {
      const next = attempt + 1;
      setTimeout(() => {
        setStatus("loading");
        setAttempt(next);
      }, 400 * 2 ** attempt);
    } else {
      setStatus("failed");
    }
  };

  return (
    <div className="relative w-full h-full">
      {status !== "loaded" && (
        <div
          role="img"
          aria-label="Abdeali Gangardiwala — portrait"
          className={`absolute inset-0 z-10 flex items-center justify-center bg-surface-container-high ${
            status === "loading" ? "animate-pulse" : ""
          }`}
        >
          <span className="font-display text-5xl text-primary/60">AG</span>
        </div>
      )}
      {status !== "failed" && (
        <img
          key={attempt}
          ref={imgRef}
          alt="Abdeali Gangardiwala, CMA — Financial Reporting and FP&A Analyst, portrait photo"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 group-active:grayscale-0 [@media(hover:none)]:grayscale-0 transition-[filter,transform] duration-700 ease-out will-change-[filter] motion-reduce:transition-none"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable={false}
          onLoad={() => setStatus("loaded")}
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



function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopNav />

      {/* Hero */}
      <section
        id="about"
        className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Mobile: lighter overlay so the skyline stays visible; desktop: current cinematic darkening */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background/95 z-10 md:from-background/50 md:via-background/85 md:to-background" />
          <img
            alt="Dubai night skyline"
            className="w-full h-full object-cover object-bottom md:object-center opacity-100 md:opacity-55 scale-105"
            src={heroBg}
            width={1920}
            height={1088}
          />
        </div>
        <div className="relative z-20 px-6 md:px-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 glass-panel-hero md:glass-panel p-6 md:p-12 rounded-xl rim-light gold-glow space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-primary/20 text-primary text-xs tracking-widest uppercase rounded">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Qualified Member (CMA)
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-primary/20 text-primary text-xs tracking-widest uppercase rounded">
                <Icon name="location_on" className="text-sm" />
                Dubai, UAE
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary leading-[1.05] font-semibold text-shadow">
              Financial Reporting &<br />
              FP&amp;A Analyst.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl text-shadow">
              CMA professional with 2+ years of experience specializing in transforming complex
              multi-entity financial data into strategic decision-ready intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                className="px-8 py-4 bg-primary text-on-primary font-bold transition-all hover:scale-[1.02] active:scale-[0.98] rounded"
              >
                Explore Case Studies
              </a>
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-primary/50 text-on-surface transition-all rounded hover:bg-white/5"
              >
                <Icon name="download" className="text-xl text-primary" />
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-full blur opacity-30 group-hover:opacity-60 group-focus-within:opacity-60 transition duration-1000" />
              <div
                tabIndex={0}
                role="img"
                aria-label="Portrait of Abdeali Gangardiwala, CMA — Financial Reporting and FP&A Analyst based in Dubai"
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-surface-container overflow-hidden rounded-full border-4 border-primary/40 glass-panel outline-none focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
              >
                <Portrait />
              </div>

              <div className="absolute -bottom-4 -right-2 md:-right-4 bg-surface-container p-4 border border-primary/30 shadow-2xl glass-panel text-center min-w-[130px] rounded-xl">
                <p className="text-xs text-primary mb-1 uppercase tracking-wider font-semibold">
                  Role Status
                </p>
                <p className="font-bold text-on-surface">Available Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools strip */}
      <section aria-label="Tools and software" className="bg-primary border-y border-white/5">
        <div className="hidden sm:block w-full py-6 overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll gap-10">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="text-xs uppercase tracking-[0.25em] text-on-primary font-bold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="sm:hidden px-4 py-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-on-primary/70 font-bold mb-3 text-center">
            Tools & Platforms
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TOOLS.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full bg-on-primary/10 border border-on-primary/20 text-[11px] uppercase tracking-widest text-on-primary font-bold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-20 md:py-24 px-5 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary text-xs tracking-[0.3em] uppercase block mb-2 font-semibold">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-on-surface font-semibold">
              Strategic Financial Projects
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-xs md:text-right">
            Execution excellence across multi-billion dollar data landscapes.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-24 bg-surface-container-lowest">
        <div className="px-5 sm:px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase block mb-2 font-semibold">
              Career Narrative
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-on-surface font-semibold">
              Professional Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 relative before:absolute before:left-[15px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-primary/20">
            {TIMELINE.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className="relative flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-8 group"
                >
                  {left ? (
                    <>
                      <div className="hidden md:block md:w-1/2 text-right pr-12">
                        <p className="text-on-surface-variant text-xs tracking-widest uppercase group-hover:text-primary transition-colors">
                          {item.date}
                        </p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 bg-surface-container-lowest border border-primary/40 rounded-full flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(242,202,80,0.6)]" />
                      </div>
                      <div className="pl-10 md:pl-12 md:w-1/2">
                        <TimelineCard item={item} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pl-10 md:pl-0 md:pr-12 md:w-1/2">
                        <TimelineCard item={item} />
                      </div>
                      <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 bg-surface-container-lowest border border-primary/40 rounded-full flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(242,202,80,0.6)]" />
                      </div>
                      <div className="hidden md:block md:w-1/2 pl-12">
                        <p className="text-on-surface-variant text-xs tracking-widest uppercase group-hover:text-primary transition-colors">
                          {item.date}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 md:py-24 px-5 sm:px-6 md:px-10 max-w-7xl mx-auto text-center"
      >
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 md:p-12 rim-light gold-glow rounded-xl">
          <h2 className="font-display text-2xl md:text-4xl text-primary mb-6 font-semibold leading-tight">
            Looking for opportunities in Finance to contribute to growth and add value to the team.
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">Feel free to contact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
            <div className="md:col-span-2 flex flex-col items-center justify-center gap-3 p-6 md:p-8 border border-white/10 text-on-surface rounded-xl bg-surface-container-low">
              <Icon name="call" className="text-3xl text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary opacity-70">
                Direct Line
              </span>
              <a
                href="tel:+971553037751"
                aria-label="Call Abdeali on +971 55 303 7751"
                className="font-display text-xl sm:text-2xl md:text-3xl whitespace-nowrap tabular-nums hover:text-primary transition-colors"
                dir="ltr"
              >
                +971 55 303 7751
              </a>
              <a
                href="tel:+971553037751"
                aria-label="Tap to call Abdeali now"
                className="mt-1 inline-flex w-full sm:w-auto min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icon name="phone_in_talk" className="text-xl" />
                Tap to Call
              </a>
            </div>


            <a
              href="mailto:abdealixmain07@gmail.com"
              className="flex min-w-0 flex-col items-center justify-center gap-2 p-6 md:p-8 bg-primary text-on-primary transition-transform hover:scale-[1.02] rounded-xl"
            >
              <Icon name="mail" className="text-3xl mb-2" />
              <span className="text-xs uppercase tracking-widest opacity-80">Email Address</span>
              <span className="w-full max-w-full font-bold text-sm sm:text-base md:text-lg break-words leading-snug">
                abdealixmain07@gmail.com
              </span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-6 md:p-8 border border-white/10 hover:border-primary/50 text-on-surface transition-all rounded-xl bg-surface-container-low hover:bg-white/5"
            >
              <Icon name="link" className="text-3xl mb-2 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary opacity-70">
                Professional Network
              </span>
              <span className="font-bold text-base md:text-lg">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-4 text-center text-[11px] sm:text-xs text-on-surface-variant tracking-widest uppercase">
        <p className="mb-2">
          <a
            href="mailto:abdealixmain07@gmail.com"
            className="hover:text-primary transition-colors"
          >
            abdealixmain07@gmail.com
          </a>
        </p>
        © {new Date().getFullYear()} Abdeali Gangardiwala · CMA
      </footer>
    </main>
  );
}
