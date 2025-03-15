import { getBlogFiles, getBlogData } from '@/lib/mdx';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { Metadata } from 'next';

type BlogParams = {
  slug: string;
};

export async function generateMetadata({ 
  params 
}: { 
  params: BlogParams 
}): Promise<Metadata> {
  const slug = params.slug;
  const { frontmatter } = getBlogData(`${slug}.md`);
  
  return {
    title: `${frontmatter.title} | Shashank`,
    description: frontmatter.description || `Read ${frontmatter.title} on Shashank's blog`,
  };
}

export function generateStaticParams() {
  const files = getBlogFiles();
  
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function BlogPage({ 
  params 
}: { 
  params: BlogParams 
}) {
  const slug = params.slug;
  const { frontmatter, content } = getBlogData(`${slug}.md`);
  const { title, date, image } = frontmatter;
  
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
          href="/blog"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6 sm:mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blog
        </Link>
        
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">{formattedDate}</p>
          
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