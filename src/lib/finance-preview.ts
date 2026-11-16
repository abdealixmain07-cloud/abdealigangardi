export type ReportingPeriod = "Month" | "Quarter" | "Year";

export const REPORTING_SERIES: Record<ReportingPeriod, { label: string; revenue: number; costs: number }[]> = {
  Month: [{ label: "W1", revenue: 24, costs: 16 }, { label: "W2", revenue: 31, costs: 21 }, { label: "W3", revenue: 28, costs: 18 }, { label: "W4", revenue: 42, costs: 25 }],
  Quarter: [{ label: "Jan", revenue: 72, costs: 49 }, { label: "Feb", revenue: 91, costs: 61 }, { label: "Mar", revenue: 125, costs: 80 }],
  Year: [{ label: "Jan", revenue: 72, costs: 49 }, { label: "Mar", revenue: 91, costs: 61 }, { label: "May", revenue: 86, costs: 57 }, { label: "Jul", revenue: 118, costs: 73 }, { label: "Sep", revenue: 107, costs: 68 }, { label: "Nov", revenue: 142, costs: 84 }],
};

export function financialSummary(revenue: number, costs: number) {
  const profit = revenue - costs;
  return { revenue, costs, profit, margin: revenue > 0 ? profit / revenue * 100 : 0 };
}

export const CAREER_INDUSTRIES = ["SaaS", "Gaming", "Trust accounting", "Manufacturing", "Power & utilities", "Banking"];
export const FINANCE_TOOLS = ["QuickBooks", "Xero", "Sage", "Advanced Excel", "Power Query", "Power BI", "Tally"];