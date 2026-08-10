import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Shashank — Software Engineer';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: 'Software Engineer',
    title: 'I build systems that hold up in production.',
    description:
      'Distributed, event-driven backends and AI products. Go, TypeScript, Python, GCP.',
    footer: 'shashank200801.vercel.app',
  });
}
