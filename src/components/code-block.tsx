'use client';

import React from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-border/50 bg-muted/30 p-1 overflow-hidden group/code">
      <div className="bg-muted/50 px-4 py-2 border-b border-border/50 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">
          {language || 'text'}
        </span>
        <button 
          onClick={onCopy}
          className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto">
        <code className="text-sm font-mono leading-relaxed bg-transparent p-0">{children}</code>
      </pre>
    </div>
  );
};
