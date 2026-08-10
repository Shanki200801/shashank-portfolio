import { getAllBlogs } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Blog',
  description:
    'Writing by Shashank on software engineering, focus and productivity, and endurance running.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Shashank',
    description: 'Writing on software engineering, focus, and running.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Writing"
          title="Blog"
          description="Notes on building software, staying focused, and running long distances."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} slug={blog.slug} frontmatter={blog.frontmatter} />
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="py-12 text-center text-muted">No posts yet. Check back soon.</p>
        )}
      </div>
    </div>
  );
}
