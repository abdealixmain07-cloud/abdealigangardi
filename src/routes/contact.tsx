import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/contact")({
 head: () => pageHead("Contact — Finance Controller Profile", "Abdeali Gangardiwala’s finance controller profile, compliance experience, tools and direct contact in Dubai.", "/contact"),
 beforeLoad: () => { throw redirect({ to: "/", hash: "contact", replace: true }); },
});
