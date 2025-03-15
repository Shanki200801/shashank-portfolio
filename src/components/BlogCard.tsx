import Image from 'next/image';
import Link from 'next/link';
import { BlogFrontmatter } from '@/lib/mdx';

interface BlogCardProps {
  slug: string;
  frontmatter: BlogFrontmatter;
}

const BlogCard = ({ slug, frontmatter }: BlogCardProps) => {
  const { title, date, description, image } = frontmatter;
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
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
          
          {description && (
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard; 