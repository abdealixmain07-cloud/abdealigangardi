import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/about")({
 head: () => pageHead("About — Finance Controller Profile", "Abdeali Gangardiwala’s finance controller profile, compliance experience, tools and direct contact in Dubai.", "/about"),
 beforeLoad: () => { throw redirect({ to: "/", hash: "top", replace: true }); },
});
