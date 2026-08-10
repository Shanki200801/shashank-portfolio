import { getProjectFiles, getProjectData } from '@/lib/mdx';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiArrowLeft, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { Metadata } from 'next';
import JsonLd, { breadcrumbSchema, softwareProjectSchema } from '@/components/JsonLd';

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getProjectData(`${slug}.md`);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.techStack,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `/projects/${slug}`,
      type: 'article',
      // og:image is generated per-project by opengraph-image.tsx in this folder.
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getProjectFiles().map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

interface ProjectPageProps {
  params: Promise<Params>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { frontmatter, content } = getProjectData(`${slug}.md`);
  const { title, description, date, techStack, sourceLink, demoLink, image } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <article className="py-12 sm:py-16">
      <JsonLd
        data={softwareProjectSchema({
          title,
          description,
          slug,
          date,
          techStack,
          sourceLink,
          demoLink,
          image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: title, path: `/projects/${slug}` },
        ])}
      />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-[var(--text)]"
        >
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <header className="mt-8">
          <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <FiCalendar className="h-3.5 w-3.5" />
            {formattedDate}
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 leading-relaxed text-muted">{description}</p>
          )}

          {techStack && techStack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {(sourceLink || demoLink) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {sourceLink && (
                <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <FaGithub className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          )}

          {image && (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-subtle">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 56rem"
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
            href="/projects"
            className="group inline-flex items-center gap-2 link-accent text-sm"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All projects
          </Link>
        </div>
      </div>
    </article>
  );
}
