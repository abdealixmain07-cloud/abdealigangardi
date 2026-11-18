import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/")({
 head: () => pageHead("Finance Controller — Available Immediately", "CMA-qualified, ACCA part-qualified Finance Controller based in Dubai. IFRS and GAAP compliant, with UAE VAT and Corporate Tax compliance. Available immediately.", "/"),
 component: Index,
});

const tools = [["QuickBooks", "Xero", "Zoho Books", "Sage", "Dynamics 365"], ["Advanced Excel", "Power Query", "Power BI", "Tally"]];
function ToolsMarquee() {
 return <div className="mq rv" id="mq">{tools.map((row, index) => <div className={`tr${index ? " r" : ""}`} key={index}>{Array.from({length:6}, (_, copy) => row.map(tool => <div className="tool" key={`${copy}-${tool}`} aria-hidden={copy > 0 ? true : undefined}><i />{tool}</div>))}</div>)}</div>;
}

function Index() {
 const root = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("on"); observer.unobserve(entry.target); } }), { threshold: .12 });
  root.current?.querySelectorAll<HTMLElement>(".rv").forEach((element, index) => { element.style.transitionDelay = `${index % 4 * 90}ms`; observer.observe(element); });
  return () => observer.disconnect();
 }, []);
 return <div ref={root}>

