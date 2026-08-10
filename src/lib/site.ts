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
    'Software engineer in Bengaluru. I build web applications end to end, with a focus on reliable backend services in TypeScript and Node.js.',
  socials: {
    github: 'https://github.com/shanki200801',
    linkedin: 'https://www.linkedin.com/in/shashank200801',
    twitter: 'https://twitter.com/shashank200801',
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'Python',
    'Java',
    'Go',
    'SQL',
    'C#',
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
    'Test-Driven Development',
  ],
} as const;

export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
