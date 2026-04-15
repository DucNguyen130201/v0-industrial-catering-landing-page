'use client';

import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Factory Catering',
    description: 'Customized meal solutions for large workforce operations with reliable daily delivery.',
    features: ['High-volume capacity', 'Nutritional balance', 'Cost-effective pricing']
  },
  {
    title: 'Corporate Dining',
    description: 'Premium meal services for company events, conferences, and daily employee dining.',
    features: ['Professional presentation', 'Customizable menus', 'On-site coordination']
  },
  {
    title: 'School Catering',
    description: 'Age-appropriate, nutritionally certified meals for educational institutions.',
    features: ['Certified nutrition', 'Allergy management', 'Quality ingredients']
  },
  {
    title: 'Event Catering',
    description: 'Full-service catering for corporate events, banquets, and special occasions.',
    features: ['Complete setup', 'Professional staff', 'Flexible menus']
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive catering solutions tailored to your organization&apos;s unique needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
