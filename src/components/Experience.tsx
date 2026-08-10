import { FiBriefcase } from "react-icons/fi";

interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
}

const roles: Role[] = [
  {
    company: "Nimbly Technologies",
    title: "Software Engineer",
    period: "Apr 2024 — Present",
    location: "Bengaluru, IN",
    current: true,
    highlights: [
      "Built and shipped a multi-tenant AI chatbot platform using LLM agents for natural-language query generation, contextual conversation memory and intelligent data retrieval — live in production across multiple organisations.",
      "Architected event-driven workflows across a distributed microservices backend on GCP Pub/Sub, powering Inventory Management, Asset Tracker and Bulk Operations.",
      "Re-architected bulk operations around the SAGA pattern with compensating event flows, turning an inconsistent distributed workflow into an atomic, fault-tolerant one.",
      "Owned a zero-downtime MongoDB → PostgreSQL migration of the Gallery module, keeping both stores in sync via a pgmq-backed job sustaining 500 req/sec into Supabase.",
      "Migrated 16+ backend microservices off deprecated Gen1 Cloud Functions to Cloud Run — reworking readiness probes, multipart upload streaming and Cloud Tasks callback routing.",
      "Designed and built Asset Tracker from scratch in Go: QR-based asset identification, automated audit workflows over REST, and maintenance-cost analytics — in production with enterprise customers.",
    ],
    stack: ["Go", "TypeScript", "Python", "GCP", "Pub/Sub", "PostgreSQL", "MongoDB"],
  },
  {
    company: "Crio.Do",
    title: "Project Engineer",
    period: "Jan 2024 — Apr 2024",
    location: "Bengaluru, IN",
    highlights: [
      "Developed backend projects in Java and Spring Boot using test-driven development, with unit tests written in Mockito.",
      "Guided learners through debugging and technical blockers, resolving tickets to improve learning outcomes.",
    ],
    stack: ["Java", "Spring Boot", "Mockito", "TDD"],
  },
  {
    company: "Tata Consulting Engineers",
    title: "Software Development Intern",
    period: "Dec 2021 — Apr 2022",
    location: "Bengaluru, IN",
    highlights: [
      "Designed web forms that streamlined workflows by surfacing project specification documents and inventory requirements, using ASP.NET and C#.",
      "Built OpenXML SDK libraries to automate report generation from templates across multiple projects.",
    ],
    stack: ["C#", "ASP.NET", "OpenXML"],
  },
];

const Experience = () => (
  <div className="relative">
    {/* Vertical spine */}
    <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-line to-transparent sm:left-[19px]" />

    <div className="space-y-8">
      {roles.map((role, index) => (
        <div
          key={role.company}
          className="reveal relative pl-12 sm:pl-16"
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          <span
            className={`absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border sm:h-10 sm:w-10 ${
              role.current
                ? "border-brand-400/50 bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30"
                : "border-line bg-elevated text-muted"
            }`}
          >
            <FiBriefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>

          <article className="surface card-hover rounded-2xl p-5 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold sm:text-xl">
                {role.title}
                <span className="text-brand-400"> @ {role.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{role.period}</p>
            </div>

            <p className="mt-1 text-sm text-muted">
              {role.location}
              {role.current && (
                <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-mint-400/10 px-2 py-0.5 text-[11px] font-medium text-mint-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
                  Current
                </span>
              )}
            </p>

            <ul className="mt-4 space-y-2.5">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <span key={tech} className="chip font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
