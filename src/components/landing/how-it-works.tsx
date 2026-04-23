import { Bolt } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-primary">How It Works</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 transform -translate-y-1/2"></div>
        
        <div className="bg-card rounded-xl p-6 text-center flex-1 z-10 border border-border/30 shadow-sm w-full">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-semibold mx-auto mb-3 shadow-md">1</div>
          <h4 className="text-sm font-bold mb-1">Pre-Scan Validator</h4>
          <p className="text-xs text-muted-foreground">Instantly verify skills before deep analysis.</p>
        </div>
        
        <div className="bg-card rounded-xl p-6 text-center flex-1 z-10 border border-accent shadow-lg relative transform md:-translate-y-4 w-full">
          <div className="absolute -top-3 -right-3">
            <Bolt className="text-accent text-3xl animate-pulse" />
          </div>
          <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-semibold mx-auto mb-3 shadow-md">2</div>
          <h4 className="text-sm font-bold mb-1 text-accent">Instant Result</h4>
          <p className="text-xs text-muted-foreground">Real-time match scoring and ranking.</p>
        </div>
        
        <div className="bg-card rounded-xl p-6 text-center flex-1 z-10 border border-border/30 shadow-sm w-full">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-semibold mx-auto mb-3 shadow-md">3</div>
          <h4 className="text-sm font-bold mb-1">Smart Interview</h4>
          <p className="text-xs text-muted-foreground">Automated scheduling for top matches.</p>
        </div>
      </div>
    </section>
  );
}
