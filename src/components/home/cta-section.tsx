'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="w-full py-32 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="container max-w-5xl rounded-[3rem] border border-white/5 bg-zinc-900 p-12 md:p-24 text-center space-y-10 overflow-hidden relative shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -ml-48 -mb-48" />
        
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl text-white">
            Ready to experience <br className="hidden sm:block" /> Victoria?
          </h2>
          <p className="mx-auto max-w-[600px] text-zinc-400 text-lg md:text-xl font-light">
            Join the community and start building with Victoria today. 
            Experience programming as it should be.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 pt-4">
          <Button size="lg" className="rounded-full px-10 h-14 text-lg font-medium bg-white text-black hover:bg-zinc-200 border-none shadow-xl shadow-white/10" asChild>
            <Link href="/docs/LANGUAGE">
              Read the Docs
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-medium bg-transparent border-white/20 text-white hover:bg-white/10 transition-all duration-300" asChild>
            <Link href="https://github.com/theawakener0/VictoriaLang">
              View on GitHub
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
