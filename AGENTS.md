<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Render the supplied single-page header and footer in the index route; keep root Outlet and redirect retired content URLs to page sections so the reference layout is not duplicated.
- Keep shared business content in browser-safe data modules and optimized image loading in the portfolio media module to avoid duplicated values and loading regressions.
- Use Node-compatible test imports in source tests so the application TypeScript configuration does not require Bun ambient types.

- Preserve the supplied HTML design in React JSX and its original CSS with semantic Tailwind palette mappings; this keeps animations and automatic colour-scheme behaviour faithful.
