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

- Render the shared service-site navigation and footer in the root route around Outlet so all content pages remain reachable.
- Keep shared business content in browser-safe data modules and optimized image loading in the portfolio media module to avoid duplicated values and loading regressions.
- Use Node-compatible test imports in source tests so the application TypeScript configuration does not require Bun ambient types.
