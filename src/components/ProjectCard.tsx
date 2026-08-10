import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { ProjectFrontmatter } from "@/lib/mdx";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
  index?: number;
}

const ProjectCard = ({ slug, frontmatter, index = 0 }: ProjectCardProps) => {
  const { title, description, date, techStack, sourceLink, demoLink, image } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <article
      className="reveal surface card-hover group flex h-full flex-col overflow-hidden rounded-2xl"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Link href={`/projects/${slug}`} className="relative block h-44 overflow-hidden bg-subtle">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            unoptimized
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-brand-500/25 via-accent-500/15 to-transparent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent opacity-70" />
        <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur">
          {formattedDate}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold transition-colors group-hover:text-brand-400">
          <Link href={`/projects/${slug}`}>{title}</Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">{description}</p>

        {techStack && techStack.length > 0 && (
          <div className="mb-6 mt-5 flex flex-wrap gap-1.5">
            {techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="chip font-mono">
                {tech}
              </span>
            ))}
            {techStack.length > 5 && (
              <span className="chip font-mono">+{techStack.length - 5}</span>
            )}
          </div>
        )}

        {/* mt-auto keeps the footer flush with the bottom of every card in a row */}
        <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors hover:text-accent-400"
          >
            Read more
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div className="flex items-center gap-3">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code`}
                className="text-muted transition-colors hover:text-[var(--text)]"
              >
                <FaGithub className="h-[18px] w-[18px]" />
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="text-muted transition-colors hover:text-[var(--text)]"
              >
                <FiExternalLink className="h-[18px] w-[18px]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
