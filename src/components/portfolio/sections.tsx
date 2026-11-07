import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, ChartNoAxesCombined, ShieldCheck, Users, Target, PanelsTopLeft, Check, Cloud, Gamepad2, Package, TrendingUp, Building2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, INDUSTRIES } from "@/lib/service-content";
import { PROJECTS } from "@/lib/portfolio-history";

const serviceIcons = [BookOpen, ChartNoAxesCombined, ShieldCheck, Users, Target, PanelsTopLeft];
const industryIcons = [Cloud, Gamepad2, Package, TrendingUp, Building2];

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map((service, i) => {
    const Icon = serviceIcons[i] ?? BookOpen;
    return <article key={service.title} className="service-item border-t border-border py-8"><Icon className="mb-5 size-7 text-primary" strokeWidth={1.5} /><h3 className="mb-3 text-2xl">{service.title}</h3><p className="text-sm leading-7 text-muted-foreground">{service.text}</p>{!compact && <ul className="mt-5 space-y-3">{service.outputs.map(output => <li key={output} className="flex gap-2 text-sm"><Check className="size-4 shrink-0 text-primary" />{output}</li>)}</ul>}</article>;
  })}</div>;
}

export function IndustryExplorer() {
  const [selected, setSelected] = useState(0);
  const industry = INDUSTRIES[selected] ?? INDUSTRIES[0];
  if (!industry) return null;
  const Icon = industryIcons[selected] ?? Building2;
  return <div><div role="tablist" aria-label="Business industries" className="mb-9 flex flex-wrap gap-2">{INDUSTRIES.map((item, i) => <Button key={item.name} role="tab" id={`industry-tab-${i}`} aria-selected={selected === i} aria-controls="industry-panel" onClick={() => setSelected(i)} variant={selected === i ? "default" : "outline"} className="h-11 px-5">{item.name}</Button>)}</div><div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${selected}`} className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16"><div><Icon className="mb-5 size-9 text-primary" strokeWidth={1.5} /><h3 className="mb-5 text-3xl leading-tight sm:text-4xl">{industry.problem}</h3><p className="max-w-lg leading-7 text-muted-foreground">{industry.detail}</p></div><div className="border-l-2 border-primary pl-6 sm:pl-9"><p className="eyebrow mb-6">How I can help</p><ul className="space-y-5">{industry.support.map(item => <li className="flex gap-3 leading-7" key={item}><Check className="mt-1 size-5 shrink-0 text-primary" />{item}</li>)}</ul><p className="mt-7 border-t border-border pt-6 font-medium text-primary">{industry.result}</p></div></div></div>;
}

export function ContactCTA() {
  return <section className="bg-secondary py-16 sm:py-20"><div className="page-width flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow mb-3">Let’s talk numbers</p><h2 className="max-w-2xl text-3xl sm:text-4xl">Less financial guesswork.<br />More room to build.</h2></div><Button asChild size="lg" className="h-12 self-start md:self-center"><Link to="/contact">Discuss your requirements <ArrowUpRight /></Link></Button></div></section>;
}

export function ProjectList() {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="border-t border-border">{PROJECTS.map((project, i) => <article className="border-b border-border" key={project.title}><Button variant="ghost" className="h-auto w-full justify-between whitespace-normal rounded-none px-0 py-7 text-left hover:bg-secondary/50" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`project-${i}`}><span className="flex gap-5"><span className="mt-1 text-sm text-primary">0{i + 1}</span><span><span className="mb-2 block text-xs text-muted-foreground">{project.tag}</span><span className="font-display text-xl sm:text-2xl">{project.title}</span></span></span>{open === i ? <Minus className="ml-4 shrink-0" /> : <Plus className="ml-4 shrink-0" />}</Button><div id={`project-${i}`} className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><div className="grid gap-8 pb-8 md:grid-cols-2"><div className="space-y-5">{[["The problem", project.problem], ["The work", project.built], ["The impact", project.impact]].map(([label, text]) => <div key={label}><p className="eyebrow mb-2">{label}</p><p className="text-sm leading-7 text-muted-foreground">{text}</p></div>)}<div className="flex flex-wrap gap-2">{project.chips.map(chip => <span className="border border-border px-3 py-1 text-xs" key={chip}>{chip}</span>)}</div></div><img src={project.image} alt={`${project.title} project visual`} loading="lazy" decoding="async" width={800} height={500} className="aspect-[8/5] w-full rounded-md object-contain bg-secondary" /></div></div></div></article>)}</div>;
}

export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mb-14 max-w-3xl"><p className="eyebrow mb-5">{eyebrow}</p><h1 className="mb-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1><p className="max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></div>;
}

export function MoreLink() { return <Button asChild variant="link" className="px-0"><Link to="/services">Explore all services <ArrowRight /></Link></Button>; }