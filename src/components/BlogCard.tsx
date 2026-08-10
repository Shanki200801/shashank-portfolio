import Link from "next/link";
import { BlogFrontmatter } from "@/lib/mdx";

interface BlogCardProps {
  slug: string;
  frontmatter: BlogFrontmatter;
}

const BlogCard = ({ slug, frontmatter }: BlogCardProps) => {
  const { title, date, description } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="surface card-hover group flex h-full flex-col rounded-lg p-5"
    >
      <p className="font-mono text-xs text-muted">{formattedDate}</p>

      <h3 className="mt-2 font-medium leading-snug group-hover:underline">{title}</h3>

      {description && (
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{description}</p>
      )}

      <span className="link-accent mt-auto pt-5 text-sm">Read post</span>
    </Link>
  );
};

export default BlogCard;
