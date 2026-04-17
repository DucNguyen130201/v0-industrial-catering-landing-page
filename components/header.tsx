'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Animate header on load
    gsap.from('header', {
      duration: 0.8,
      opacity: 0,
      y: -20,
      ease: 'power3.out',
    });

    // Stagger menu items
    gsap.from('header [data-nav-item]', {
      duration: 0.6,
      opacity: 0,
      y: -10,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="KT Catering"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden font-semibold text-foreground sm:inline">KT Catering</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          <Link href="#services" data-nav-item className="text-sm text-foreground hover:text-accent transition-colors">
            Dịch vụ
          </Link>
          <Link href="#process" data-nav-item className="text-sm text-foreground hover:text-accent transition-colors">
            Quy trình
          </Link>
          <Link href="#why-us" data-nav-item className="text-sm text-foreground hover:text-accent transition-colors">
            Tại sao chọn chúng tôi
          </Link>
          <Link href="#testimonials" data-nav-item className="text-sm text-foreground hover:text-accent transition-colors">
            Đánh giá
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        <Link
          href="#contact"
          data-nav-item
          className="hidden md:inline-block rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Báo giá
        </Link>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#services"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dịch vụ
            </Link>
            <Link
              href="#process"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quy trình
            </Link>
            <Link
              href="#why-us"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tại sao chọn chúng tôi
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đánh giá
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-primary px-6 py-2 text-center text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Báo giá
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
