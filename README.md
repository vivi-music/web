# Vivi Music Website 🎵

![License](https://img.shields.io/badge/license-GPLv3-blue.svg)
![Vue.js](https://img.shields.io/badge/vue-3.x-42b883.svg)
![Vite](https://img.shields.io/badge/vite-5.x-646cff.svg)
![UnoCSS](https://img.shields.io/badge/unocss-0.58.x-333333.svg)

The official landing page for **Vivi Music**, an open-source Android music player. This project is a modern Single Page Application (SPA) built with **Vue.js 3**, designed to showcase the app's features with Google's **Material Design Expressive** aesthetics.

## ✨ Features

- **Material 3 Expressive Design:** Fully customized theme using UnoCSS presets.
- **Interactive 3D Elements:** Hero section featuring a reactive 3D phone mockup.
- **Dynamic Theming:** Built-in Light, Dark, and System theme switching logic.
- **Performance First:** Powered by Vite for lightning-fast HMR and optimized builds.
- **Modular Architecture:** Component-based structure using Vue SFCs (Single File Components).

## 🛠 Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [UnoCSS](https://unocss.dev/) (Atomic CSS engine)
- **Icons:** UnoCSS Preset Icons (FontAwesome 6 source)

## 📂 Project Structure

```text
vivi-music-website/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── assets/          # Global CSS and local assets
│   ├── components/      # Vue Single File Components (SFCs)
│   ├── composables/     # Reusable logic (Hooks)
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── uno.config.ts        # UnoCSS & Theme configuration
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started
Prerequisites
Node.js (version 18+ recommended)
npm or pnpm
Installation
1. Clone the repository:
```Bash
git clone [https://github.com/your-username/vivi-music-website.git](https://github.com/your-username/vivi-music-website.git)
cd vivi-music-website
```

2. Install dependencies:
```Bash
npm install
```

3. Run development server:
```Bash
npm run dev
```
Open http://localhost:5173 in your browser.

4. Deployment: For instructions on how to deploy this site to GitHub Pages, please refer to the Deployment Guide [DEPLOY.md](.DEPLOY.md).

## 📦 Building for Production
To create an optimized production build:

```Bash
npm run build
```

The output will be generated in the dist/ directory.
## 🌐 Deployment: GitHub Pages
This project is configured to be easily deployed to GitHub Pages. Follow one of the methods below.
Important: Configure Base Path
Before deploying, if your repository is NOT at the root (e.g., username.github.io/repo-name/), you must set the base path in vite.config.js.
vite.config.js:

```JavaScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// Replace 'vivi-music-website' with your actual repository name
export default defineConfig({
  base: '/vivi-music-website/', 
  plugins: [
    vue(),
    UnoCSS(),
  ],
})
```

**Method 1: Automated Deployment (GitHub Actions) - Recommended**
1. Go to your GitHub Repository settings.
2. Navigate to Settings > Pages.
3. Under Build and deployment > Source, select GitHub Actions.
4. GitHub will suggest a Static HTML workflow. Click "Configure".
5. Paste the following workflow configuration:
.github/workflows/deploy.yml
```YAML
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

6. Commit the file. Your site will deploy automatically on every push to main.

**Method 2: Manual Deployment**
If you prefer to build locally and push the artifacts:
1. Run the build command:
```Bash
npm run build
```

2. Commit the dist folder content to a gh-pages branch (usually handled by scripts, but Method 1 is preferred for modern development).
## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create your feature branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.
## 📄 License
Distributed under the GPL v3.0 License. See LICENSE for more information.
