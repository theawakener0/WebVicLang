import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass flex h-14 w-full max-w-4xl items-center justify-between rounded-full border px-6 shadow-lg">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-lg tracking-tight">Victoria</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/docs/LANGUAGE" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Docs
            </Link>
            <Link href="/download" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Download
            </Link>
            <Link href="/docs/PHILOSOPHY" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Philosophy
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="https://github.com/theawakener0/VictoriaLang" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary mr-2"
            >
              GitHub
            </Link>
            <Button size="sm" className="rounded-full h-8 px-4" asChild>
              <Link href="/docs/LANGUAGE">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full max-w-none h-full border-none rounded-none px-6 py-6 glass"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl">Victoria</span>
                    <span className="text-xs text-muted-foreground">A learning-first language</span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link href="/docs/LANGUAGE" className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10">
                        Documentation
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/download" className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10">
                        Download
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/docs/PHILOSOPHY" className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10">
                        Philosophy
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="https://github.com/theawakener0/VictoriaLang" className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10">
                        GitHub
                      </Link>
                    </SheetClose>
                  </nav>
                  <div className="pt-2">
                    <SheetClose asChild>
                      <Button className="w-full rounded-full h-11" asChild>
                        <Link href="/docs/LANGUAGE">Get Started</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
