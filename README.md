# CreditMitra Users Dashboard

**Live Demo:** [https://user-dashboard-tan-alpha.vercel.app/](https://user-dashboard-tan-alpha.vercel.app/)

<<<<<<< HEAD
## 🏃‍♂️ How to Run Locally
=======

>>>>>>> f180a4b211e2035e96cebeae5e8c0b165331215b

1.  **Clone & Install**
    ```bash
    git clone https://github.com/Aadii170/credimitra-task.git
    cd credimitra-task
    npm install
    ```
2.  **Start Dev Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🔄 Data & Async Simulation

-   **Source:** The user data is located in `public/users.json`.
-   **Simulation:** We simulate a realistic API call in `lib/hooks/useUsers.ts`. It fetches the static JSON file but uses `await new Promise(r => setTimeout(r, 300))` to introduce a **300ms network latency**. This ensures the UI handles "loading" states gracefully without feeling sluggish.

## 🎨 Key Design & Implementation Decisions

-   **Drawer vs. Modal:** I chose a **Side Drawer** for user details instead of a modal. This maintains context (you can still see the list) while providing more vertical space for detailed profile information, which feels more "premium" and less disruptive.
-   **Framer Motion over CSS:** Framer Motion is used for complex state transitions (like the drawer entering, list items staggering in). It offers superior control over physics-based animations (springs) that pure CSS transitions cannot easily replicate, making the app feel alive.
-   **Micro-interactions:** Interactive elements (buttons, cards) have subtle hover scales (`scale-[1.02]`) and focus rings. These provide immediate feedback, improving accessibility and making the interface feel responsive and tangible.
-   **Theme Persistence:** The theme preference is persisted in `localStorage` under the key `theme` (via `next-themes`), ensuring a consistent experience across sessions.

## 🚀 Improvements (With More Time)

-   **Virtualization:** For lists with thousands of users, I would implement `react-window` to render only visible rows, significantly improving performance.
-   **Server-Side Pagination:** Currently, pagination is client-side. Moving this to the "backend" (or an API route) would be better for massive datasets.
-   **Unit Tests:** Adding Jest/React Testing Library tests for critical components (like `UserList` and utility hooks) to ensure stability.
