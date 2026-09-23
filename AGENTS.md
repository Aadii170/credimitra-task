# AGENTS.md

## Repository notes
- App: Next.js 16 app-router dashboard UI.
- Validation: `npm run lint` and `npm run build`.
- `npm run lint` currently passes with warnings only; common existing warnings are related to raw `<img>` usage and a few unused imports.

## Styling guidance
- Prefer semantic theme tokens over hardcoded palette values: `bg-card`, `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-secondary`, `bg-brand`, and related token classes.
- Dashboard highlight gradients are driven by custom surface tokens such as `surface-highlight-start`, `surface-highlight-middle`, and `surface-highlight-end` defined in `app/globals.css`.
- Shared layout components (`components/layout/Header.tsx`, `components/layout/Footer.tsx`) should stay theme-aware rather than hardcoding dark-only colors.
