import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdeali Gangardiwala — Financial Reporting & FP&A Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Abdeali Gangardiwala, CMA — FP&A analyst specializing in multi-entity financial reporting, dashboards, and forecasting.",
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
    ],
  }),
});

const HERO_BG =
  "https://lh3.googleusercontent.com/aida/AP1WRLt9sYNptn7c1ALyxh03Bzt-nfmqY1frRXSgJkNoM7FOsx0olqMq6nMMR6bM318ZqtnJ6u38Abg99u2411Ml8QcHQv0JUs_6ZP96KDKh93OrcCOFTpGj_rDlUFkz8GHyA-xfTn_dfnMtV7rTCjjrtv0D537AlWt_Nf_h2_snnqBX86Xk3KDpOWpHOzgTv-IjH-67AvlR_GL39-piK0yeS32jVY2lx5m16fGXSRKM9mgVDM0udT5LQgbKvIFT";
const PORTRAIT =
  "https://lh3.googleusercontent.com/aida/AP1WRLvU0HTXIRj_ghZiEevlhsdbEZBv_le8Da3x8IJAsAImufpP1IbEyPUaaRia1CvyioTH9O5xGqGohR4IsxeXH6Uik_Qe1qP1arNmL9cNk0qliMeRlz7qxt_XHAZApU70cKlYuBVikGvbI6waPDMrx1anad8aS8eAkb5OGjwDpZ46yfXa_Pit336FgflIN7WKTEQtogiQLQSr6PAQaChzCJaQFErM16fcxqOXI1iCvXrZkjfW_uLMlG52XC9R";

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
    tag: "Advanced Excel · Power Query · SQL",
    title: "Real-Time FP&A Dashboard for Multi-Entity Decision Making",
    problem:
      "Leadership lacked real-time visibility into performance across multiple entities, leading to delayed reactive decision making.",
    built:
      "Integrated Advanced Excel dashboard powered by Power Query. Automated KPI tracking system for real-time updates.",
    impact:
      "Reduced reporting time by 70%. Enabled faster funding and cost optimization decisions.",
    chips: ["Advanced Excel", "Power Query", "SQL"],
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

