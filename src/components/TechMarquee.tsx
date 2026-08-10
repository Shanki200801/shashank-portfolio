const items = [
  "Go",
  "TypeScript",
  "Python",
  "Java",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GCP Pub/Sub",
  "Cloud Run",
  "Docker",
  "Terraform",
  "Kafka",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "React",
  "Drizzle",
  "GraphQL",
];

/** Infinite horizontal ticker. The list is duplicated so the loop is seamless. */
const TechMarquee = () => (
  <div className="marquee-mask overflow-hidden py-2" aria-hidden="true">
    <div className="flex w-max animate-marquee gap-3">
      {[...items, ...items].map((item, index) => (
        <span key={`${item}-${index}`} className="chip font-mono">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TechMarquee;
