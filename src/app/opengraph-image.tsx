import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Shashank — Software Engineer';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: 'Portfolio',
    title: 'Shashank',
    description:
      'Software engineer in Bengaluru. I build web applications end to end, with a focus on reliable backend services in TypeScript and Node.js.',
    footer: 'shashank200801.vercel.app',
  });
}
