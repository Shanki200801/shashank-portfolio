import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { BlogFrontmatter } from "@/lib/mdx";

interface BlogCardProps {
  slug: string;
  frontmatter: BlogFrontmatter;
  index?: number;
}

const BlogCard = ({ slug, frontmatter, index = 0 }: BlogCardProps) => {
  const { title, date, description, image, tags } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="reveal surface card-hover group flex h-full flex-col overflow-hidden rounded-2xl"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="relative h-44 overflow-hidden bg-subtle">
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
          <div className="h-full w-full bg-gradient-to-br from-accent-500/25 via-brand-500/15 to-transparent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent opacity-70" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <FiCalendar className="h-3.5 w-3.5" />
          {formattedDate}
        </p>

        <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-brand-400">
          {title}
        </h3>

        {description && (
          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">{description}</p>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="chip font-mono">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-brand-400">
          Read post
          <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
