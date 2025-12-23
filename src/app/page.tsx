import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/hero-section';
import { CodePreviewSection } from '@/components/home/code-preview-section';

// Lazy load below-the-fold components to improve initial load performance
const FeaturesSection = dynamic(() => import('@/components/home/features-section').then(mod => mod.FeaturesSection));
const InstallationSection = dynamic(() => import('@/components/home/installation-section').then(mod => mod.InstallationSection));
const CTASection = dynamic(() => import('@/components/home/cta-section').then(mod => mod.CTASection));

export default function Home() {
  return (
    <div className="flex flex-col items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <HeroSection />
      <CodePreviewSection />
      <FeaturesSection />
      <InstallationSection />
      <CTASection />
    </div>
  );
}
