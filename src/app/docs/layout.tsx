import { getAllDocs } from '@/lib/docs';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = getAllDocs();

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 py-32">
      {/* Mobile Docs Menu */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="h-12 w-12 rounded-full shadow-xl bg-primary text-primary-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-none h-full border-none rounded-none px-6 py-6 glass">
            <div className="flex flex-col gap-6 h-full">
              <div className="flex items-center justify-between">
                <span className="font-bold text-2xl">Docs</span>
                <span className="text-xs text-muted-foreground">Navigate topics</span>
              </div>
              <ScrollArea className="flex-1">
                <div className="flex flex-col gap-2">
                  {/* Quick links */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <SheetClose asChild>
                      <Link href="/docs/LANGUAGE" className="rounded-lg px-4 py-3 bg-muted/30 hover:bg-muted/50">Language</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/docs/PHILOSOPHY" className="rounded-lg px-4 py-3 bg-muted/30 hover:bg-muted/50">Philosophy</Link>
                    </SheetClose>
                  </div>
                  {/* All docs */}
                  {docs.map((doc) => (
                    <SheetClose asChild key={doc.slug}>
                      <Link
                        href={`/docs/${doc.slug}`}
                        className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10"
                      >
                        {doc.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </ScrollArea>
              <div>
                <SheetClose asChild>
                  <Button className="w-full rounded-full" asChild>
                    <Link href="/docs/LANGUAGE">Get Started</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <aside className="fixed top-24 z-30 -ml-2 hidden h-[calc(100vh-8rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full py-6 pr-6">
          <div className="flex flex-col gap-8">
            <div className="px-2">
              <h4 className="mb-4 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Documentation</h4>
              <div className="flex flex-col gap-1">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="group flex w-full items-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-primary/5 text-muted-foreground hover:text-primary"
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
      <main className="relative max-w-3xl px-4 md:px-0">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
}
