'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Liên hệ với chúng tôi</h2>
              <p className="text-lg text-muted-foreground">
                Sẵn sàng hợp tác với KT Catering? Liên hệ với chúng tôi ngay hôm nay để nhận báo giá được cá nhân hóa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Điện thoại</p>
                  <p className="text-muted-foreground">+84 (28) 1234-5678</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">contact@ktcatering.vn</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Địa chỉ</p>
                  <p className="text-muted-foreground">Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="Tên của bạn"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Địa chỉ Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="email@cua.ban.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="+84 (28) XXXX-XXXX"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Tên công ty
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="Công ty của bạn"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 resize-none"
                placeholder="Hãy cho chúng tôi biết về nhu cầu cơm của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Gửi Yêu cầu
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
