# 🌌 My_Profile3 — Next-Gen Developer Portfolio

A futuristic, high-performance software engineering portfolio and live telemetry hub built with modern frontend frameworks and structured clean architecture.

## 🚀 Key Features
* **Modular Feature-Based Architecture:** Scalable folder structure optimized for clean code and rapid development.
* **3D Micro-Interactions:** Fully responsive 3D interactive telemetry cards driven by `framer-motion` springs.
* **Type-Safe Ecosystem:** Absolute type-safety implemented across components and hooks via TypeScript.
* **Dynamic Content Management:** Blazing fast data fetching and headless content lifecycle management powered by **Strapi CMS (v5)**.
* **Utility-First Styling:** Clean, ultra-modern dark theme designed entirely with Tailwind CSS and advanced backdrop filters.

---

## 📂 Project Architecture
The project strictly adheres to a **feature-based architecture** pattern to separate logic by module functionality rather than file types:

```text
src/
├── assets/          # Static branding materials (logos, global fonts, icons)
├── components/      # Shared atomic UI components (Global Buttons, Badges)
├── config/          # Environment variables, public constants, routing configs
├── context/         # Centralized React global states (Theme, Shared App States)
├── features/        # Feature-based autonomous modules (Core Business Logic)
│   ├── landing/     # Landing Page Feature (Hero, Radar, Projects, Manifesto)
│   │   ├── components/  # Feature-scoped components (Hero.tsx, TelemetryCard.tsx)
│   │   └── index.ts     # Feature Public API entrypoint
│   └── auth/        # Client/Admin Authentication module
├── hooks/           # Reusable global custom hooks (useLocalStorage, useDebounce)
├── pages/           # Routers mappings and view orchestrators (Home.tsx, Profile.tsx)
└── utils/           # Global helpers, data formatters, and validation models
```

---

## 🛠️ Tech Stack & Dependencies
* **Core:** React 19 / TypeScript
* **State & Motion:** Framer Motion (Advanced Springs & AnimatePresence)
* **Styling:** Tailwind CSS (v4)
* **Backend Content Client:** Headless Strapi GraphQL / REST client 

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/Qaioos/My_Profile3.git .
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment configurations
Create a `.env.local` file in the root directory and add your Strapi configurations:
```env
VITE_STRAPI_API_URL=http://localhost:1337
```

### 4. Run the development server
```bash
npm run dev
```

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

*Developed with ☕ and passion by **Qais Salha**.*
