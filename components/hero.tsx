"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };
  const features = [
    "Dịch vụ cung cấp suất ăn công nghiệp",
    "Phục vụ Tây Ninh, Long An, Bình Dương",
    "Chuyên nghiệp, cam kết chất lượng",
    "Đầy đủ giấy phép, an toàn thực phẩm",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
                Giải pháp cơm công nghiệp uy tín quy mô lớn
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Cung cấp bữa ăn B2B cao cấp cho nhà máy, công ty và các tổ chức. Tin tưởng chuyên môn của chúng tôi trong chuẩn bị thức ăn quy mô lớn với chất lượng và tiêu chuẩn vệ sinh được đảm bảo.
              </p>
            </motion.div> */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
                Giải pháp cơm công nghiệp uy tín quy mô lớn
              </h1>

              {/* Features list */}
              <motion.ul
                className="space-y-2 text-lg text-muted-foreground sm:text-xl"
                variants={containerVariants2}
                initial="hidden"
                animate="visible"
              >
                {features.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              variants={itemVariants}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Báo giá
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Tìm hiểu thêm
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              variants={containerVariants}
            >
              {[
                { value: "500+", label: "Bữa ăn/ngày" },
                { value: "50+", label: "Khách hàng" },
                { value: "15+", label: "Năm kinh nghiệm" },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-accent"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="mb-4 text-5xl">🍽️</div>
                <p className="text-lg font-semibold text-secondary-foreground">
                  Cơm công nghiệp chuyên nghiệp
                </p>
                <p className="text-sm text-secondary-foreground opacity-75">
                  Chuẩn bị bữa ăn quy mô lớn
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent opacity-5"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
