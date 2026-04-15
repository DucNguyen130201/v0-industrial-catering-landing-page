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
              Premium B2B industrial catering solutions for factories, companies, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Factory Catering
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Corporate Dining
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  School Catering
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  Event Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#why-us" className="opacity-75 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="opacity-75 hover:opacity-100 transition-opacity">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="opacity-75 hover:opacity-100 transition-opacity">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>+84 (28) 1234-5678</li>
              <li>contact@ktcatering.vn</li>
              <li>Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground border-opacity-20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 KT Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
