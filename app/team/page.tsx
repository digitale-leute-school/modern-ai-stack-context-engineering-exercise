import { PageHeader } from "@/components/PageHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers } from "@/lib/team-data";

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        eyebrow="People"
        title="Team directory"
        description="Meet the people behind the product. This page currently renders all team members from static mock data."
      />

      <section className="directory-summary" aria-label="Directory summary">
        <p>
          <strong>{teamMembers.length}</strong> team members across Engineering, Product, Design,
          Marketing, and People.
        </p>
      </section>

      <section className="team-grid" aria-label="Team members">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>
    </main>
  );
}
