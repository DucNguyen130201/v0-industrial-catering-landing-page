"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_iq0xtvr";
const EMAILJS_TEMPLATE_ADMIN = "template_ojy4uji";
const EMAILJS_TEMPLATE_CUSTOMER = "template_d6l5jzl";
const EMAILJS_PUBLIC_KEY = "A1ujYUrq2O-6KLXTC";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ADMIN,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground">
                Sẵn sàng hợp tác với CÔNG TY TNHH KỲ THƯ? Liên hệ với chúng tôi
                ngay hôm nay để nhận báo giá được cá nhân hóa.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                {
                  icon: Phone,
                  label: "Điện thoại",
                  value: "0915 163 447",
                },
                { icon: Mail, label: "Email", value: "ctthhh.kythu@gmail.com" },
                {
                  icon: MapPin,
                  label: "Địa chỉ",
                  value: "phường Thanh Điền, Tây Ninh",
                },
              ].map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex gap-4"
                    variants={itemVariants}
                  >
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                        <Icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {contact.label}
                      </p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-lg border border-border bg-card p-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Họ và tên
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="Tên của bạn"
                variants={inputVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Địa chỉ Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="email@cua.ban.com"
                variants={inputVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Số điện thoại
              </label>
              <motion.input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="+84 (28) XXXX-XXXX"
                variants={inputVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Tên công ty
              </label>
              <motion.input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                placeholder="Công ty của bạn"
                variants={inputVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Tin nhắn
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 resize-none"
                placeholder="Hãy cho chúng tôi biết về nhu cầu cơm của bạn..."
                variants={inputVariants}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Đang gửi..." : "Gửi Yêu cầu"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-600 text-sm text-center">
                ✅ Gửi thành công! Chúng tôi sẽ liên hệ sớm.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                ❌ Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
