import { getProjectData, getProjectFiles } from '@/lib/mdx';
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Project by Shashank';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getProjectFiles().map((filename) => ({ slug: filename.replace(/\.md$/, '') }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = getProjectData(`${slug}.md`);

  return renderOgCard({
    eyebrow: 'Project',
    title: frontmatter.title,
    description: frontmatter.description,
    footer: frontmatter.techStack?.slice(0, 4).join(' · '),
  });
}
