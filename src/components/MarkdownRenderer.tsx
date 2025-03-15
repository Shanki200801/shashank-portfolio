"use client";

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
}

// Define the code component props type
interface CodeProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          img: ({ ...props }) => {
            const { src, alt } = props;
            if (src) {
              // Handle both absolute URLs and relative paths
              const imageSrc = src.startsWith('http') || src.startsWith('/') 
                ? src 
                : `/images/${src}`;
                
              return (
                <span className="block relative w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] my-4 sm:my-6 md:my-8 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={alt || ''}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 75vw"
                    unoptimized
                  />
                </span>
              );
            }
            return <img {...props} alt={props.alt || ''} />;
          },
          a: ({ ...props }) => {
            const { href, children } = props;
            if (href && href.startsWith('/')) {
              return <Link href={href}>{children}</Link>;
            }
            return <a target="_blank" rel="noopener noreferrer" {...props} />;
          },
          code: ({ inline, className, children, ...props }: CodeProps) => {
            if (inline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                  {children}
                </code>
              );
            }
            
            // For block code, return just the code element without a wrapping div
            return (
              <code className={`block overflow-x-auto ${className || ''}`} {...props}>
                {children}
              </code>
            );
          },
          // Add better styling for other markdown elements
          h1: ({ ...props }) => <h1 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4" {...props} />,
          h2: ({ ...props }) => <h2 className="text-xl sm:text-2xl font-bold mt-5 sm:mt-6 mb-3 sm:mb-4" {...props} />,
          h3: ({ ...props }) => <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 sm:mb-3" {...props} />,
          p: ({ ...props }) => <p className="my-3 sm:my-4 text-base sm:text-lg" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc pl-5 sm:pl-6 my-3 sm:my-4" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal pl-5 sm:pl-6 my-3 sm:my-4" {...props} />,
          li: ({ ...props }) => <li className="mb-1 text-base sm:text-lg" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4 text-base sm:text-lg" {...props} />
          ),
          pre: ({ ...props }) => (
            <pre className="overflow-x-auto rounded-lg p-4 text-sm sm:text-base" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 