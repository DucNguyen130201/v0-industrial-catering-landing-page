'use client';

import { Shield, Leaf, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'An toàn & Vệ sinh',
    description: 'Bếp được chứng nhận ISO với các giao thức an toàn thực phẩm chặt chẽ và kiểm tra sức khỏe thường xuyên.'
  },
  {
    icon: Leaf,
    title: 'Nguyên liệu chất lượng',
    description: 'Chúng tôi tìm nguồn nguyên liệu bền vững và địa phương cao cấp để đảm bảo sự xuất sắc về dinh dưỡng.'
  },
  {
    icon: Users,
    title: 'Đội chuyên gia',
    description: 'Những đầu bếp và chuyên gia dinh dưỡng giàu kinh nghiệm tận tâm phục vụ các khách hàng.'
  },
  {
    icon: TrendingUp,
    title: 'Khả năng mở rộng',
    description: 'Từ 100 đến 5.000+ bữa ăn mỗi ngày, chúng tôi thích ứng mượt mà với sự phát triển của tổ chức bạn.'
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Tại sao chọn KT Catering</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Sự xuất sắc trong mỗi bữa ăn, độ tin cậy trong mỗi lần giao hàng
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
