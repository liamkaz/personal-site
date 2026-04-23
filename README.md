# personal-site

A small Vite-powered portfolio starter that builds to static files and deploys through GitHub Pages.

## Local development

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.
3. Build production assets with `npm run build`.

## GitHub Pages

The repository includes a workflow at [/.github/workflows/deploy.yml](.github/workflows/deploy.yml) that publishes the built site from the `main` branch.

If you rename the repository, update the `base` setting in [vite.config.js](vite.config.js) so asset URLs keep matching the GitHub Pages path.
