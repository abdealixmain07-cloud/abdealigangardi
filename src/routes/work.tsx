import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/work")({
 head: () => pageHead("Work — Finance Controller Profile", "Abdeali Gangardiwala’s finance controller profile, compliance experience, tools and direct contact in Dubai.", "/work"),
 beforeLoad: () => { throw redirect({ to: "/", hash: "tools", replace: true }); },
});
