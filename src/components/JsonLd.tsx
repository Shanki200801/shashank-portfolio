import { SITE, absoluteUrl } from '@/lib/site';

/** Injects a schema.org JSON-LD block. Server component — no client cost. */
const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    // The payload is built from our own content, never user input.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  image: SITE.image,
  email: `mailto:${SITE.email}`,
  jobTitle: SITE.jobTitle,
  description: SITE.description,
  worksFor: {
    '@type': 'Organization',
    name: SITE.employer,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: "St. Joseph's University, Bengaluru" },
    { '@type': 'CollegeOrUniversity', name: "St. Joseph's College (Autonomous), Bengaluru" },
  ],
  knowsAbout: [...SITE.skills],
  sameAs: [SITE.socials.github, SITE.socials.linkedin, SITE.socials.twitter],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: `${SITE.name} — ${SITE.jobTitle}`,
  description: SITE.description,
  inLanguage: 'en',
  publisher: { '@id': `${SITE.url}/#person` },
};

export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE.url}/#profilepage`,
  url: SITE.url,
  mainEntity: { '@id': `${SITE.url}/#person` },
};

export const breadcrumbSchema = (
  trail: Array<{ name: string; path: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const blogPostingSchema = ({
  title,
  description,
  slug,
  date,
  image,
  tags,
  wordCount,
}: {
  title: string;
  description?: string;
  slug: string;
  date: string;
  image?: string;
  tags?: string[];
  wordCount: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': absoluteUrl(`/blog/${slug}#post`),
  headline: title,
  description,
  url: absoluteUrl(`/blog/${slug}`),
  datePublished: date,
  dateModified: date,
  wordCount,
  keywords: tags?.join(', '),
  inLanguage: 'en',
  image: image ? absoluteUrl(image) : SITE.image,
  author: { '@id': `${SITE.url}/#person` },
  publisher: { '@id': `${SITE.url}/#person` },
  mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
});

export const softwareProjectSchema = ({
  title,
  description,
  slug,
  date,
  techStack,
  sourceLink,
  demoLink,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  techStack?: string[];
  sourceLink?: string;
  demoLink?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  '@id': absoluteUrl(`/projects/${slug}#project`),
  name: title,
  description,
  url: absoluteUrl(`/projects/${slug}`),
  dateCreated: date,
  programmingLanguage: techStack,
  keywords: techStack?.join(', '),
  codeRepository: sourceLink,
  image: image ? absoluteUrl(image) : SITE.image,
  author: { '@id': `${SITE.url}/#person` },
  ...(demoLink
    ? {
        targetProduct: {
          '@type': 'SoftwareApplication',
          name: title,
          url: demoLink,
          applicationCategory: 'WebApplication',
          operatingSystem: 'Any',
        },
      }
    : {}),
});
