# Project Context

## What this project is

This is a small Next.js training app for a context engineering exercise. It displays a team directory using static mock data.

The main feature area is `/team`.

## Tech stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: global CSS in `app/globals.css`
- Data: static mock data in `lib/team-data.ts`
- Package manager: npm

## Important commands

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## Project structure

- `app/layout.tsx`: shared root layout and navigation
- `app/page.tsx`: homepage and exercise overview
- `app/team/page.tsx`: team directory page
- `app/globals.css`: all global styles and component classes
- `components/PageHeader.tsx`: reusable page heading component
- `components/TeamMemberCard.tsx`: reusable card for one person
- `lib/team-data.ts`: `TeamMember` type and mock team member data

## Coding conventions

- Use TypeScript for all components and data helpers.
- Import app files using the `@/` alias.
- Keep components small and focused.
- Reuse existing components before creating new ones.
- Keep static data and data types in `lib/`.
- Prefer derived values from existing data over hardcoded duplicates.
- Avoid broad rewrites unless the task explicitly asks for them.

## Next.js conventions

- Server Components are the default.
- Only add `"use client"` where interactivity is required.
- Prefer moving interactive behavior into a focused client component instead of converting an entire route when practical.

## Styling conventions

- Styling lives in `app/globals.css`.
- Reuse existing class naming style, for example `member-card__details`.
- Preserve the warm editorial visual direction: paper background, dark ink, clay accent, olive secondary accents.
- Use semantic HTML and accessible labels for form controls.
- Keep responsive behavior in CSS media queries.

## Feature expectations

When adding search/filtering to the team directory:

- Search should match `name`, `role`, `location`, and `email`.
- Department filter options should be derived from `teamMembers`.
- Search and department filters should combine.
- Include an empty state when no people match.
- Preserve `TeamMemberCard` for rendering people.

## Agent instructions

- Inspect relevant files before editing.
- Propose a short implementation plan before making changes.
- Make the smallest change that satisfies the task.
- Run `npm run typecheck` and `npm run lint` after changes when dependencies are installed.
- Explain any assumptions or skipped checks.
