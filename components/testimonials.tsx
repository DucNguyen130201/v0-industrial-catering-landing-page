'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyen Minh',
    company: 'GlobalTech Factory',
    role: 'Operations Manager',
    content: 'KT Catering has been exceptional. Their meals are consistently high-quality and our employees love the variety. Highly reliable delivery.',
    rating: 5
  },
  {
    name: 'Tran Linh',
    company: 'Vision Corp',
    role: 'HR Director',
    content: 'The customization options and professional service have exceeded our expectations. They handle our 800+ daily meals without any issues.',
    rating: 5
  },
  {
    name: 'Pham Duc',
    company: 'Central Elementary School',
    role: 'Principal',
    content: 'Parents appreciate the nutritious, balanced meals. KT&apos;s team is professional and always responsive to our dietary requirements.',
    rating: 5
  },
  {
    name: 'Hoang Thu',
    company: 'Premier Financial',
    role: 'Facilities Manager',
    content: 'Outstanding catering service for our corporate events. Flexible, professional, and consistently delivers excellence on every occasion.',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trusted by factories, companies, and institutions across the region
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
              </div>
              
              <p className="mb-6 text-foreground">{testimonial.content}</p>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
