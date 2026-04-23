import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container mx-auto px-6 py-24 mb-12">
      <div className="bg-primary rounded-2xl p-12 text-center shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-primary-foreground mb-6">Ready to revolutionize your hiring process?</h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of modern HR teams finding the right talent instantly without the clutter.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground rounded-full hover:scale-105 transition-all shadow-lg text-lg px-10 py-4 hover:bg-accent/90">
            Start Hiring for Free
          </Button>
        </div>
      </div>
    </section>
  );
}
