import projectImg1 from "@/assets/project-1.webp";
import projectImg2 from "@/assets/project-2.webp";
import projectImg3 from "@/assets/project-3.webp";
import projectImg4 from "@/assets/project-4.webp";
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

export const PROJECTS: Project[] = [
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
    image: projectImg1,
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
    image: projectImg2,
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
    image: projectImg3,
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
    image: projectImg4,
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

export const TIMELINE: TimelineItem[] = [
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

