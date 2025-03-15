import Image from "next/image";
import Link from 'next/link';
import { getAllProjects, getAllBlogs } from '@/lib/mdx';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  // Get the latest 3 projects and blogs
  const projects = getAllProjects().slice(0, 3);
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Shashank</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Full Stack Developer with expertise in TypeScript, Java, Python, and C#.
                Experienced in frameworks like Node.js, Spring Boot, Django, React, and Redux.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-200"
                >
                  View Projects
                </Link>
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md transition-colors duration-200"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/profile.jpg"
                  alt="Shashank"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a highly skilled full-stack developer with expertise in both front-end and back-end technologies. 
              Proficient in languages such as TypeScript, Java, Python, and C#. Experienced in frameworks like 
              Node.js (Express), Spring Boot, Django, Flask, React, and Redux.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I have a strong background in databases including MongoDB, PostgreSQL, and Redis Cache. 
              I also have profound knowledge of cloud services like AWS and Google Cloud.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Currently working as a Full Stack Developer at Nimbly Technologies, where I&apos;ve streamlined bulk operations, 
              implemented new features, and migrated from Firebase to MongoDB + AWS for enhanced scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            <Link
              href="/projects"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
            >
              View All
            </Link>
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
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Blog Posts</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            <Link
              href="/blog"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
            >
              View All
            </Link>
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
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
