import { getBlogFiles, getBlogData } from '@/lib/mdx';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { Metadata } from 'next';
import JsonLd, { blogPostingSchema, breadcrumbSchema } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getBlogData(`${slug}.md`);
  const description =
    frontmatter.description || `Read ${frontmatter.title} on Shashank's blog`;

  return {
    title: frontmatter.title,
    description,
    keywords: frontmatter.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: frontmatter.title,
      description,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [SITE.fullName],
      tags: frontmatter.tags,
      // og:image is generated per-post by opengraph-image.tsx in this folder.
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description,
    },
  };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getBlogFiles().map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

interface BlogPageProps {
  params: Promise<Params>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { frontmatter, content } = getBlogData(`${slug}.md`);
  const { title, date, description, image, tags } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // ~220 wpm is a reasonable reading pace for technical prose.
  const wordCount = content.trim().split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 220));

  return (
    <article className="py-12 sm:py-16">
      <JsonLd
        data={blogPostingSchema({
          title,
          description,
          slug,
          date,
          image,
          tags,
          wordCount,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: title, path: `/blog/${slug}` },
        ])}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand-400"
        >
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar className="h-3.5 w-3.5 text-brand-400" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiClock className="h-3.5 w-3.5 text-brand-400" />
              {readingMinutes} min read
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
          )}

          {tags && tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="chip font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {image && (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-subtle">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48rem"
                priority
                unoptimized
              />
            </div>
          )}
        </header>

        <div className="mt-12 border-t border-line pt-10">
          <MarkdownRenderer content={content} />
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-400"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
