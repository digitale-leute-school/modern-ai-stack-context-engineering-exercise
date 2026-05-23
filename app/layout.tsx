import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Directory",
  description: "A small Next.js app for context engineering training.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <nav className="site-nav" aria-label="Main navigation">
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true" />
              Team Directory
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/team">Team</Link>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
