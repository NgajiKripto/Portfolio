import Link from "next/link";
import { Bolt } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 dark:bg-slate-950/70 backdrop-blur-md shadow-sm border-b border-border/50">
      <div className="container mx-auto flex justify-between items-center h-20 px-6">
        <Link href="/" className="text-xl font-bold text-foreground flex items-center gap-2">
          <Bolt className="text-accent" />
          FastTrackJob
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#" className="text-muted-foreground hover:text-foreground hover:scale-105 transition-transform duration-200">
            For HR
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground hover:scale-105 transition-transform duration-200">
            For Job Seekers
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground hover:scale-105 transition-transform duration-200">
            Features
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground hover:scale-105 transition-transform duration-200">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform duration-200 shadow-sm px-6 py-2 text-sm">
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  );
}
