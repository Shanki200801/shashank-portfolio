import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { getAllProjects, getAllBlogs } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import TechMarquee from "@/components/TechMarquee";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import JsonLd, { profilePageSchema } from "@/components/JsonLd";

const stats = [
  { value: "16+", label: "microservices migrated to Cloud Run" },
  { value: "500/s", label: "req sustained in a zero-downtime DB migration" },
  { value: "3", label: "platform modules architected end to end" },
  { value: "2", label: "products built from scratch, in production" },
];

export default function Home() {
  const projects = getAllProjects().slice(0, 3);
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <div>
      <JsonLd data={profilePageSchema} />

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal is-visible">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
                </span>
                Software Engineer @ Nimbly Technologies
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="gradient-text">Shashank</span>
                <br />
                I build systems that
                <br className="hidden sm:block" /> hold up in production.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Backend-leaning full-stack engineer working on distributed, event-driven
                systems and AI products. Lately: Go services, GCP Pub/Sub workflows, SAGA-based
                consistency, and zero-downtime database migrations — plus the occasional
                side project written purely to learn something new.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <FiMapPin className="h-4 w-4 text-brand-400" />
                  Bengaluru, India
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  M.Sc. Computer Science
                </span>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View Projects
                  <FiArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="btn-ghost">
                  Contact Me
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <FiDownload className="h-4 w-4" />
                  Résumé
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-500/25 via-accent-500/20 to-mint-400/20 blur-3xl" />
                <div className="relative">
                  <div className="rounded-full bg-gradient-to-tr from-brand-500 via-accent-500 to-mint-400 p-[3px] shadow-2xl shadow-brand-500/20">
                    <div className="relative h-60 w-60 overflow-hidden rounded-full bg-subtle sm:h-72 sm:w-72">
                      <Image
                        src="/images/profile.jpg"
                        alt="Shashank"
                        fill
                        sizes="(max-width: 640px) 15rem, 18rem"
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Floating accent cards — pushed fully clear of the portrait */}
                  <div className="surface absolute left-0 top-8 hidden -translate-x-[88%] rounded-xl px-3 py-2 shadow-xl lg:block">
                    <p className="font-mono text-[11px] text-muted">go build ./...</p>
                  </div>
                  <div className="surface absolute bottom-10 right-0 hidden translate-x-[62%] rounded-xl px-3 py-2 shadow-xl lg:block">
                    <p className="font-mono text-[11px] text-muted">
                      <span className="text-mint-400">✓</span> deploy: cloud-run
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <TechMarquee />
          </div>

          {/* Stats */}
          <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="surface card-hover rounded-2xl p-5">
                <p className="gradient-text font-mono text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section id="about" className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="About"
            title="What I actually work on"
            align="center"
          />

          <div className="reveal mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="surface rounded-2xl p-7 sm:p-9">
              <div className="space-y-5 leading-relaxed text-muted">
                <p>
                  I&apos;m a software engineer at{" "}
                  <span className="font-medium text-[var(--text)]">Nimbly Technologies</span>,
                  where I work on the backend of a multi-tenant operations platform used by
                  enterprise customers. Most of my day is spent on distributed systems
                  problems: making event-driven workflows behave predictably, keeping data
                  consistent across services, and moving production systems between
                  databases and runtimes without anyone noticing.
                </p>
                <p>
                  I built our Asset Tracker product from scratch in{" "}
                  <span className="font-medium text-[var(--text)]">Go</span> — QR-based asset
                  identification, automated audit workflows and cost analytics — and shipped a
                  multi-tenant AI chatbot platform that turns natural language into real
                  queries against customer data, with conversation memory and contextual
                  retrieval. Before that I re-architected our bulk operations pipeline around
                  the SAGA pattern so a distributed workflow that used to drift out of sync
                  became atomic and recoverable.
                </p>
                <p>
                  The through-line is depth over breadth: I like owning a system end to end —
                  design, implementation, migration, and the on-call consequences. Outside of
                  work I write Go and TypeScript side projects to learn things properly
                  (a peer-to-peer encrypted transfer CLI, a daily research-and-writing
                  platform), and I run long distances on trails.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="surface rounded-2xl p-7">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-400">
                  Education
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="font-medium">M.Sc. Computer Science</p>
                    <p className="text-sm text-muted">St. Joseph&apos;s University</p>
                    <p className="font-mono text-xs text-muted">2022 — 2024</p>
                  </div>
                  <div>
                    <p className="font-medium">B.Sc. CS, Mathematics & Physics</p>
                    <p className="text-sm text-muted">St. Joseph&apos;s College (Autonomous)</p>
                    <p className="font-mono text-xs text-muted">2019 — 2022</p>
                  </div>
                </div>
              </div>

              <div className="surface rounded-2xl p-7">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-400">
                  Certifications
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    AWS Academy Cloud Foundations
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    Scrum Fundamentals Certified — SCRUMstudy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Experience ---------------- */}
      <section id="experience" className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="Where I've worked and what I shipped there."
          />
          <Experience />
        </div>
      </section>

      {/* ---------------- Skills ---------------- */}
      <section id="skills" className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Toolkit"
            title="Technologies"
            description="The stack I reach for, grouped by where it lives in the system."
          />
          <Skills />
        </div>
      </section>

      {/* ---------------- Featured projects ---------------- */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Work"
            title="Featured Projects"
            description="Things I built, mostly to solve a problem or learn a language properly."
            action={{ label: "View all", href: "/projects" }}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                frontmatter={project.frontmatter}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Featured blog ---------------- */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Writing"
            title="Latest Posts"
            description="Notes on engineering, focus, and running long distances."
            action={{ label: "View all", href: "/blog" }}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                slug={blog.slug}
                frontmatter={blog.frontmatter}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
