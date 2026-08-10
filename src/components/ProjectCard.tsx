import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ProjectFrontmatter } from "@/lib/mdx";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

const ProjectCard = ({ slug, frontmatter }: ProjectCardProps) => {
  const { title, description, date, techStack, sourceLink, demoLink } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <article className="surface card-hover flex h-full flex-col rounded-lg p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-medium">
          <Link href={`/projects/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted">{formattedDate}</span>
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{description}</p>

      {techStack && techStack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
        <Link href={`/projects/${slug}`} className="link-accent text-sm">
          Read more
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
              <FaGithub className="h-4 w-4" />
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
              <FiExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
