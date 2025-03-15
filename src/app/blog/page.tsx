import { getAllBlogs } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog | Shashank',
  description: 'Read my latest blog posts about technology, development, and more.',
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts, ideas, and insights about technology, development, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              slug={blog.slug}
              frontmatter={blog.frontmatter}
            />
          ))}
        </div>
        
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No blog posts found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
} 