<header className="hero" id="top"><div className="wrap">
<span className="pill rv"><span className="dot"></span>Available immediately · Based in Dubai</span>
<h1 className="serif rv">Finance<br /><em>Controller.</em></h1>
<p className="sub rv">Based in Dubai. Currently handling full audits of multi-entity groups, with UAE VAT and Corporate Tax compliance, and IFRS &amp; GAAP compliant reporting.</p>
<div className="cta rv"><Button asChild variant="reference"><a className="btn p" href="#contact">Get in touch</a></Button><Button asChild variant="reference"><a className="btn" href="#compliance">Compliance &amp; tools</a></Button></div>
<div className="facts rv"><div><b>CMA</b><span>Qualified</span></div><div><b>ACCA</b><span>Part-qualified</span></div><div><b>IFRS &amp; GAAP</b><span>Compliant</span></div><div><b>UAE VAT &amp; CT</b><span>Compliance</span></div><div><b>Dubai</b><span>Flexible hours</span></div></div>
</div><div className="scene"><svg viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Animated illustration of a finance office"><rect className="room" x="1" y="1" width="998" height="398" rx="28"></rect><clipPath id="w"><rect x="70" y="60" width="300" height="210" rx="6"></rect></clipPath><rect className="sky" x="70" y="60" width="300" height="210" rx="6"></rect><g clipPath="url(#w)"><circle className="sun" cx="70" cy="60" r="16"></circle><path className="fl" d="M70 270V230H100V205H125V235H145V150L151 110L157 150V240H175V200H205V250H225V215H255V245H285V190H305V250H335V225H370V270Z"></path><rect className="lt" x="108" y="218" width="5" height="7"></rect><rect className="lt" style={{"animationDelay": "-.8s"} as CSSProperties} x="149" y="165" width="4" height="7"></rect><rect className="lt" style={{"animationDelay": "-1.6s"} as CSSProperties} x="185" y="214" width="6" height="7"></rect><rect className="lt" style={{"animationDelay": "-.4s"} as CSSProperties} x="292" y="204" width="5" height="7"></rect><rect className="lt" style={{"animationDelay": "-1.2s"} as CSSProperties} x="345" y="240" width="6" height="7"></rect></g><rect className="ln" x="70" y="60" width="300" height="210" rx="6"></rect><path className="ln" d="M220 60V270M70 165H370"></path><g transform="translate(450 110)"><circle className="ln" r="30"></circle><path className="ln hh" d="M0 0V-14"></path><path className="ln mh" d="M0 0V-22"></path><circle className="ac" r="3"></circle></g><rect x="560" y="60" width="380" height="190" rx="10" style={{"fill": "var(--bg)", "stroke": "var(--line)"} as CSSProperties}></rect><text x="590" y="84">P&amp;L · LIVE</text><text x="920" y="84" textAnchor="end" style={{"fill": "var(--accent)"} as CSSProperties}>MARGIN 36.4%</text><rect className="bar" style={{"--i": "0"} as CSSProperties} x="596" y="187" width="22" height="38" rx="3"></rect><rect className="bar" style={{"--i": "1"} as CSSProperties} x="634" y="173" width="22" height="52" rx="3"></rect><rect className="bar" style={{"--i": "2"} as CSSProperties} x="672" y="179" width="22" height="46" rx="3"></rect><rect className="bar" style={{"--i": "3"} as CSSProperties} x="710" y="159" width="22" height="66" rx="3"></rect><rect className="bar" style={{"--i": "4"} as CSSProperties} x="748" y="145" width="22" height="80" rx="3"></rect><rect className="bar" style={{"--i": "5"} as CSSProperties} x="786" y="153" width="22" height="72" rx="3"></rect><rect className="bar" style={{"--i": "6"} as CSSProperties} x="824" y="131" width="22" height="94" rx="3"></rect><rect className="bar a" style={{"--i": "7"} as CSSProperties} x="862" y="115" width="22" height="110" rx="3"></rect><path className="acs draw" d="M607 173L645 159L683 165L721 145L759 131L797 139L835 117L873 101"></path><rect x="40" y="318" width="920" height="12" rx="4" className="fl"></rect><path className="ln" d="M90 330V390M910 330V390" style={{"strokeWidth": "6"} as CSSProperties}></path><path className="ln" d="M500 318V298M470 318H530"></path><rect className="ln" x="420" y="206" width="160" height="92" rx="8" style={{"fill": "var(--bg)", "strokeWidth": "3"} as CSSProperties}></rect><rect className="bar" style={{"--i": "1"} as CSSProperties} x="438" y="264" width="16" height="18" rx="2"></rect><rect className="bar" style={{"--i": "2"} as CSSProperties} x="466" y="252" width="16" height="30" rx="2"></rect><rect className="bar" style={{"--i": "3"} as CSSProperties} x="494" y="258" width="16" height="24" rx="2"></rect><rect className="bar" style={{"--i": "4"} as CSSProperties} x="522" y="240" width="16" height="42" rx="2"></rect><rect className="bar a" style={{"--i": "5"} as CSSProperties} x="550" y="230" width="16" height="52" rx="2"></rect><rect className="ac scan" x="428" y="214" width="144" height="2"></rect><g className="paper"><rect className="ln" x="150" y="296" width="96" height="22" rx="2" style={{"fill": "var(--card)"} as CSSProperties}></rect><rect className="ln" x="158" y="282" width="84" height="14" rx="2" style={{"fill": "var(--bg)"} as CSSProperties}></rect></g><rect className="ln" x="290" y="282" width="46" height="36" rx="5" style={{"fill": "var(--card)"} as CSSProperties}></rect><rect className="ac blink" x="296" y="288" width="34" height="8" rx="1"></rect><g className="fl"><circle cx="301" cy="304" r="2"></circle><circle cx="313" cy="304" r="2"></circle><circle cx="325" cy="304" r="2"></circle><circle cx="301" cy="312" r="2"></circle><circle cx="313" cy="312" r="2"></circle><circle cx="325" cy="312" r="2"></circle></g><rect className="ln" x="660" y="292" width="30" height="26" rx="5" style={{"fill": "var(--card)"} as CSSProperties}></rect><path className="ln" d="M690 298q12 0 12 8t-12 8"></path><path className="steam" d="M668 284q-6-9 0-17"></path><path className="steam" style={{"animationDelay": "1s"} as CSSProperties} d="M680 284q6-9 0-17"></path><g className="plant"><path className="ln" d="M878 290V240M878 270q-22-10-26-34M878 262q22-12 24-38M878 280q-18-4-30-20"></path><path className="acs" d="M878 250q-4-22 10-38"></path></g><rect className="ln" x="858" y="290" width="40" height="28" rx="5" style={{"fill": "var(--card)"} as CSSProperties}></rect></svg></div></header>
<section id="compliance"><div className="wrap">
<div className="eyebrow rv">Compliance</div><h2 className="serif rv">Managing compliance, <em>quietly.</em></h2>
<div className="row rv"><small>01</small><h3>Compliance calendars</h3><p>Every deadline mapped, owned and tracked, so nothing arrives as a surprise.</p></div>
<div className="row rv"><small>02</small><h3>Statutory dues</h3><p>Filings and payments prepared on time with clean supporting documentation.</p></div>
<div className="row rv"><small>03</small><h3>Audit preparation</h3><p>Reconciled books and organised evidence, ready before the auditors ask.</p></div>
<div className="row rv"><small>04</small><h3>US &amp; UK accounting and tax</h3><p>Multi-entity books, VAT and tax compliance, and multi-currency reporting across US and UK clients.</p></div>
<div className="row rv"><small>05</small><h3>AI audit compliance</h3><p>AI-assisted ledger analysis, reconciliations and documentation checks that keep audit files clean and review-ready.</p></div>
<div className="row rv"><small>06</small><h3>UAE VAT &amp; Corporate Tax</h3><p>VAT and CT compliance handled across a multi-entity setup, alongside a full group audit.</p></div>
</div></section>
<section id="tools"><div className="wrap">
<div className="eyebrow rv">Tools</div><h2 className="serif rv">The stack I <em>work in.</em></h2></div>
<ToolsMarquee /></section>
<section><div className="wrap">
<div className="eyebrow rv">Industries</div><h2 className="serif rv">Different sectors. <em>Same discipline.</em></h2>
<div className="ind rv"><div>SaaS</div><div>Gaming</div><div>Trust accounting</div><div>Manufacturing</div><div>Power &amp; utilities</div><div>Banking</div><div>Trading &amp; wholesale</div></div>
</div></section>
<section className="contact" id="contact"><div className="wrap">
<div className="eyebrow rv">Let’s connect</div><h2 className="serif rv">Your next <em>finance hire.</em></h2>
<p className="sub rv" style={{"marginBottom": "44px"} as CSSProperties}>Dubai, UAE · Available immediately. Open to opportunities across Dubai, the UK and US, with flexible hours and time-zone overlap.</p>
<div className="cl rv"><a href="mailto:abdealixmain07@gmail.com">abdealixmain07@gmail.com <span>→</span></a><a href="tel:+971553037751">+971 55 303 7751 <span>→</span></a><a href="https://www.linkedin.com/in/abdeali-main/" target="_blank" rel="noopener">LinkedIn <span>→</span></a></div>
</div></section>
<div className="wrap"><footer><span>© 2026 Abdeali Gangardiwala</span><span>Dubai, UAE · Finance Controller</span></footer></div>


</div>;
}
