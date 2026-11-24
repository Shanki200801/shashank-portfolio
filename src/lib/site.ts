/** Single source of truth for anything that needs the public origin. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shashank200801.vercel.app'
).replace(/\/$/, '');

export const SITE = {
  name: 'Shashank',
  fullName: 'Shashank S',
  jobTitle: 'Software Engineer',
  employer: 'Nimbly Technologies',
  location: 'Bengaluru, Karnataka, India',
  email: 'shashank200801@gmail.com',
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.jpg`,
  description:
    'Software engineer in Bengaluru. I build backend systems and AI features end to end: event-driven microservices in Go, TypeScript and Python, plus LLM agents and MCP servers.',
  socials: {
    github: 'https://github.com/shanki200801',
    linkedin: 'https://www.linkedin.com/in/shashank200801',
    twitter: 'https://twitter.com/shashank200801',
  },
  skills: [
    'LLM Agents',
    'Model Context Protocol (MCP)',
    'Gemini API',
    'Claude Code',
    'Go',
    'Python',
    'TypeScript',
    'JavaScript',
    'Java',
    'SQL',
    'Node.js',
    'Next.js',
    'React',
    'React Native',
    'Spring Boot',
    'Django',
    'Flask',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'AWS',
    'GCP',
    'Docker',
    'Terraform',
    'REST APIs',
    'GraphQL',
    'Microservices',
    'Event-Driven Architecture',
    'GCP Pub/Sub',
    'Cloud Run',
    'Supabase',
    'Kafka',
    'Maestro',
  ],
} as const;

export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
