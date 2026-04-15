'use client';

const steps = [
  {
    number: '01',
    title: 'Tư vấn',
    description: 'Chúng tôi hiểu nhu cầu ăn uống, ngân sách và yêu cầu logistical của tổ chức bạn.'
  },
  {
    number: '02',
    title: 'Lập kế hoạch menu',
    description: 'Đội chuyên gia của chúng tôi thiết kế menu cân bằng, hấp dẫn theo yêu cầu của bạn.'
  },
  {
    number: '03',
    title: 'Chuẩn bị',
    description: 'Sử dụng nguyên liệu chất lượng, bếp của chúng tôi sản xuất bữa ăn với tiêu chuẩn vệ sinh chặt chẽ.'
  },
  {
    number: '04',
    title: 'Giao hàng & Dịch vụ',
    description: 'Giao hàng kịp thời, được kiểm soát nhiệt độ với hỗ trợ chuyên nghiệp tại chỗ bao gồm.'
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Quy trình của chúng tôi</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Từ tư vấn đến giao hàng, chúng tôi đảm bảo thực hiện mượt mà ở mọi bước
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
