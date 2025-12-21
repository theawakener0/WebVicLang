'use client';

import { ShieldCheck, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function CodePreviewSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-24 px-4"
    >
      <div className="container max-w-6xl">
        <div className="zen-card p-1 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 border-b lg:border-b-0 lg:border-r border-border/50">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Familiar, yet fresh.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Victoria combines the best of C-style syntax with modern features like optional static typing, 
                first-class functions, and built-in modules.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { title: "Optional static typing", icon: ShieldCheck },
                  { title: "Zero-config build system", icon: Zap },
                  { title: "Human-readable errors", icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/20 p-4 md:p-8 overflow-hidden">
              <div className="rounded-xl border bg-black/40 backdrop-blur-md shadow-2xl overflow-hidden max-w-full">
                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-4 font-mono">hello.vc</span>
                </div>
                <pre className="p-4 md:p-6 text-xs md:text-sm font-mono overflow-x-auto leading-relaxed text-blue-100/80">
                  <code>{`// Victoria is clean and expressive
define greet(name: string) -> string {
    return "Hello, \${name}!"
}

let message = greet("Victoria")
print(message)

// Optional types where you need them
let count: int = 42
if count > 40 {
    print("The answer is ready.")
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
