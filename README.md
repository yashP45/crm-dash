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

## Architecture Diagram

```mermaid
flowchart TD
  U[User / Browser] -->|Request route| N[Next.js App Router]

  subgraph APP["src/app (routes)"]
    L["layout.tsx<br/>Root layout (App Shell)"]
    P0["page.tsx<br/>Dashboard (/ )"]
    PD["deals/page.tsx<br/>Deals list (/deals)"]
    PDid["deals/[id]/page.tsx<br/>Deal detail (/deals/:id)"]
    PC["customers/page.tsx<br/>Customers list (/customers)"]
    PCid["customers/[id]/page.tsx<br/>Customer detail (/customers/:id)"]
  end

  subgraph UI["src/components (UI + interaction)"]
    SB["Sidebar.tsx<br/>nav state via usePathname()"]
    H["Header.tsx<br/>actions + modal state"]
    DL["DealsListView.tsx<br/>list + edit modal state"]
    M["Modal.tsx<br/>reusable modal shell"]
    Cards["Dashboard cards<br/>(NextAppointmentCard, RecentDealsCard, CustomersListCard, TasksCard, …)"]
    Modals["Form modals<br/>(AddDealModal, EditDealModal, AddCustomerModal, …)"]
  end

  subgraph DATA["src/lib (data/utilities)"]
    Mock["mockData.ts<br/>typed mock data"]
    Utils["utils.ts<br/>cn() helper"]
  end

  N --> L
  L --> SB
  L -->|renders active route| P0
  L -->|renders active route| PD
  L -->|renders active route| PDid
  L -->|renders active route| PC
  L -->|renders active route| PCid

  P0 --> H
  P0 --> Cards
  PD --> H
  PD --> DL
  PDid --> H
  PC --> H
  PCid --> H

  H --> Modals
  DL --> Modals
  Modals --> M

  Cards --> Mock
  DL --> Mock
  Modals --> Mock
  UI --> Utils
```

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
This project was built with the help of **[Antigravity IDE](https://antigravity.dev)** — an agentic coding environment — using **Claude Sonnet** (Anthropic) and **Gemini** (Google DeepMind) models. Their contributions included:

1. **Design interpretation** — Translating Figma snapshots into concrete Tailwind component layouts with accurate spacing, color tokens, and typography.
2. **Scaffolding** — Setting up the Next.js 16 App Router structure, installing dependencies, and wiring up the root layout.
3. **Component generation** — Producing typed React components (`NextAppointmentCard`, `DealsListView`, modals, etc.) with correct mock data bindings.
4. **Responsive design** — Iteratively adding mobile-first breakpoints, converting tables to card views, and converting the sidebar to a bottom nav on small screens.
