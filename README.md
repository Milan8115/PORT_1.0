# Milan Chanda — Developer Portfolio

Curiosity, turned into working code. A responsive portfolio showcasing my web projects, internship experience, and ongoing exploration of AI, blockchain, and Japanese.

**[Visit the live portfolio](https://milan-developer-studio.milanchanda80.chatgpt.site)** — public, with no login required.

## What’s included

- CareerConnect, Energy Trading, and Everyday Dictionary project showcases.
- Web and blockchain project filters, plus accessible project detail dialogs.
- Internship experience, developer community activities, and a personal introduction.
- Responsive navigation, reduced-motion support, and keyboard-friendly controls.
- GitHub, LinkedIn, email, and a copy-email action.
- My updated profile photograph and social sharing metadata.

The project graphics are illustrative interface studies. Repository links lead to the actual project source, and each detail dialog explains the scope of that project.

## Run locally

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. No API keys, account, database, or environment variables are required.

```sh
npm run build       # TypeScript check and production build
npm run preview     # Preview the production build
npm run format      # Format the source
npm run format:check
```

## Stack

React, TypeScript, Vite, Tailwind CSS, and Lucide icons. This repository is a portable static implementation of the hosted portfolio, without hosting-specific authentication or connector code.

## Edit the content

| File                                | Purpose                                                          |
| ----------------------------------- | ---------------------------------------------------------------- |
| `src/App.tsx`                       | Page sections, navigation, filters, dialogs, and contact actions |
| `src/data/projects.ts`              | Project descriptions, technologies, and repository URLs          |
| `src/components/ProjectVisuals.tsx` | Illustrative project previews                                    |
| `src/components/SocialIcons.tsx`    | Social brand icons                                               |
| `src/styles.css`                    | Colours, layout, responsive styles, and motion preferences       |
| `public/images/milan-profile.jpg`   | Profile photograph                                               |
| `index.html`                        | Page title, description, and sharing metadata                    |

See [deployment instructions](docs/DEPLOYMENT.md) to host this source independently. The photograph and personal content belong to Milan Chanda.

## Connect

[GitHub](https://github.com/Milan8115) · [LinkedIn](https://www.linkedin.com/in/milan-chanda/) · [Email](mailto:milanchanda80@gmail.com)
