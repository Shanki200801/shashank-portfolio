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
    'Software engineer in Bengaluru building distributed, event-driven backends and AI products with Go, TypeScript, Python and GCP.',
  socials: {
    github: 'https://github.com/shanki200801',
    linkedin: 'https://www.linkedin.com/in/shashank200801',
    twitter: 'https://twitter.com/shashank200801',
  },
  skills: [
    'Go',
    'TypeScript',
    'Python',
    'Java',
    'Distributed Systems',
    'Microservices',
    'Event-Driven Architecture',
    'Google Cloud Platform',
    'PostgreSQL',
    'MongoDB',
    'Next.js',
    'Node.js',
    'Spring Boot',
    'Docker',
    'Terraform',
  ],
} as const;

export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
