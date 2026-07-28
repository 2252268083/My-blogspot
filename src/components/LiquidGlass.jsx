import { motion } from "framer-motion";

export default function LiquidGlass({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className={`
        relative overflow-hidden rounded-[32px]
        ${className}
      `}
    >
      {/* Base Glass - 降低 blur 半径 */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl" />

      {/* Glass Edge */}
      <div className="absolute inset-0 rounded-[32px] border border-white/40" />

      {/* Highlight - 静态渐变，无动画 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}