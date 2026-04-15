'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
                Giải pháp cơm công nghiệp uy tín quy mô lớn
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Cung cấp bữa ăn B2B cao cấp cho nhà máy, công ty và các tổ chức. Tin tưởng chuyên môn của chúng tôi trong chuẩn bị thức ăn quy mô lớn với chất lượng và tiêu chuẩn vệ sinh được đảm bảo.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Báo giá
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Tìm hiểu thêm
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Bữa ăn/ngày</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Khách hàng</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <p className="text-sm text-muted-foreground">Năm kinh nghiệm</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-accent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-5xl">🍽️</div>
                <p className="text-lg font-semibold text-secondary-foreground">Cơm công nghiệp chuyên nghiệp</p>
                <p className="text-sm text-secondary-foreground opacity-75">Chuẩn bị bữa ăn quy mô lớn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent opacity-5" />
    </section>
  );
}
