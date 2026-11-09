# Deploy the portfolio

The current site is public at https://milan-developer-studio.milanchanda80.chatgpt.site. Visitors do not need a ChatGPT account.

This repository builds to ordinary static files and can also be hosted on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a static web server.

## Common settings

| Setting               | Value           |
| --------------------- | --------------- |
| Framework             | Vite            |
| Node.js               | 22.13 or newer  |
| Install command       | `npm ci`        |
| Build command         | `npm run build` |
| Output directory      | `dist`          |
| Environment variables | None            |

## Vercel or Netlify

1. Import this GitHub repository into the hosting dashboard.
2. Select Vite, or enter the build and output settings above.
3. Deploy. No sign-in logic is included in the application.

## Static hosting

```sh
npm ci
npm run build
```

Upload the contents of `dist`, including its `assets` and `images` folders. Use HTTPS so the copy-email action can access the browser clipboard.

The Vite base is relative, so the build supports a subdirectory such as a GitHub Pages project path. Keep the generated directory structure intact.

## Switching the primary address

Update the absolute `og:url` and `og:image` values in `index.html`, plus the live link in `README.md`, if a different host becomes the primary address.

The hosted Sites version and this portable repository are separate deployments. Pushing here does not automatically update the existing Sites address. An imported Vercel or Netlify project can deploy pushes to its configured branch.
