import { getAllProjects } from '@/lib/mdx';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Projects',
  description:
    'Software projects by Shashank — side projects, learning exercises and shipped products across TypeScript, Go and Next.js.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Shashank',
    description: 'Side projects and shipped products.',
    url: '/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Things I've built, mostly to solve a problem or to learn a technology properly."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="py-12 text-center text-muted">No projects found. Check back soon.</p>
        )}
      </div>
    </div>
  );
}
