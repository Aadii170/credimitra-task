# CreditMitra Users Dashboard

A modern, high-performance dashboard for managing user data, built with Next.js 15 and Tailwind CSS. This project features a premium UI design with glassmorphism effects, smooth animations, and a robust feature set for data visualization and management.



## 🚀 Features

-   **Modern UI/UX**: Built with a "premium" aesthetic using custom gradients, glassmorphism, and responsive layouts.
-   **Dashboard Analytics**: Real-time visual breakdown of user status (Active vs Inactive) with animated progress bars and charts.
-   **Data Management**:
    -   **Paginated Table & Card Views**: Toggle between a detailed table view and a visual grid card view.
    -   **Advanced Filtering**: Filter users by status (All, Active, Inactive).
    -   **Sorting**: Sort users by name (A-Z, Z-A).
    -   **Search**: Real-time search by name or email.
-   **User Details Drawer**: A smooth, animated side drawer displaying comprehensive user profiles.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
-   **Dark Mode Ready**: Architecture supports theme switching (configured via `next-themes`).

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **Language**: TypeScript

## 📂 Project Structure

```
creditmitra/
├── app/                  # Next.js App Router pages and layouts
│   ├── globals.css       # Global styles and Tailwind theme configuration
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Main Dashboard page
├── components/           # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components (Analytics, UserList, etc.)
│   ├── layout/           # Shared layout components (Header, Footer)
│   └── ui/               # Base UI elements (Button, Input, Pagination)
├── lib/                  # Utilities and Hooks
│   ├── hooks/            # Custom React hooks (useUsers.ts)
│   └── utils.ts          # Helper functions (cn, etc.)
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd creditmitra
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Recent Updates

-   **Codebase Cleanup**: Removed boilerplate code, unused assets, and legacy comments for a cleaner production build.
-   **UI Polish**: Enhanced "Controls" with custom select components and improved responsiveness.
-   **Performance**: Optimized rendering with `useMemo` and `useCallback` in data hooks.
-   **Configuration**: Added production-ready `.gitignore`.
