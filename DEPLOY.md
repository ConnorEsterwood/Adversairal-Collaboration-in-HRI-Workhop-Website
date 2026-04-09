# Deploying as a GitHub Pages project site

This repo builds the site in `Workshop_Site_Files` with Vite. The included GitHub Actions workflow `.github/workflows/deploy-pages.yml` runs on push to `main`, builds the site, and publishes the `dist` output as a GitHub Pages project site for the repository `Adversairal-Collaboration-in-HRI-Workhop-Website`.

Local preview
- cd Workshop_Site_Files
- npm ci
- npm run dev

Manual build
- cd Workshop_Site_Files
- npm ci
- npm run build
- The built files live in `dist/` (upload these to Pages or other host manually).

Custom domain
- Configure a custom domain under the repository Settings → Pages.
- To pin a custom domain into the published site, add a `CNAME` file into the publishing source.

Firebase option
- If you'd like Firebase Hosting instead, I can add a workflow that deploys using a `FIREBASE_TOKEN` secret.
