'use client';

import { Button } from '@/components/ui/button';
import { Download, Github, Terminal } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Download Victoria
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Get started with Victoria on your machine. Choose the method that works best for you.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        {/* Windows Download */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="zen-card p-8 flex flex-col items-center text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.677L24 0v11.551H10.949V1.772zm-10.949 11.06L0 20.551l9.75 1.329v-9.049H0zm10.949 0.089L24 24V12.451H10.949v0.47z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Windows Binaries</h2>
            <p className="text-muted-foreground">
              Download the pre-compiled executables for Windows x64.
              Includes the interpreter and package manager.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button size="lg" className="w-full gap-2" asChild>
              <a href="/downloads/victoria.exe" download>
                <Download className="w-4 h-4" />
                Download victoria.exe
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full gap-2" asChild>
              <a href="/downloads/vic.exe" download>
                <Download className="w-4 h-4" />
                Download vic.exe
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            Place these files in a folder included in your system PATH.
          </p>
        </motion.div>

        {/* Source / GitHub */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="zen-card p-8 flex flex-col items-center text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-zinc-500/10 flex items-center justify-center">
            <Github className="w-8 h-8 text-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Build from Source</h2>
            <p className="text-muted-foreground">
              Clone the repository and build Victoria yourself using Go.
              Recommended for contributors and Linux/macOS users.
            </p>
          </div>
          <div className="w-full bg-black/20 rounded-lg p-4 text-left font-mono text-sm text-muted-foreground overflow-x-auto">
            <p>$ git clone https://github.com/theawakener0/VictoriaLang</p>
            <p>$ cd VictoriaLang</p>
            <p>$ go build -o victoria cmd/victoria/main.go</p>
            <p>$ go build -o vic cmd/vic/main.go</p>
          </div>
          <Button size="lg" variant="outline" className="w-full max-w-xs gap-2" asChild>
            <Link href="https://github.com/theawakener0/VictoriaLang">
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
