# Deploying to GitHub Pages (Organization)

This guide explains how to deploy the Vivi Music Website (Vue.js/Vite) to your GitHub Organization Page using GitHub Actions.

## Scenario Check

Determine which URL format your site will use:

1.  **Main Organization Site:** `https://vivimusic-app-team.github.io/`  
    * Repository Name: `vivimusic-app-team.github.io`
    * **Base Path:** `/`
2.  **Project Site:** `https://vivimusic-app-team.github.io/webpage/`  
    * Repository Name: `webpage` (or similar)
    * **Base Path:** `/webpage/`

---

## Step 1: Configure `vite.config.js`

You need to set the `base` property in your Vite configuration so assets load correctly.

Open `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// TODO: Replace with your actual repository name
// If deploying to [https://org.github.io/repo-name/](https://org.github.io/repo-name/), set base to '/repo-name/'
// If deploying to [https://org.github.io/](https://org.github.io/), set base to '/'
const repoName = '/webpage/' 

export default defineConfig({
  base: repoName, 
  plugins: [
    vue(),
    UnoCSS(),
  ],
})
```

---

## Step 2: Create GitHub Actions Workflow

We use GitHub Actions to build and deploy automatically.

1.  Create the directory: `.github/workflows/`
2.  Create a file inside named: `deploy.yml`
3.  Paste the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 3: Configure Repository Settings

1.  Go to your GitHub repository.
2.  Click on **Settings** > **Pages** (sidebar).
3.  Under **Build and deployment**:
    * **Source:** Select **GitHub Actions**.
4.  (Optional) Enforce HTTPS.

---

## Step 4: Push to Deploy

Commit your changes and push to the `main` branch:

```bash
git add .
git commit -m "Setup GitHub Actions deployment"
git push origin main
```

**Verify Deployment:**
1.  Go to the **Actions** tab in your repository.
2.  Wait for the "Deploy to GitHub Pages" workflow to finish (green checkmark).
3.  Go to **Settings > Pages** to find your live URL.

## Troubleshooting

* **404 Not Found?** Check if the `base` path in `vite.config.js` matches your repository name exactly.
* **Assets missing?** Ensure images in `public/` are referenced with absolute paths or handled via Vite imports.
