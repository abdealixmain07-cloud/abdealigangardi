import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/service-content";

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"><div className="page-width flex h-20 items-center justify-between gap-4"><Link to="/" className="flex items-center gap-3" aria-label="Abdeali Gangardiwala home"><span className="brand-mark">ag.</span><span className="hidden text-[10px] font-medium leading-4 sm:block">ABDEALI<br />GANGARDIWALA</span></Link><nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-5"><Button asChild variant="ghost" className="hidden sm:inline-flex"><a href="/#focus">Focus</a></Button><Button asChild variant="ghost"><a href="/#workspace">Workspace</a></Button><Button asChild variant="link" className="px-0"><a href="/#contact">Contact <ArrowUpRight /></a></Button></nav></div></header>;
}
export function SiteFooter() { return <footer className="border-t border-border"><div className="page-width flex flex-wrap items-center justify-between gap-4 py-7 text-[11px] text-muted-foreground"><p>© {new Date().getFullYear()} {PROFILE.name}</p><p>Dubai, UAE <span className="mx-2 text-primary">/</span> Remote Financial Controller opportunities</p><a href={`mailto:${PROFILE.email}`} className="hover:text-primary">Say hello <ArrowUpRight className="ml-1 inline size-3" /></a></div></footer>; }
