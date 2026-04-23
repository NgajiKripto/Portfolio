import { AlertTriangle, X, CheckCircle, Check } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-primary">Why Switch to FastTrackJob?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl p-8 border-t-4 border-destructive">
          <h3 className="text-2xl font-semibold text-destructive mb-6 flex items-center gap-3">
            <AlertTriangle /> The Traditional Way
          </h3>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-2"><X className="text-destructive text-sm mt-1 flex-shrink-0" size={20} /> Endless resume screening and manual filtering.</li>
            <li className="flex items-start gap-2"><X className="text-destructive text-sm mt-1 flex-shrink-0" size={20} /> Ghosting and long wait times for candidates.</li>
            <li className="flex items-start gap-2"><X className="text-destructive text-sm mt-1 flex-shrink-0" size={20} /> Biased decisions based on outdated storage systems.</li>
            <li className="flex items-start gap-2"><X className="text-destructive text-sm mt-1 flex-shrink-0" size={20} /> Cluttered HR inboxes with irrelevant applications.</li>
          </ul>
        </div>
        
        <div className="glass-card rounded-xl p-8 border-t-4 border-accent bg-accent/5">
          <h3 className="text-2xl font-semibold text-accent flex items-center gap-3 mb-6">
            <CheckCircle /> The Fast-Track Way
          </h3>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-2"><Check className="text-accent text-sm mt-1 flex-shrink-0" size={20} /> Instant AI matching with zero data retention.</li>
            <li className="flex items-start gap-2"><Check className="text-accent text-sm mt-1 flex-shrink-0" size={20} /> Live leaderboards provide immediate feedback.</li>
            <li className="flex items-start gap-2"><Check className="text-accent text-sm mt-1 flex-shrink-0" size={20} /> Objective, skill-based radar evaluations.</li>
            <li className="flex items-start gap-2"><Check className="text-accent text-sm mt-1 flex-shrink-0" size={20} /> Automated quotas to cut off irrelevant spam.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
