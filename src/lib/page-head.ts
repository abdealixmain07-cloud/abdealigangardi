const SITE = "https://cmaabdealixwork.lovable.app";
export function pageHead(title: string, description: string, path: string) {
  return { meta: [{ title: `${title} | Abdeali Gangardiwala` }, { name: "description", content: description }, { property: "og:title", content: `${title} | Abdeali Gangardiwala` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: SITE + path }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: SITE + path }] };
}