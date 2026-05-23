import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function Home() {
  return (
    <main>
      <section className="hero-panel">
        <PageHeader
          eyebrow="Modern AI Stack Workshop"
          title="A tiny app for testing agent context"
          description="This starter project is intentionally simple: a polished team directory with enough structure and conventions for coding agents to either follow — or ignore."
        />

        <div className="hero-actions">
          <Link className="button-primary" href="/team">
            Open team directory
          </Link>
          <a className="button-secondary" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js docs
          </a>
        </div>
      </section>

      <section className="brief-grid" aria-label="Exercise overview">
        <article>
          <span>01</span>
          <h2>Run once without context</h2>
          <p>Ask your coding agent to add search and filtering with only the feature request.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Create project context</h2>
          <p>Write a concise CLAUDE.md that captures architecture, conventions, and commands.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Run again with context</h2>
          <p>Compare the quality, scope, reviewability, and number of corrections needed.</p>
        </article>
      </section>
    </main>
  );
}
