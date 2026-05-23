# Exercise: Context Engineering Challenge with Next.js

## Goal

Experience how much better a coding agent performs when it has structured project context.

You will add the same feature twice:

1. **Baseline:** with only the feature request
2. **Context-informed:** after creating a project context file such as `CLAUDE.md`

Compare the quality of the results.

---

## The App

This repository contains a small Next.js app called **Team Directory**.

It has:

- Next.js App Router
- TypeScript
- Static mock team data in `lib/team-data.ts`
- A reusable `PageHeader` component
- A reusable `TeamMemberCard` component
- A `/team` page that currently shows all team members
- Global styling in `app/globals.css`

---

## Your Feature Request

Ask the coding agent to implement this feature:

```text
Add search and department filtering to the team directory page.
Users should be able to search by name, role, location, or email.
Users should also be able to filter by department.
```

Expected behavior:

- Add a search input on `/team`
- Add a department filter on `/team`
- Department options should come from the existing team data
- Search should match name, role, location, or email
- Search and department filters should work together
- Include an empty state when no team members match
- Keep the current visual style
- Reuse existing data types and components where appropriate

---

## Part 1: Baseline — Agent Without Context

Start a fresh agent session.

Use only this prompt:

```text
Add search and department filtering to the team directory page.
Users should be able to search by name, role, location, or email.
Users should also be able to filter by department.
```

Let the agent inspect and modify the codebase.

Do not proactively explain:

- the project structure
- styling conventions
- component conventions
- where data lives
- which commands to run

### Observe

Take notes:

- Did it inspect the right files?
- Did it keep the existing design language?
- Did it reuse `TeamMemberCard`?
- Did it reuse the `TeamMember` type?
- Did it place new code in sensible files?
- Did it make the whole page a client component, or create a smaller client component?
- Did it add an empty state?
- Did it run linting or type checks?
- How many corrections were needed?

---

## Part 2: Create Project Context

Reset the repository to the starter state.

Then create a `CLAUDE.md` file.

Use `CLAUDE.example.md` as inspiration, but adapt it in your own words.

Focus on information that helps the agent work safely:

- What the app does
- Tech stack
- Important commands
- File structure
- Component conventions
- Styling conventions
- Testing/typecheck expectations
- Agent behavior expectations

---

## Part 3: Repeat With Context

Start a fresh agent session or clear the current context.

Use this prompt:

```text
Read CLAUDE.md first.

Then add search and department filtering to the team directory page.
Before editing, inspect the relevant files and propose a short implementation plan.
Follow the existing component and styling conventions.
```

Let the agent implement the feature.

---

## Part 4: Compare Results

| Question | Without context | With context |
|---|---|---|
| Did the agent inspect the right files? |  |  |
| Did it follow project conventions? |  |  |
| Did it reuse existing components/types? |  |  |
| Did it keep changes focused? |  |  |
| Did it preserve the visual style? |  |  |
| Did it add an empty state? |  |  |
| Did it run lint/typecheck? |  |  |
| Did it need corrections? |  |  |
| Was the final result easier to review? |  |  |

---

## Discussion Questions

- What context made the biggest difference?
- What did the agent infer correctly without help?
- What did it miss or get wrong without context?
- What should live in permanent project context?
- What should remain task-specific?
- How would you improve your `CLAUDE.md` after seeing the result?
