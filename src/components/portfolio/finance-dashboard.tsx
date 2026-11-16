import { useEffect, useState } from "react";
import { Activity, ArrowUpRight, Calculator, ChartNoAxesCombined, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { financialSummary, REPORTING_SERIES, type ReportingPeriod } from "@/lib/finance-preview";

const periods: ReportingPeriod[] = ["Month", "Quarter", "Year"];
const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export function FinanceDashboard() {
  const [period, setPeriod] = useState<ReportingPeriod>("Year");
  const [playing, setPlaying] = useState(false);
  const [mode, setMode] = useState<"report" | "calculator">("report");
  const [revenue, setRevenue] = useState(125000);
  const [costs, setCosts] = useState(80000);
  const data = REPORTING_SERIES[period];
  const summary = mode === "calculator" ? financialSummary(revenue, costs) : financialSummary(data.reduce((sum, row) => sum + row.revenue * 1000, 0), data.reduce((sum, row) => sum + row.costs * 1000, 0));

  useEffect(() => {
    setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  useEffect(() => {
    if (!playing || mode !== "report") return;
    const interval = window.setInterval(() => setPeriod(previous => periods[(periods.indexOf(previous) + 1) % periods.length] ?? "Year"), 6000);
    return () => window.clearInterval(interval);
  }, [playing, mode]);

  return <div className="finance-dashboard overflow-hidden rounded-lg border border-border bg-card">
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-7">
      <div className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-md bg-secondary text-primary"><Activity className="size-4" /></span><div><p className="text-sm font-semibold">Financial overview</p><p className="mt-0.5 text-[11px] text-muted-foreground">Illustrative data · USD</p></div></div>
      <div className="flex items-center gap-1"><Button size="icon" variant={mode === "report" ? "secondary" : "ghost"} aria-label="Show financial dashboard" title="Financial dashboard" aria-pressed={mode === "report"} onClick={() => setMode("report")}><ChartNoAxesCombined /></Button><Button size="icon" variant={mode === "calculator" ? "secondary" : "ghost"} aria-label="Show profit calculator" title="Profit calculator" aria-pressed={mode === "calculator"} onClick={() => setMode("calculator")}><Calculator /></Button><span className="mx-2 h-5 w-px bg-border" /><Button size="icon" variant="ghost" disabled={mode === "calculator"} onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause dashboard animation" : "Play dashboard animation"} title={playing ? "Pause animation" : "Play animation"}>{playing ? <Pause /> : <Play />}</Button></div>
    </div>
    <div className="grid grid-cols-2 border-b border-border sm:grid-cols-4">{[["Revenue", money(summary.revenue)], ["Operating costs", money(summary.costs)], ["Operating profit", money(summary.profit)], ["Profit margin", `${summary.margin.toFixed(1)}%`]].map(([label, value], i) => <div key={label} className={`min-w-0 px-5 py-6 sm:px-7 ${i !== 3 ? "sm:border-r sm:border-border" : ""}`}><p className="mb-3 text-xs text-muted-foreground">{label}</p><p className={`metric-value font-medium tabular-nums ${i >= 2 ? "text-primary" : "text-foreground"}`}>{value}</p></div>)}</div>
    {mode === "report" ? <div className="px-5 py-6 sm:px-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><div className="flex gap-5 text-xs"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" />Revenue</span><span className="flex items-center gap-2 text-muted-foreground"><span className="size-2 rounded-full bg-chart-cost" />Costs</span></div><div role="group" aria-label="Reporting period" className="flex gap-1">{periods.map(item => <Button key={item} variant={period === item ? "secondary" : "ghost"} size="sm" aria-pressed={period === item} onClick={() => { setPeriod(item); setPlaying(false); }}>{item}</Button>)}</div></div>
      <div key={period} className="chart-entrance relative h-48 sm:h-56"><svg viewBox="0 0 900 220" preserveAspectRatio="none" role="img" aria-label={`${period} sample revenue and costs chart`} className="h-full w-full overflow-visible"><g className="chart-grid">{[25, 75, 125, 175, 215].map(y => <line key={y} x1="0" x2="900" y1={y} y2={y} />)}</g><path className="chart-revenue-fill" d={`M 0 220 ${data.map((d, i) => `L ${i * 900 / (data.length - 1)} ${215 - d.revenue / 160 * 190}`).join(" ")} L 900 220 Z`} /><polyline className="chart-line chart-cost-line" points={data.map((d, i) => `${i * 900 / (data.length - 1)},${215 - d.costs / 160 * 190}`).join(" ")} /><polyline className="chart-line chart-revenue-line" points={data.map((d, i) => `${i * 900 / (data.length - 1)},${215 - d.revenue / 160 * 190}`).join(" ")} /></svg></div>
      <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">{data.map(d => <span key={d.label}>{d.label}</span>)}</div>
    </div> : <div className="grid min-h-72 items-center gap-8 px-5 py-7 sm:grid-cols-2 sm:px-7"><div className="space-y-5"><label className="form-label">Revenue (USD)<input className="form-input" type="number" min="0" step="1000" value={revenue} onChange={e => setRevenue(Math.max(0, Number(e.target.value)))} /></label><label className="form-label">Operating costs (USD)<input className="form-input" type="number" min="0" step="1000" value={costs} onChange={e => setCosts(Math.max(0, Number(e.target.value)))} /></label></div><div className="border-l-2 border-primary pl-6"><p className="mb-3 text-xs text-muted-foreground">Operating profit</p><output aria-live="polite" className="text-3xl font-medium tabular-nums text-primary sm:text-4xl">{money(summary.profit)}</output><p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><ArrowUpRight className="size-4" />{summary.margin.toFixed(1)}% profit margin</p></div></div>}
    <div className="flex items-center justify-between border-t border-border px-5 py-3 text-[10px] text-muted-foreground sm:px-7"><span>MANAGEMENT REPORTING</span><span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-primary" />Sample workspace</span></div>
  </div>;
}