'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="KT Catering"
                width={32}
                height={32}
                className="h-8 w-auto invert"
              />
              <span className="font-semibold">KT Catering</span>
            </div>
            <p className="text-sm opacity-75">
              Giải pháp cơm công nghiệp B2B cao cấp cho nhà máy, công ty và các tổ chức.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Dịch vụ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Cơm nhà máy
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Ăn uống công ty
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Cơm trường học
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Cơm tiệc
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#why-us" className="opacity-75 hover:opacity-100 transition-opacity">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#process" className="opacity-75 hover:opacity-100 transition-opacity">
                  Quy trình của chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="opacity-75 hover:opacity-100 transition-opacity">
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Liên hệ</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>+84 (28) 1234-5678</li>
              <li>contact@ktcatering.vn</li>
              <li>Thành phố Hồ Chí Minh, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground border-opacity-20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 KT Catering. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
