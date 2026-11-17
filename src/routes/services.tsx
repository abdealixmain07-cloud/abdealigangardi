import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/services")({
 head: () => pageHead("Services — Finance Controller Profile", "Abdeali Gangardiwala’s finance controller profile, compliance experience, tools and direct contact in Dubai.", "/services"),
 beforeLoad: () => { throw redirect({ to: "/", hash: "compliance", replace: true }); },
});
