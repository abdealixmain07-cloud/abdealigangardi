import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, MapPin, Clock3, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSkyline } from "@/components/portfolio/media";
import { ServiceGrid, IndustryExplorer, ContactCTA, MoreLink, WhyWorkWithMe } from "@/components/portfolio/sections";
import { pageHead } from "@/lib/page-head";
import { PROFILE } from "@/lib/service-content";
import hero768 from "@/assets/hero-768.webp";
import hero1280 from "@/assets/hero-1280.webp";
import hero1920 from "@/assets/hero-1920.webp";
import resume from "@/assets/abdeali-gangardiwala-cv.pdf.asset.json";

export const Route = createFileRoute("/")({ component: Index, head: () => ({
  ...pageHead("Remote Financial Accounting & Control", "Dubai-based CMA and ACCA part-qualified freelance accountant supporting Dubai, UK and US founders with bookkeeping, cash flow, cost control and management reporting. Flexible working hours.", "/"),
  links: [{ rel: "canonical", href: "https://cmaabdealixwork.lovable.app/" }, { rel: "preload", as: "image", href: hero1280, imageSrcSet: `${hero768} 768w, ${hero1280} 1280w, ${hero1920} 1920w`, imageSizes: "100vw", fetchPriority: "high" }],
  scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: PROFILE.name, jobTitle: "Freelance Financial Accounting & Control Professional", email: PROFILE.email, telephone: PROFILE.phone, url: "https://cmaabdealixwork.lovable.app/", sameAs: ["https://www.linkedin.com/in/abdeali-main/"], address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }, hasCredential: [{ "@type": "EducationalOccupationalCredential", name: "Cost and Management Accountant (CMA)" }], description: "CMA and ACCA part-qualified (6 papers remaining). Remote finance support for Dubai, UK and US businesses." }) }],
}) });

function Index() {
  return <main>
    <section className="service-hero relative isolate overflow-hidden">
      <HeroSkyline />
      <div className="page-width relative z-20 py-16 sm:py-20 lg:py-24">
        <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-medium text-primary"><span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Dubai, UAE</span><span className="h-3 w-px bg-border" /><span>REMOTE · FREELANCE</span></div>
        <h1 className="max-w-3xl text-4xl leading-[1.12] sm:text-5xl lg:text-7xl">Financial Accounting<br className="hidden sm:block" /> <span className="italic text-primary">& Control Services.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-foreground/80 sm:text-lg">Clear books. Controlled costs. Confident decisions.<br />Hands-on finance support for founders building in Dubai, the UK, and the US.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 px-6"><Link to="/contact">Discuss your finance needs <ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg" className="h-12 px-6"><Link to="/services">Explore services <ArrowRight /></Link></Button></div>
        <div className="mt-9 flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm"><span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Qualified CMA</span><span className="flex items-center gap-2"><Check className="size-4 text-primary" /> ACCA Part-Qualified · {PROFILE.accaRemaining} papers remaining</span><span className="flex items-center gap-2"><Clock3 className="size-4 text-primary" /> Flexible working hours</span></div>
        <p className="mt-8 text-sm text-muted-foreground">Abdeali Gangardiwala <span className="mx-2 text-primary">/</span> Your independent finance partner</p>
      </div>
      <div className="absolute bottom-8 right-10 z-20 hidden border-l border-primary/40 pl-4 text-xs leading-6 text-foreground lg:block">BASED IN DUBAI<br />WORKING ACROSS BORDERS</div>
    </section>
    <section className="border-y border-border bg-background"><div className="page-width flex flex-wrap items-center justify-between gap-5 py-7"><p className="text-xs font-medium text-muted-foreground">CONNECTED TO YOUR FINANCE STACK</p><div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold"><span>QuickBooks</span><span>Xero</span><span>Excel</span><span>Power BI</span><span>Zoho Books</span></div></div></section>
    <section className="page-width py-16 sm:py-24"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-4">Finance that works for your business</p><h2 className="max-w-xl text-3xl leading-tight sm:text-5xl">Your numbers, organized.<br /><span className="italic text-primary">Your next move, clearer.</span></h2></div><div className="max-w-sm"><p className="mb-3 text-sm leading-7 text-muted-foreground">From the everyday books to the bigger financial picture—practical support, shaped around your stage of growth.</p><MoreLink /></div></div><ServiceGrid compact /></section>
    <section className="bg-secondary py-16 sm:py-24"><div className="page-width"><p className="eyebrow mb-4">Different industries. Real financial challenges.</p><h2 className="mb-5 text-3xl sm:text-5xl">Built around <span className="italic text-primary">your business model.</span></h2><p className="mb-10 max-w-2xl leading-7 text-muted-foreground">The right financial support starts with understanding how you earn, spend, and grow.</p><IndustryExplorer /></div></section>
    <section className="page-width grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.3fr]"><div><p className="eyebrow mb-4">A simple way to work together</p><h2 className="text-3xl sm:text-4xl">Flexible support.<br />A clear scope.</h2><p className="mt-5 max-w-sm leading-7 text-muted-foreground">Hourly freelance support, with working hours and deliverables agreed around your business needs and time zone.</p><Button asChild variant="link" className="mt-5 px-0"><Link to="/about">Meet your finance partner <ArrowRight /></Link></Button></div><ol className="space-y-7">{[["Understand", "We discuss your business, current finance challenges, systems, and priorities."], ["Agree", "We define the scope, hourly arrangement, deliverables, and working-hour overlap before work begins."], ["Deliver", "I work remotely with your team, share progress, and provide reporting you can use."]].map(([title, text], i) => <li className="flex gap-5 border-b border-border pb-7" key={title}><span className="font-display text-3xl text-primary">0{i + 1}</span><div><h3 className="mb-2 text-2xl">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{text}</p></div></li>)}</ol></section>
    <section className="page-width flex flex-col items-start justify-between gap-6 border-t border-border py-10 sm:flex-row sm:items-center"><div><p className="eyebrow mb-2">Experience behind the numbers</p><p className="text-lg">Multi-entity reporting. Cross-industry experience. Practical delivery.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="outline"><Link to="/work">Selected work <ArrowUpRight /></Link></Button><Button asChild variant="ghost"><a href={resume.url} download><Download /> Resume</a></Button></div></section>
    <WhyWorkWithMe />
    <ContactCTA />
  </main>;
}
