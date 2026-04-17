"use client";

import { Shield, Leaf, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const reasons = [
  {
    icon: Shield,
    title: "An toàn & Vệ sinh",
    description:
      "Bếp được chứng nhận ISO với các giao thức an toàn thực phẩm chặt chẽ và kiểm tra sức khỏe thường xuyên.",
  },
  {
    icon: Leaf,
    title: "Nguyên liệu chất lượng",
    description:
      "Chúng tôi tìm nguồn nguyên liệu bền vững và địa phương cao cấp để đảm bảo sự xuất sắc về dinh dưỡng.",
  },
  {
    icon: Users,
    title: "Đội chuyên gia",
    description:
      "Những đầu bếp và chuyên gia dinh dưỡng giàu kinh nghiệm tận tâm phục vụ các khách hàng.",
  },
  {
    icon: TrendingUp,
    title: "Khả năng mở rộng",
    description:
      "Từ 100 đến 5.000+ bữa ăn mỗi ngày, chúng tôi thích ứng mượt mà với sự phát triển của tổ chức bạn.",
  },
];

export default function WhyUs() {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="why-us" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 space-y-4 text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Tại sao chọn CÔNG TY TNHH KỲ THƯ
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Sự xuất sắc trong mỗi bữa ăn, độ tin cậy trong mỗi lần giao hàng
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                className="flex gap-6 rounded-lg border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent"
                    variants={iconVariants}
                  >
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
