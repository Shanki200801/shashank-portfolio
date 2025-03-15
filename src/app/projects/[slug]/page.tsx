import { getProjectFiles, getProjectData } from '@/lib/mdx';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const slug = params.slug;
  const { frontmatter } = getProjectData(`${slug}.md`);
  
  return {
    title: `${frontmatter.title} | Shashank`,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  const files = getProjectFiles();
  
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.slug;
  const { frontmatter, content } = getProjectData(`${slug}.md`);
  const { title, date, techStack, sourceLink, demoLink, image } = frontmatter;
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6 sm:mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>
        
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">{formattedDate}</p>
          
          {techStack && techStack.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base font-medium rounded-md transition-colors duration-200"
              >
                <FaGithub className="mr-1.5 sm:mr-2" />
                Source Code
              </a>
            )}
            
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium rounded-md transition-colors duration-200"
              >
                <FaExternalLinkAlt className="mr-1.5 sm:mr-2" />
                Live Demo
              </a>
            )}
          </div>
          
          {image && (
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 75vw"
                unoptimized
              />
            </div>
          )}
        </div>
        
        <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
} 