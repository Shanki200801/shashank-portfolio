import { getAllBlogs } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Blog — Engineering, Focus & Endurance',
  description:
    'Writing by Shashank on software engineering, distributed systems, focus and productivity, and endurance running.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Shashank',
    description:
      'Writing on software engineering, focus and productivity, and endurance running.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="py-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="Writing"
          title="Blog"
          description="Notes on building software, staying focused, and running further than I thought I could."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              slug={blog.slug}
              frontmatter={blog.frontmatter}
              index={index % 3}
            />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="surface rounded-2xl py-16 text-center">
            <p className="text-muted">No blog posts found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
