import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/industries")({
 head: () => pageHead("Industries — Finance Controller Profile", "Abdeali Gangardiwala’s finance controller profile, compliance experience, tools and direct contact in Dubai.", "/industries"),
 beforeLoad: () => { throw redirect({ to: "/", hash: "top", replace: true }); },
});
