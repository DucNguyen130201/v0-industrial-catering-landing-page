'use client';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your organization&apos;s dietary needs, budget, and logistical requirements.'
  },
  {
    number: '02',
    title: 'Menu Planning',
    description: 'Our expert team designs balanced, appealing menus tailored to your specifications.'
  },
  {
    number: '03',
    title: 'Preparation',
    description: 'Using quality ingredients, our kitchen produces meals with strict hygiene standards.'
  },
  {
    number: '04',
    title: 'Delivery & Service',
    description: 'Timely, temperature-controlled delivery with professional on-site support included.'
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From consultation to delivery, we ensure seamless execution every step of the way
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connection line for desktop */}
              {idx < steps.length - 1 && (
                <div className="absolute -right-4 top-12 hidden h-1 w-8 bg-border lg:block" />
              )}

              <div className="space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
