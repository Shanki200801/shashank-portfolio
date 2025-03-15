import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define types for project and blog frontmatter
export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  techStack: string[];
  sourceLink?: string;
  demoLink?: string;
  image?: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  description?: string;
  image?: string;
}

// Get all project files
export function getProjectFiles(): string[] {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames.filter(filename => 
    filename.endsWith('.md') && !filename.startsWith('.template')
  );
}

// Get all blog files
export function getBlogFiles(): string[] {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  const filenames = fs.readdirSync(blogsDirectory);
  return filenames.filter(filename => filename.endsWith('.md'));
}

// Get project data from filename
export function getProjectData(filename: string): { 
  slug: string; 
  frontmatter: ProjectFrontmatter; 
  content: string;
} {
  const slug = filename.replace(/\.md$/, '');
  const filePath = path.join(process.cwd(), 'projects', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

// Get blog data from filename
export function getBlogData(filename: string): { 
  slug: string; 
  frontmatter: BlogFrontmatter; 
  content: string;
} {
  const slug = filename.replace(/\.md$/, '');
  const filePath = path.join(process.cwd(), 'blogs', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

// Get all projects data
export function getAllProjects() {
  const files = getProjectFiles();
  const projects = files.map(filename => getProjectData(filename));
  
  // Sort projects by date in descending order
  return projects.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get all blogs data
export function getAllBlogs() {
  const files = getBlogFiles();
  const blogs = files.map(filename => getBlogData(filename));
  
  // Sort blogs by date in descending order
  return blogs.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
} 