import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [showWechat, setShowWechat] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 md:px-16 md:py-40 flex flex-col justify-center"
    >
      <div className="font-mono mb-8 md:mb-10">联系</div>

      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="text-[16vw] md:text-[11vw] font-black leading-none"
      >
        一起<br />创造
      </motion.h2>

      <div className="mt-12 md:mt-20 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between font-mono text-sm md:text-base">
        <span>joyxiaok@Gmail.com</span>

        <span className="flex flex-col gap-1">
          <a href="https://v.douyin.com/7fhLhWthWF0/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
            抖音
          </a>
          <a href="https://github.com/2252268083" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
            Github
          </a>
          <span
            onClick={() => setShowWechat(!showWechat)}
            className="cursor-pointer hover:opacity-50 select-none"
          >
            {showWechat ? "微信: lelenb886" : "微信"}
          </span>
        </span>
      </div>
    </section>
  );
}