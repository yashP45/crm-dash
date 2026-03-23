# UniSouk CRM Dashboard - Take Home Assignment

This repository contains the frontend implementation of the UniSouk CRM Dashboard based on the provided Figma layout.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4 (Using the new inline CSS `@theme` architecture)
- **Language**: TypeScript
- **Icons**: `lucide-react`
- **Fonts**: Inter (via `next/font/google`)

## Architecture & Decisions
- **Layout System**: Used a robust Next.js Root Layout encompassing the fixed `Sidebar` and horizontal `Header`. The core content uses a 12-column CSS Grid responsive mapping (`grid-cols-1 xl:grid-cols-12`) mirroring the exact design grid properties.
- **Component Modularity**: Broke the dashboard into logical chunks (`NextAppointmentCard`, `TasksCard`, etc.) to maintain separation of concerns and ensure code scalability.
- **Mock Data**: Typed structures representing Deals, Customers, Tasks, and Project Progress are housed in `src/lib/mockData.ts` simulating a real API response shape.
- **Design Accuracy**: Used exact Tailwind `var` overrides based on the style guide provided (`--color-brand-blue`, `--color-brand-green`, etc.) implementing matching border radiuses, typography scaling, and soft multi-layered drop shadows.

## Running Locally
1. Clone the repository and navigate into this directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## AI Assistance
This project was scaffolded and developed with the assistance of an agentic LLM (acting as an AI engineer). The AI was responsible for:
1. Abstracting visual layout rules from the uploaded Figma snapshots into the concrete implementation plan.
2. Rapidly scaffolding the standard Next.js 16 app framework with correct package installations (`lucide-react`, `tailwind-merge`).
3. Generating boilerplate components with accurate Tailwind classes to replicate the design aesthetic, mapping standard mock data correctly into the views.
4. Structuring a robust grid layout responsive system.
