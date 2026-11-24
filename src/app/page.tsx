import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getAllBlogs } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import JsonLd, { profilePageSchema } from "@/components/JsonLd";

const stack = [
  {
    label: "AI & LLMs",
    items: [
      "LLM agents",
      "MCP servers",
      "Gemini API",
      "Claude Code (headless agents)",
      "LLM-based testing & bug triage",
      "Kokoro TTS",
    ],
  },
  {
    label: "Languages",
    items: ["Go", "Python", "TypeScript", "JavaScript", "Java", "SQL", "Shell"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Spring Boot",
      "Django",
      "Flask",
      "Prisma",
      "REST",
      "GraphQL",
      "Microservices",
      "Event-driven architecture",
      "SAGA pattern",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "Data & cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Supabase",
      "Firebase",
      "GCP (Cloud Run, Pub/Sub, Cloud Tasks)",
      "AWS",
    ],
  },
  {
    label: "DevOps & testing",
    items: ["Docker", "Terraform", "GitHub Actions", "Linux", "Jest", "JUnit", "Mockito"],
  },
];

const roles = [
  { title: "Software Engineer", company: "Nimbly Technologies", period: "2024 — Present" },
  { title: "Project Engineer (Contract)", company: "Crio.Do", period: "2024" },
  { title: "Software Development Intern", company: "Tata Consulting Engineers", period: "2021 — 2022" },
];

export default function Home() {
  const projects = getAllProjects().slice(0, 3);
  const blogs = getAllBlogs().slice(0, 2);

  return (
    <div>
      <JsonLd data={profilePageSchema} />

      {/* ---------------- Intro ---------------- */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl font-semibold sm:text-4xl">Shashank</h1>
              <p className="mt-2 text-lg text-muted">Software Engineer</p>

              <p className="mt-6 leading-relaxed text-muted">
                I build backend systems and AI features end to end: event-driven
                microservices in Go, TypeScript and Python, and LLM agents and MCP servers
                that put them to work. Currently at Nimbly Technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View projects
                </Link>
                <Link href="/#contact" className="btn-ghost">
                  Get in touch
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Résumé
                </a>
              </div>
            </div>

            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-line-strong bg-subtle sm:h-36 sm:w-36">
              <Image
                src="/images/profile.jpg"
                alt="Shashank"
                fill
                sizes="9rem"
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ---------------- About ---------------- */}
      <section id="about" className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="About" title="Background" />

          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
              <p>
                I&apos;m a software engineer with a Master&apos;s degree in Computer
                Science. I work mostly in Go, Python and TypeScript, across both front-end
                and back-end, with a strong preference for building the parts that have to
                stay up.
              </p>
              <p>
                At Nimbly I built a multi-tenant AI chatbot that uses LLM agents to turn
                plain-English questions into data queries, and MCP servers that give AI
                agents authenticated access to internal data and services. I also work on
                the distributed backend underneath: Pub/Sub event flows, a SAGA-based bulk
                operations system, and a zero-downtime MongoDB-to-PostgreSQL migration.
              </p>
              <p>
                Outside work I build AI pipelines and small tools that take a tedious
                manual workflow and make it quick, such as a nightly AI video pipeline with
                human approval, and Telegram approvals for my own automations. I
                like collaborative teams — the work I&apos;m most proud of usually involved
                unblocking someone else, or being unblocked by them.
              </p>
            </div>

            <div className="space-y-8 text-sm">
              <div>
                <h3 className="eyebrow mb-3">Experience</h3>
                <ul className="space-y-3">
                  {roles.map((role) => (
                    <li key={role.company}>
                      <p className="font-medium text-[var(--text)]">{role.title}</p>
                      <p className="text-muted">{role.company}</p>
                      <p className="font-mono text-xs text-muted">{role.period}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow mb-3">Education</h3>
                <p className="font-medium text-[var(--text)]">M.Sc. Computer Science</p>
                <p className="text-muted">St. Joseph&apos;s University</p>
                <p className="font-mono text-xs text-muted">2022 — 2024</p>
              </div>

              <div>
                <h3 className="eyebrow mb-3">Certifications</h3>
                <ul className="space-y-1.5 text-muted">
                  <li>AWS Academy Cloud Foundations</li>
                  <li>Scrum Fundamentals Certified</li>
                  <li>British Airways &amp; KPMG virtual programmes — Forage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <h3 className="eyebrow mb-5">Tools I work with</h3>
            <dl className="space-y-3 text-sm">
              {stack.map((group) => (
                <div key={group.label} className="sm:flex sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">{group.label}</dt>
                  <dd className="mt-1 sm:mt-0">{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ---------------- Projects ---------------- */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Work"
            title="Selected projects"
            action={{ label: "All projects", href: "/projects" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                frontmatter={project.frontmatter}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ---------------- Writing ---------------- */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Writing"
            title="Latest posts"
            action={{ label: "All posts", href: "/blog" }}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} slug={blog.slug} frontmatter={blog.frontmatter} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-line" />

      <ContactForm />
    </div>
  );
}
