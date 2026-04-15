'use client';

import { Shield, Leaf, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Safety & Hygiene',
    description: 'ISO-certified kitchen with strict food safety protocols and regular health inspections.'
  },
  {
    icon: Leaf,
    title: 'Quality Ingredients',
    description: 'We source premium local and sustainable ingredients to ensure nutritional excellence.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced chefs and nutritionists dedicated to culinary excellence and client satisfaction.'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'From 100 to 5,000+ meals daily, we adapt seamlessly to your organization&apos;s growth.'
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose KT Catering</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Excellence in every meal, reliability in every delivery
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="flex gap-6 rounded-lg border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