const TIMELINE = [
  {
    date: "July 2025 – July 2026",
    title: "Financial Reporting Analyst — FP&A",
    org: "Ascendancy Consultants & Advisors Pvt. Ltd.",
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
    body: "Specialized in Cost Management, Statutory & Internal Audits, Direct & Indirect Taxation, Financial Reporting (IND AS & IFRS), and Strategic Finance & Company Valuation.",
  },
  {
    date: "Jan 2024 – April 2025",
    title: "Article Assistant",
    org: "S.S. Puranik & Associates",
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
    body: "Completed undergraduate degree with a focus on Accounting, Finance, and Business Management.",
  },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function TopNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-2 font-display text-lg">
          <span className="text-primary">AG.</span>
          <span className="text-on-surface-variant hidden sm:inline text-sm tracking-widest uppercase">
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
          href="#contact"
          className="px-4 py-2 rounded-md bg-primary text-on-primary text-sm font-semibold hover:scale-[1.02] transition-transform"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

function ProjectCard({ project, defaultOpen }: { project: Project; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`glass-panel overflow-hidden rounded-xl border border-white/5 transition-all duration-500 ${
        open ? "gold-glow border-primary/30" : "hover:border-primary/30"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full p-6 md:p-8 flex items-center justify-between gap-6 text-left"
      >
        <div className="flex items-center gap-6 min-w-0">
          <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-surface-container-high flex items-center justify-center rounded-md">
            <Icon name={project.icon} className="text-3xl text-primary" />
          </div>
          <div className="min-w-0">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold">
              {project.tag}
            </span>
            <h3 className="text-lg md:text-2xl mt-1 font-display font-semibold text-on-surface leading-snug">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs text-on-surface-variant uppercase hidden md:block tracking-widest">
            {open ? "Close" : "Open"}
          </span>
          <Icon
            name="expand_more"
            className={`transition-transform duration-300 text-primary ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <div className="border-t border-white/5">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <p className="text-primary text-xs uppercase tracking-wider mb-1 font-semibold">
                  Business Problem
                </p>
                <p className="text-on-surface-variant">{project.problem}</p>
              </div>
              <div>
                <p className="text-primary text-xs uppercase tracking-wider mb-1 font-semibold">
                  What I Built
                </p>
                <p className="text-on-surface-variant">{project.built}</p>
              </div>
              <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r">
                <p className="text-primary font-bold text-sm uppercase tracking-wider">Impact</p>
                <p className="text-on-surface mt-1">{project.impact}</p>
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
            <div className="rounded overflow-hidden border border-white/10 h-64 md:h-full min-h-64">
              <img
                alt={project.title}
                className="w-full h-full object-contain bg-surface-container-lowest"
                src={project.image}
              />
            </div>
          </div>
        </div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background z-10" />
          <img
            alt="Dubai night skyline"
            className="w-full h-full object-cover opacity-55 scale-105"
            src={HERO_BG}
          />
        </div>
        <div className="relative z-20 px-6 md:px-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 glass-panel p-6 md:p-12 rounded-xl rim-light gold-glow space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-primary/20 text-primary text-xs tracking-widest uppercase rounded">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Qualified Member (CMA)
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary leading-[1.05] font-semibold">
              Financial Reporting &<br />
              FP&amp;A Analyst.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl">
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
                href="#contact"
                className="px-8 py-4 border border-white/10 hover:border-primary/50 text-on-surface transition-all rounded hover:bg-white/5"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 bg-surface-container overflow-hidden rounded-full border-4 border-primary/40 glass-panel">
                <img
                  alt="Abdeali Gangardiwala"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={PORTRAIT}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-surface-container p-4 border border-primary/30 shadow-2xl glass-panel text-center min-w-[140px] rounded-xl">
                <p className="text-xs text-primary mb-1 uppercase tracking-wider font-semibold">
                  Role Status
                </p>
                <p className="font-bold text-white">Available Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools strip */}
      <div className="w-full py-6 border-y border-white/5 overflow-hidden whitespace-nowrap bg-primary">
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

      {/* Projects */}
      <section id="work" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
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
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-surface-container-lowest">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase block mb-2 font-semibold">
              Career Narrative
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-on-surface font-semibold">
              Professional Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-[15px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-primary/20">
            {TIMELINE.map((item, i) => {
              const left = i % 2 === 0;
              const content = (
                <div>
                  <div className="md:hidden mb-1">
                    <p className="text-on-surface-variant text-xs">{item.date}</p>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary text-xs uppercase tracking-wider mt-1 font-semibold">
                    {item.org}
                  </p>
                  {item.bullets ? (
                    <ul className="text-on-surface-variant text-sm mt-3 space-y-2 list-disc pl-4">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-on-surface-variant text-sm mt-3">{item.body}</p>
                  )}
                </div>
              );
              return (
                <div
                  key={item.title}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group"
                >
                  {left ? (
                    <>
                      <div className="hidden md:block md:w-1/2 text-right pr-12">
                        <p className="text-on-surface-variant text-xs tracking-widest uppercase">
                          {item.date}
                        </p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-surface-container-lowest border border-primary/40 rounded-full flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(242,202,80,0.6)]" />
                      </div>
                      <div className="pl-12 md:pl-12 md:w-1/2">{content}</div>
                    </>
                  ) : (
                    <>
                      <div className="pl-12 md:pl-0 md:pr-12 md:w-1/2 md:text-right md:[&_ul]:list-none md:[&_ul]:pl-0">
                        {content}
                      </div>
                      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-surface-container-lowest border border-primary/40 rounded-full flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div className="hidden md:block md:w-1/2 pl-12">
                        <p className="text-on-surface-variant text-xs tracking-widest uppercase">
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
        className="py-24 px-6 md:px-10 max-w-7xl mx-auto text-center"
      >
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rim-light gold-glow rounded-xl">
          <h2 className="font-display text-2xl md:text-4xl text-primary mb-6 font-semibold leading-tight">
            Looking for opportunities in Finance to contribute to growth and add value to the team.
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">Feel free to contact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <a
              href="tel:+971589243200"
              className="md:col-span-2 flex flex-col items-center justify-center gap-2 p-8 border border-white/10 hover:border-primary/50 text-on-surface transition-all rounded-xl bg-surface-container-low hover:bg-white/5 group"
            >
              <Icon name="call" className="text-3xl mb-2 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary opacity-70">
                Direct Line
              </span>
              <span className="font-display text-2xl md:text-3xl">+971 58 924 3200</span>
            </a>
            <a
              href="mailto:abdealixwork03@gmail.com"
              className="flex flex-col items-center justify-center gap-2 p-8 bg-primary text-on-primary transition-transform hover:scale-[1.02] rounded-xl"
            >
              <Icon name="mail" className="text-3xl mb-2" />
              <span className="text-xs uppercase tracking-widest opacity-80">Email Address</span>
              <span className="font-bold text-lg break-all">abdealixwork03@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-8 border border-white/10 hover:border-primary/50 text-on-surface transition-all rounded-xl bg-surface-container-low hover:bg-white/5"
            >
              <Icon name="link" className="text-3xl mb-2 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary opacity-70">
                Professional Network
              </span>
              <span className="font-bold text-lg">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-on-surface-variant tracking-widest uppercase">
        © {new Date().getFullYear()} Abdeali Gangardiwala · CMA
      </footer>
    </main>
  );
}
