import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectFrontmatter } from '@/lib/mdx';

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

const ProjectCard = ({ slug, frontmatter }: ProjectCardProps) => {
  const { title, description, date, techStack, sourceLink, demoLink, image } = frontmatter;
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{formattedDate}</p>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        {techStack && techStack.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <Link
            href={`/projects/${slug}`}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
          >
            Read More
          </Link>
          
          <div className="flex space-x-4">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label="Source Code"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 