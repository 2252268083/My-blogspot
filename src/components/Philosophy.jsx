import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative min-h-screen px-6 py-20 md:px-16 md:py-40 overflow-hidden">
      {/* 背景编号 */}
      <div className="absolute top-10 right-6 md:top-20 md:right-20 font-mono text-xs md:text-sm opacity-40">
        03 / 理念
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tight"
      >
        技术<br />不止<br />于代码
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute right-6 bottom-16 md:right-20 md:bottom-32 max-w-xs md:max-w-md font-mono text-xs md:text-sm leading-relaxed"
      >
        AI不仅是<br />算法与模型。

        <br /><br />

        更是关于交互、<br />
        体验<br />
        与让每个人都能感受到的乐趣。
      </motion.div>
    </section>
  );
}