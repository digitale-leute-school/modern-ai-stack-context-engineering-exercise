export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: "Engineering" | "Product" | "Design" | "Marketing" | "People";
  location: string;
  email: string;
  focus: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "maya-keller",
    name: "Maya Keller",
    role: "Engineering Manager",
    department: "Engineering",
    location: "Berlin",
    email: "maya.keller@example.com",
    focus: "Platform reliability",
  },
  {
    id: "jonas-richter",
    name: "Jonas Richter",
    role: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Hamburg",
    email: "jonas.richter@example.com",
    focus: "Design systems",
  },
  {
    id: "nora-schmidt",
    name: "Nora Schmidt",
    role: "Product Lead",
    department: "Product",
    location: "Munich",
    email: "nora.schmidt@example.com",
    focus: "Customer workflows",
  },
  {
    id: "samir-ali",
    name: "Samir Ali",
    role: "Product Manager",
    department: "Product",
    location: "Cologne",
    email: "samir.ali@example.com",
    focus: "Activation and onboarding",
  },
  {
    id: "lea-hartmann",
    name: "Lea Hartmann",
    role: "Brand Designer",
    department: "Design",
    location: "Berlin",
    email: "lea.hartmann@example.com",
    focus: "Visual identity",
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    role: "Product Designer",
    department: "Design",
    location: "Remote",
    email: "elena.rossi@example.com",
    focus: "Research and prototyping",
  },
  {
    id: "felix-bauer",
    name: "Felix Bauer",
    role: "Growth Marketer",
    department: "Marketing",
    location: "Düsseldorf",
    email: "felix.bauer@example.com",
    focus: "Lifecycle campaigns",
  },
  {
    id: "clara-weber",
    name: "Clara Weber",
    role: "Content Strategist",
    department: "Marketing",
    location: "Berlin",
    email: "clara.weber@example.com",
    focus: "Editorial programs",
  },
  {
    id: "thomas-nguyen",
    name: "Thomas Nguyen",
    role: "People Partner",
    department: "People",
    location: "Frankfurt",
    email: "thomas.nguyen@example.com",
    focus: "Team development",
  },
  {
    id: "amina-yusuf",
    name: "Amina Yusuf",
    role: "Talent Acquisition Lead",
    department: "People",
    location: "Remote",
    email: "amina.yusuf@example.com",
    focus: "Hiring operations",
  },
];
