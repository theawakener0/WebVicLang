'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export function InstallationSection() {
  return (
    <section className="w-full py-24 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start coding in seconds.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Victoria is distributed as a single executable. No complex installers, no dependencies hell. 
              Just download, add to PATH, and run.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  Download for Windows
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link href="/docs/LANGUAGE">
                  <Terminal className="mr-2 h-4 w-4" />
                  Installation Guide
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/80 rounded-xl p-6 shadow-2xl border border-white/10 font-mono text-sm text-zinc-300"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-2">
              <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> victoria --version</p>
              <p className="text-zinc-500">Victoria version 0.1.0 (windows/amd64)</p>
              <p className="pt-2"><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> vic install http_server</p>
              <p className="text-zinc-500">Installing package http_server...</p>
              <p className="text-zinc-500">✓ Package installed successfully.</p>
              <p className="pt-2"><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse">_</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
