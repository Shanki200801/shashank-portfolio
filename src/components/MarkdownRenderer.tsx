"use client";

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
}

/**
 * Long-form renderer. Typography comes from the `prose` styles defined in
 * globals.css, so only the elements that need real behaviour (images, links,
 * tables) are overridden here.
 */
const MarkdownRenderer = ({ content }: MarkdownRendererProps) => (
  <div className="prose prose-base sm:prose-lg max-w-none">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        img: ({ src, alt }) => {
          if (!src || typeof src !== 'string') return null;
          const imageSrc = src.startsWith('http') || src.startsWith('/') ? src : `/images/${src}`;

          return (
            <span className="relative my-8 block aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-subtle">
              <Image
                src={imageSrc}
                alt={alt || ''}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48rem"
                unoptimized
              />
            </span>
          );
        },
        a: ({ href, children, ...props }) => {
          if (href && href.startsWith('/')) {
            return <Link href={href}>{children}</Link>;
          }
          if (href && href.startsWith('#')) {
            return <a href={href}>{children}</a>;
          }
          return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
              {children}
            </a>
          );
        },
        table: ({ children, ...props }) => (
          <div className="my-6 overflow-x-auto rounded-lg border border-line">
            <table className="!my-0 w-full" {...props}>
              {children}
            </table>
          </div>
        ),
        hr: () => <hr className="my-10 border-line" />,
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownRenderer;
