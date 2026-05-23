import type { TeamMember } from "@/lib/team-data";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article className="member-card">
      <div className="member-card__topline">
        <div className="member-card__avatar" aria-hidden="true">
          {initials}
        </div>
        <span className="department-pill">{member.department}</span>
      </div>

      <div>
        <h2>{member.name}</h2>
        <p className="member-card__role">{member.role}</p>
      </div>

      <dl className="member-card__details">
        <div>
          <dt>Location</dt>
          <dd>{member.location}</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>{member.focus}</dd>
        </div>
      </dl>

      <a className="member-card__email" href={`mailto:${member.email}`}>
        {member.email}
      </a>
    </article>
  );
}
