import Link from "next/link";
import { Bolt, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-primary/20 bg-primary text-primary-foreground/70">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="text-lg font-bold text-primary-foreground flex items-center gap-2">
          <Bolt className="text-accent" />
          FastTrackJob
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-xs">
          <Link href="#" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-accent transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-accent transition-colors flex items-center gap-1">
            <ShieldCheck size={14} /> GDPR Compliant
          </Link>
          <Link href="#" className="hover:text-accent transition-colors">
            Contact Us
          </Link>
        </nav>
        <div className="text-xs text-accent text-center md:text-right">
          © {new Date().getFullYear()} FastTrackJob. AI-Driven Recruitment.
        </div>
      </div>
    </footer>
  );
}
