'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full pt-48 pb-24 md:pt-64 md:pb-32 flex flex-col items-center text-center px-4"
    >
      <div className="space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Victoria v0.1.0 is now in preview
        </motion.div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          Programming <span className="font-serif italic font-light opacity-80">simplified.</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl font-light leading-relaxed">
          Victoria is a learning-first programming language designed for clarity, joy, and progressive complexity. 
          Focus on your logic, not the boilerplate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="rounded-full px-10 h-12 text-base shadow-xl shadow-primary/20" asChild>
            <Link href="/docs/LANGUAGE">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-12 text-base glass" asChild>
            <Link href="/docs/PHILOSOPHY">
              Our Philosophy
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
