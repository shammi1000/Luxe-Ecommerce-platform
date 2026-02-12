# E-commerce Frontend Design

A modern, responsive e-commerce frontend application built with **Next.js 16**, **React 19**, and **Tailwind CSS**. This project showcases a clean and premium design for an online store, featuring essential pages and components for a seamless user experience.

## ✨ Features

-   **Modern Tech Stack**: Built with the latest Next.js 16 (App Router) and React 19.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
-   **Component-Based Architecture**: Modular and reusable components for maintainability.
-   **Rich UI Components**: Utilizes **Radix UI** primitives and **Tailwind CSS** for accessible and customizable UI elements.
-   **Key Pages**:
    -   **Home**: Includes Hero section, Featured Products, Collections showcase, and Newsletter signup.
    -   **About**: Information about the brand/store.
    -   **Contact**: Contact form and details.
    -   **Cart**: Shopping cart interface.
    -   **Stories**: Blog or stories section.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   **Node.js**: Version 18.17 or later (LTS recommended).
-   **Package Manager**: [pnpm](https://pnpm.io/) is recommended (based on `pnpm-lock.yaml`), but you can use `npm` or `yarn`.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd v0-e-commerce-frontend-design-main
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    # or
    npm install
    ```

### Running the Development Server

Start the development server with TurboPack for fast implementation:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
pnpm build
# or
npm run build
```

To start the production server:

```bash
pnpm start
# or
npm run start
```

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About page
│   ├── cart/             # Cart page
│   ├── contact/          # Contact page
│   ├── stories/          # Stories/Blog page
│   ├── globals.css       # Global styles (Tailwind imports)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── ui/               # UI primitives (buttons, inputs, etc.)
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Application footer
│   └── ...               # Other section components
├── public/               # Static assets
└── lib/                  # Utility functions
```

## 🛠️ Technologies Used

-   **[Next.js](https://nextjs.org/)**: The React Framework for the Web.
-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework.
-   **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible components for building high-quality design systems.
-   **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.
-   **[React Hook Form](https://react-hook-form.com/)**: Performant, flexible and extensible forms with easy-to-use validation.
-   **[Zod](https://zod.dev/)**: TypeScript-first schema declaration and validation library.
-   **[Recharts](https://recharts.org/)**: Redefined chart library built with React and D3.


