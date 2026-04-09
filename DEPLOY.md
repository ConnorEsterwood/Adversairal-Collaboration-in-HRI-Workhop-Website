# Deploying as a GitHub Pages project site

This repo uses Vite. The included GitHub Actions workflow `.github/workflows/deploy-pages.yml` runs on push to `main`, builds the site, and publishes the `dist` output as a GitHub Pages project site for the repository `Adversairal-Collaboration-in-HRI-Workhop-Website`.

## Deployment checklist

Before pushing to `main`:
- Run `npm run lint`
- Run `npm run test`
- Run `npm run build`
- Verify key pages and links locally with `npm run preview`

Local preview
- npm ci
- npm run dev

Manual build
- npm ci
- npm run build
- The built files live in `dist/` (upload these to Pages or other host manually).

Custom domain
- Configure a custom domain under the repository Settings → Pages.
- To pin a custom domain into the published site, add a `CNAME` file into the publishing source.

Monitoring deploy status
- Open the Actions tab in GitHub and check the latest "Deploy to GitHub Pages" workflow run.
- Confirm the deploy job succeeds before announcing updates.

Firebase option
- If you'd like Firebase Hosting instead, I can add a workflow that deploys using a `FIREBASE_TOKEN` secret.
