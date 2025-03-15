import { getAllProjects } from '@/lib/mdx';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects | Shashank',
  description: 'Explore my projects and work.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
            />
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
} 