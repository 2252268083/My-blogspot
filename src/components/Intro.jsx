import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-16 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[14vw] md:text-[8vw] font-black leading-none"
      >
        AI<br />探索
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-sm md:text-lg leading-relaxed max-w-xl"
      >
        我是小K，<br />
        致力于计算机视觉<br />
        与AI交互探索。

        <br /><br />

        我构建体感游戏、<br />
        智能识别系统<br />
        与校园互动装置。
      </motion.div>
    </section>
  );
}