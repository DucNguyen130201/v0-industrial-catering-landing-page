'use client';

import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Cơm nhà máy',
    description: 'Giải pháp bữa ăn tùy chỉnh cho các hoạt động quy mô lớn với giao hàng hàng ngày uy tín.',
    features: ['Sức chứa lớn', 'Cân bằng dinh dưỡng', 'Giá cạnh tranh']
  },
  {
    title: 'Ăn uống công ty',
    description: 'Dịch vụ bữa ăn cao cấp cho các sự kiện công ty, hội thảo và ăn uống nhân viên hàng ngày.',
    features: ['Trình bày chuyên nghiệp', 'Menu tùy chỉnh', 'Phối hợp tại chỗ']
  },
  {
    title: 'Cơm trường học',
    description: 'Bữa ăn phù hợp với độ tuổi, được chứng nhận về dinh dưỡng cho các tổ chức giáo dục.',
    features: ['Dinh dưỡng chứng nhận', 'Quản lý dị ứng', 'Nguyên liệu chất lượng']
  },
  {
    title: 'Cơm tiệc',
    description: 'Dịch vụ cơm toàn phần cho các sự kiện công ty, tiệc và dịp đặc biệt.',
    features: ['Thiết lập hoàn chỉnh', 'Nhân viên chuyên nghiệp', 'Menu linh hoạt']
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Dịch vụ của chúng tôi</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Giải pháp cơm toàn diện được điều chỉnh theo nhu cầu riêng của tổ chức bạn
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
