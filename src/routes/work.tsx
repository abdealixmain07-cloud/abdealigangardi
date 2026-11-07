import { createFileRoute } from "@tanstack/react-router";
import { ProjectList, PageHeading, ContactCTA } from "@/components/portfolio/sections";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/work")({ head: () => pageHead("Selected Financial Reporting Projects", "Explore Abdeali Gangardiwala’s accounting cleanup, management dashboards, KPI reporting and forecasting projects.", "/work"), component: Work });
function Work() { return <main><section className="page-width py-16 sm:py-24"><PageHeading eyebrow="Selected work" title="From financial complexity to usable insight." description="A selection of past projects in reporting, ledger cleanup, performance tracking, and forecasting." /><ProjectList /></section><ContactCTA /></main>; }
