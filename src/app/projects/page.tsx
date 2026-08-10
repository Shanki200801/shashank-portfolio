import { getAllProjects } from '@/lib/mdx';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Projects — Go, TypeScript & Distributed Systems',
  description:
    'Software projects by Shashank: a peer-to-peer encrypted file transfer CLI in Go, a daily research-and-writing platform on Next.js, and more.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Shashank',
    description:
      'Side projects and shipped products across Go, TypeScript, Next.js and cloud infrastructure.',
    url: '/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Side projects, learning exercises and shipped products. Each one exists because I wanted to solve a problem or understand a technology properly."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
              index={index % 3}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="surface rounded-2xl py-16 text-center">
            <p className="text-muted">No projects found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
