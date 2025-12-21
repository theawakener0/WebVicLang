'use client';

import { Code2, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  return (
    <section className="w-full py-32 container px-4 md:px-6">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Designed for Humans</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto font-light">
          We believe that programming should be accessible and enjoyable. 
          Victoria is built on principles that prioritize the developer experience.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Minimalist Syntax",
            description: "No semicolons required, no complex keywords. Just clean, readable code that looks like what it does.",
            icon: Code2
          },
          {
            title: "Instant Feedback",
            description: "Fast interpreter and clear error messages that act as micro-tutorials, helping you learn as you go.",
            icon: Zap
          },
          {
            title: "Batteries Included",
            description: "Built-in support for JSON, HTTP, Math, and more. Start building real applications immediately.",
            icon: ShieldCheck
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="zen-card p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
