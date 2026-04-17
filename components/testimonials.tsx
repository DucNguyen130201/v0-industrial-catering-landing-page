"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    name: "Nguyễn Minh",
    role: "Quản lý ca",
    content:
      "Bên mình đặt suất ăn cho ca sáng và ca chiều. Cơm giao đúng giờ, anh em ăn ổn nên không phải đổi bên khác.",
    rating: 5,
  },
  {
    name: "Lê Hoa",
    role: "Nhân viên hành chính",
    content:
      "Mình phụ trách đặt cơm cho công ty. Làm việc với bên này khá dễ, có gì phát sinh họ xử lý nhanh.",
    rating: 5,
  },
  {
    name: "Phạm Đức",
    role: "Giáo viên",
    // company: "",
    content:
      "Bữa ăn cho học sinh được chuẩn bị sạch sẽ, khẩu phần phù hợp. Phụ huynh cũng phản hồi tích cực nên trường yên tâm hợp tác lâu dài.",
    rating: 5,
  },
  {
    name: "Anh Tuấn",
    role: "Công nhân",
    // company: "",
    // content:
    //   "Có đặt bên này cho vài sự kiện nội bộ. Làm việc khá linh hoạt, setup nhanh, đồ ăn ổn, không bị trễ giờ như mấy bên trước.",
    content:
      "Cơm ăn được, có thay đổi món nên không bị ngán. Quan trọng là giao đúng giờ.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="testimonials" className="bg-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 space-y-4 text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Được tin tưởng bởi các nhà máy, công ty và tổ chức trên toàn khu vực
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg"
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <motion.div className="mb-4 flex gap-1">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={starVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <Star className="h-5 w-5 fill-accent text-accent" />
                    </motion.div>
                  ))}
              </motion.div>

              <motion.p
                className="mb-6 text-foreground"
                variants={itemVariants}
              >
                {testimonial.content}
              </motion.p>

              <motion.div variants={itemVariants}>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
