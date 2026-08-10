import { FiCloud, FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import type { ReactNode } from "react";

interface SkillGroup {
  label: string;
  icon: ReactNode;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    label: "Languages",
    icon: <FiCode className="h-5 w-5" />,
    items: ["TypeScript", "Go", "Python", "Java", "SQL", "Shell", "C#"],
  },
  {
    label: "Backend & Frameworks",
    icon: <FiLayers className="h-5 w-5" />,
    items: ["Node.js", "Spring Boot", "Django", "Flask", "Next.js", "React", "React Native", "Redux", "Prisma", "Drizzle"],
  },
  {
    label: "Data & Storage",
    icon: <FiDatabase className="h-5 w-5" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "pgmq", "Kafka"],
  },
  {
    label: "Cloud & Platform",
    icon: <FiCloud className="h-5 w-5" />,
    items: ["GCP", "Cloud Run", "Pub/Sub", "AWS", "Terraform", "Docker", "CI/CD", "REST", "GraphQL", "Gen AI"],
  },
];

const Skills = () => (
  <div className="grid gap-5 sm:grid-cols-2">
    {groups.map((group, index) => (
      <div
        key={group.label}
        className="reveal surface card-hover rounded-2xl p-6"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-400">
            {group.icon}
          </span>
          <h3 className="font-semibold">{group.label}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span key={item} className="chip font-mono">
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skills;
