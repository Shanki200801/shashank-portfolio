import { getBlogData, getBlogFiles } from '@/lib/mdx';
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Blog post by Shashank';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getBlogFiles().map((filename) => ({ slug: filename.replace(/\.md$/, '') }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = getBlogData(`${slug}.md`);

  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return renderOgCard({
    eyebrow: 'Blog',
    title: frontmatter.title,
    description: frontmatter.description,
    footer: formattedDate,
  });
}
