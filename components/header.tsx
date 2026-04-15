'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="#services" className="text-sm text-foreground hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-sm text-foreground hover:text-accent transition-colors">
            Process
          </Link>
          <Link href="#why-us" className="text-sm text-foreground hover:text-accent transition-colors">
            Why Us
          </Link>
          <Link href="#testimonials" className="text-sm text-foreground hover:text-accent transition-colors">
            Testimonials
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
          className="hidden md:inline-block rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get a Quote
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
              Services
            </Link>
            <Link
              href="#process"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#why-us"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-primary px-6 py-2 text-center text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
