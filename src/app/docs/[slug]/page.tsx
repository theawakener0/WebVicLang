import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/components/code-block';
import React from 'react';

interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-24">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight sm:text-5xl">{doc.meta.title || slug}</h1>
        {doc.meta.description && (
          <p className="text-xl text-muted-foreground font-light leading-relaxed">{doc.meta.description}</p>
        )}
      </div>
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-12 mb-6" {...props} />,
            h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-16 mb-6 border-b border-border/50 pb-2" {...props} />,
            h3: ({ ...props }) => <h3 className="text-xl font-bold mt-10 mb-4" {...props} />,
            p: ({ ...props }) => <p className="leading-relaxed text-muted-foreground mb-6" {...props} />,
            ul: ({ ...props }) => <ul className="my-6 ml-6 list-disc space-y-2 text-muted-foreground" {...props} />,
            ol: ({ ...props }) => <ol className="my-6 ml-6 list-decimal space-y-2 text-muted-foreground" {...props} />,
            li: ({ ...props }) => <li className="pl-2" {...props} />,
            table: ({ ...props }) => (
              <div className="my-8 w-full overflow-y-auto rounded-xl border border-border/50">
                <table className="w-full border-collapse text-sm" {...props} />
              </div>
            ),
            thead: ({ ...props }) => <thead className="bg-muted/50" {...props} />,
            th: ({ ...props }) => <th className="border-b border-border/50 px-4 py-3 text-left font-bold" {...props} />,
            td: ({ ...props }) => <td className="border-b border-border/50 px-4 py-3 text-muted-foreground" {...props} />,
            code: ({ className, children, ...props }: React.ComponentPropsWithoutRef<'code'>) => {
              const match = /language-(\w+)/.exec(className || '');
              const code = String(children).replace(/\n$/, '');
              
              if (match) {
                return <CodeBlock language={match[1]}>{code}</CodeBlock>;
              }
              return (
                <code className="rounded bg-muted/50 px-1.5 py-0.5 font-mono text-sm font-medium text-foreground" {...props}>
                  {children}
                </code>
              );
            },
            pre: ({ children }) => <>{children}</>,
            blockquote: ({ ...props }) => (
              <blockquote className="border-l-2 border-primary/20 pl-6 italic text-muted-foreground my-8" {...props} />
            ),
          }}
        >
          {doc.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
