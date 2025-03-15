# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. This portfolio showcases projects, blog posts, and professional information with a clean, minimalist design.

![Portfolio Website](/public/images/portfolio.jpg)

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Project Showcase**: Dynamic project cards with detailed project pages
- **Blog Section**: Markdown-based blog with syntax highlighting
- **Contact Form**: Client-side validated contact form with email redirection
- **Dark Mode Support**: Built-in dark mode styling with CSS variables
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Optimized loading with Next.js App Router and React Server Components
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Markdown](https://daringfireball.net/projects/markdown/) with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) with syntax highlighting
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

- Node.js 18.18.0 or later
- npm or yarn

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shanki200801/shashank-portfolio.git
   cd shashank-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio-website/
├── public/             # Static assets
│   └── images/         # Image files
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   └── lib/            # Utility functions and helpers
├── projects/           # Markdown files for projects
├── blogs/              # Markdown files for blog posts
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## 🔄 Development Workflow

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Build for production**:
   ```bash
   npm run build
   ```

3. **Start the production server**:
   ```bash
   npm start
   ```

4. **Lint your code**:
   ```bash
   npm run lint
   ```

## 🖋️ Adding Content

### Projects

Add new projects by creating markdown files in the `projects/` directory with the following format:

```md
---
title: "Project Title"
description: "Short project description"
date: "YYYY-MM-DD"
techStack: ["Tech1", "Tech2", "Tech3"]
sourceLink: "https://github.com/shashank200801/project"
demoLink: "https://project-demo.com"
image: "/images/project-image.webp"
---

## Project Details

Project content in markdown...
```

### Blog Posts

Add new blog posts by creating markdown files in the `blogs/` directory with the following format:

```md
---
title: "Blog Post Title"
description: "Short blog description"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog-image.webp"
---

Blog content in markdown...
```

## 🚢 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js automatically and use the optimal build settings

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🧪 Code Quality

```bash
# Run ESLint to check code quality
npm run lint
# or
yarn lint
```

## 📝 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in React
- [Vercel](https://vercel.com/) - Deployment platform
