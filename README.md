# Vivi Music Website 🎵

[![License](https://img.shields.io/badge/license-GPLv3-blue.svg)](LICENSE)
[![Vue.js](https://img.shields.io/badge/vue-3.5+-42b883.svg)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/vite-7.x-646cff.svg)](https://vitejs.dev/)
[![UnoCSS](https://img.shields.io/badge/unocss-0.66+-333333.svg)](https://unocss.dev/)
[![I18n](https://img.shields.io/badge/i18n-11%20Languages-FF69B4.svg)](#-internationalization)

The official landing page for **Vivi Music**, an open-source Android music player. This project is a premium Single Page Application (SPA) designed with **Material 3 Expressive (M3E)** aesthetics and modern software architecture principles to showcase the app's cutting-edge features.

---

## 🚀 Core Features

- **Material 3 Expressive (M3E) Design:** A high-energy, vibrant UI featuring dynamic accent colors, organic shapes (`rounded-[2.5rem]`), and glassmorphism.
- **Custom Dynamic Theming:** A built-in Material 3 color engine that allows users to choose any accent color via a real-time color picker, instantly updating the entire site's palette.
- **Pixel 10 Pro XL Mockups:** High-fidelity 3D device frames presenting the app's interface in a modern flagship context with realistic camera and depth effects.
- **Interactive 3D Motion:** An immersive Hero section with smooth 3D tilt effects powered by a Lerp-based smoothing algorithm and parallax depth.
- **Audio Visualizer:** A dynamic, beat-synced CSS spectral visualizer integrated into the smartphone mockup, emphasizing the music-centric theme.
- **QR Code App Delivery:** Integrated desktop-to-mobile handoff allowing users to scan a QR code for instant APK downloads on their mobile devices.
- **Dynamic Content:** Real-time fetching of the latest version, release notes, and community contributors directly from the GitHub API.
 - **Living Backgrounds:** A dynamic background system with morphing, rotating blobs that create a sense of depth and life (`AppBackground.vue`).
- **Expressive Motion:** High-energy, CSS-powered SVG animations for installation steps that react to dynamic theme colors.
- **SEO & Social Presence:** Professional Open Graph and Twitter Card metadata for high-quality previews on Discord, Twitter, and social platforms.
- **PWA & Homescreen:** Fully installable as a web app (PWA) on mobile devices with custom manifest support and brand-matched theme colors.
- **Polished UX:** Integrated scroll progress tracking and dynamic scrollbar styling that automatically synchronizes with your chosen accent colors.

---

## 🏗️ Architecture & Performance

This project follows modern development best practices to ensure scalability and speed:

- **OOCSS with UnoCSS:** Utilizes a custom design system built with UnoCSS shortcuts (e.g., `m3-card-expressive`, `m3-btn-primary`), separating structural logic from visual "skins".
- **Modular Barrel Files:** Clean and maintainable imports via central index files in `src/components/` and `src/composables/`.
- **Code Splitting:** Lazy loading of "below-the-fold" sections (FeatureGrid, InstallSection, etc.) using `defineAsyncComponent` to minimize initial bundle size and improve LCP.
- **Lazy Reveal Animations:** Intersection Observer-based transitions that reveal components only when they enter the viewport, reducing initial rendering overhead.
- **Accessibility (A11y):** Semantic HTML structure with `aria-label`, `aria-hidden`, and global `focus-visible` ring styles to ensure an excellent experience for keyboard and screen reader users.
- **Shared State Composables:** Efficient state management for API data to prevent redundant network requests across different components.

---

## 🎨 Design Language (M3E)

This website is a showcase of the **Material 3 Expressive** guidelines:
- **Visual Depth:** Multi-layered background glows, glassmorphism (backdrop-blur), and soft shadows.
- **Typography:** Bold, black headlines using *Plus Jakarta Sans* for a modern, high-contrast look.
- **Interactivity:** Every card and button features bouncy hover states, translations, and dynamic accent colors.
- **Themes:** Intelligent Light/Dark/System theme switching with smooth transitions and persistent state.

---

## 🛠 Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Styling:** [UnoCSS](https://unocss.dev/) (Atomic CSS with custom M3E theme tokens)
- **Icons:** [Iconify](https://iconify.design/) via UnoCSS (FontAwesome 6 Solid/Brands)
- **Animations:** CSS Keyframes & SVG Transitions (M3E Motion System)
- **Markdown:** [Marked](https://marked.js.org/) (for rendering changelogs)
- **Logic:** Custom Composables for Theme, 3D-Tilt, GitHub API, and Intersection Observers.

---

## 🌐 Internationalization

Full support for multiple languages with automatic detection and seamless switching:
- 🇺🇸 **English** (Default)
- 🇩🇪 **German**
- 🇪🇸 **Spanish**
- 🇫🇷 **French**
- 🇷🇺 **Russian**
- 🇯🇵 **Japanese**
- 🇰🇷 **Korean**
- 🇨🇳 **Chinese**
- 🇹🇷 **Turkish**
- 🇧🇷 **Portuguese (Brazilian)**
- 🇮🇳 **Malayalam**

Powered by `vue-i18n`, the site dynamically translates all content based on browser settings or user preference, with state persistence.

---

## 📂 Project Architecture

```text
vivi-music-website/
├── public/              # Static assets, Lottie JSON, PWA Manifest & SEO
├── src/
│   ├── assets/          
│   │   ├── css/         # Global Material 3 color variables (base.css)
│   │   └── LogoSmall.png
│   ├── components/      # Modular Vue SFCs
│   │   ├── index.js     # Component Barrel-file
│   │   ├── AppNavbar.vue
│   │   ├── HeroSection.vue
│   │   ├── AppBackground.vue
│   │   ├── FeatureGrid.vue
│   │   ├── ScreenshotShowcase.vue
│   │   ├── InstallSection.vue
│   │   ├── FaqSection.vue
│   │   ├── QrCodeModal.vue
│   │   ├── ContributeSection.vue
│   │   ├── AppFooter.vue
│   │   └── ChangelogModal.vue
│   ├── composables/     # Reusable logic (Hooks)
│   │   ├── index.js     # Composables Barrel-file
│   │   ├── useTheme.js
│   │   ├── useDynamicColor.js
│   │   ├── useTilt.js
│   │   ├── useGithubRelease.js
│   │   ├── useGithubRepo.js
│   │   ├── useGithubContributors.js
│   │   └── useIntersectionObserver.js
│   ├── i18n.js          # Translation dictionaries
│   ├── App.vue          # Root Layout & Lazy Loading
│   └── main.js          # App entry
├── uno.config.ts        # Design System & M3E Shortcuts
└── vite.config.js       # Vite & Base Path configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20+ recommended)
- npm or pnpm

### Installation
1. Clone the repository:
```bash
git clone https://github.com/vivimusic-app-team/web.git
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

---

## 📦 Build & Deployment

### Production Build
To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### GitHub Pages Deployment
The project includes a GitHub Action for automated deployment.
1. Configure your `vite.config.js` `base` path to match your repo name.
2. Push to the `main` branch.
3. The `.github/workflows/deploy.yml` will handle the build and deployment to the `gh-pages` environment.

---

## 🤝 Contributing

We love our community! Whether you are fixing a bug, adding a translation, or improving the design:
1. Fork the repo.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

## 📄 License

Distributed under the **GPL v3.0 License**. See [LICENSE](LICENSE) for more information.

---
<p align="center">
  Developed with ❤️ by the Vivi Music Team
</p>
