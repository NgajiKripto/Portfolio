import { BrainCircuit, Trophy, Shield, CalendarDays } from "lucide-react";

const featureData = [
  {
    icon: BrainCircuit,
    bgColor: 'bg-primary',
    textColor: 'text-primary-foreground',
    title: "Zero-Storage AI Matcher",
    description: "Our privacy-first AI evaluates candidates in real-time without storing sensitive resume data long-term."
  },
  {
    icon: Trophy,
    bgColor: 'bg-accent',
    textColor: 'text-accent-foreground',
    title: "Live Leaderboard & Radar",
    description: "Visualize candidate strengths instantly. See who ranks highest based on objective skill assessments."
  },
  {
    icon: Shield,
    bgColor: 'bg-primary/80',
    textColor: 'text-primary-foreground',
    title: "Auto-Cutoff Quota",
    description: "Set strict criteria. Applications that don't meet the baseline are automatically filtered, saving hours."
  },
  {
    icon: CalendarDays,
    bgColor: 'bg-primary/60',
    textColor: 'text-primary-foreground',
    title: "Automated HR Workflow",
    description: "From pre-screening to interview scheduling, automate the tedious steps and focus on human connection."
  }
];

function FeatureCard({ feature }: { feature: typeof featureData[0] }) {
  const Icon = feature.icon;
  return (
    <div className="glass-card rounded-xl p-6 flex items-start gap-6 group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/30">
      <div className={`${feature.bgColor} ${feature.textColor} p-3 rounded-lg flex-shrink-0 group-hover:-translate-y-1 transition-transform duration-300`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-2xl font-semibold text-primary mb-1">{feature.title}</h4>
        <p className="text-base text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary">Revolutionary Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
