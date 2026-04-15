'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Tư vấn',
    description: 'Chúng tôi hiểu nhu cầu ăn uống, ngân sách và yêu cầu logistical của tổ chức bạn.'
  },
  {
    number: '02',
    title: 'Lập kế hoạch menu',
    description: 'Đội chuyên gia của chúng tôi thiết kế menu cân bằng, hấp dẫn theo yêu cầu của bạn.'
  },
  {
    number: '03',
    title: 'Chuẩn bị',
    description: 'Sử dụng nguyên liệu chất lượng, bếp của chúng tôi sản xuất bữa ăn với tiêu chuẩn vệ sinh chặt chẽ.'
  },
  {
    number: '04',
    title: 'Giao hàng & Dịch vụ',
    description: 'Giao hàng kịp thời, được kiểm soát nhiệt độ với hỗ trợ chuyên nghiệp tại chỗ bao gồm.'
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="process" className="bg-muted py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 space-y-4 text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Quy trình của chúng tôi</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Từ tư vấn đến giao hàng, chúng tôi đảm bảo thực hiện mượt mà ở mọi bước
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} className="relative" variants={itemVariants}>
              {/* Connection line for desktop */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="absolute -right-4 top-12 hidden h-1 w-8 bg-border lg:block"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
                  style={{ originX: 0 }}
                />
              )}

              <div className="space-y-4">
                <motion.div
                  className="h-16 w-16 rounded-full bg-primary flex items-center justify-center"
                  variants={circleVariants}
                >
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
