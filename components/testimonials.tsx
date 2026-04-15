'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyễn Minh',
    company: 'Nhà máy GlobalTech',
    role: 'Quản lý Hoạt động',
    content: 'KT Catering thực sự tuyệt vời. Bữa ăn của họ luôn chất lượng cao và nhân viên của chúng tôi yêu thích sự đa dạng. Giao hàng cực kỳ uy tín.',
    rating: 5
  },
  {
    name: 'Trần Linh',
    company: 'Vision Corp',
    role: 'Giám đốc Nhân sự',
    content: 'Các tùy chọn tùy chỉnh và dịch vụ chuyên nghiệp vượt quá kỳ vọng của chúng tôi. Họ xử lý 800+ bữa ăn hàng ngày của chúng tôi mà không có vấn đề gì.',
    rating: 5
  },
  {
    name: 'Phạm Đức',
    company: 'Trường Tiểu học Trung tâm',
    role: 'Hiệu trưởng',
    content: 'Phụ huynh đánh giá cao bữa ăn bổ dưỡng, cân bằng. Đội của KT chuyên nghiệp và luôn đáp ứng nhu cầu ăn uống của chúng tôi.',
    rating: 5
  },
  {
    name: 'Hoàng Thu',
    company: 'Tài chính Hàng đầu',
    role: 'Quản lý Cơ sở',
    content: 'Dịch vụ cơm tuyệt vời cho các sự kiện công ty của chúng tôi. Linh hoạt, chuyên nghiệp và luôn cung cấp sự xuất sắc ở mọi dịp.',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Khách hàng nói gì về chúng tôi</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Được tin tưởng bởi các nhà máy, công ty và tổ chức trên toàn khu vực
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
