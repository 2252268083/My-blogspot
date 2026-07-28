import { useEffect, useState } from "react";

export default function Hero() {
  const [beijingTime, setBeijingTime] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tick = () =>
      setBeijingTime(
        new Date().toLocaleString("zh-CN", {
          timeZone: "Asia/Shanghai",
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    const move = (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setMousePos({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
        ticking = false;
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#b8dcf7] via-[#c9e7fa] to-[#a9d1f3]">
      {/* ========== hello 水晶 ========== */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={`${import.meta.env.BASE_URL}hello.png`}
          className="hello-crystal"
          alt="hello"
        />
      </div>

      {/* ========== 左上 ========== */}
      <div className="absolute left-12 top-20 z-20">
        <div className="text-xs tracking-[0.35em]">XIAOK.AI</div>
        <h1 className="mt-10 text-[64px] font-bold leading-[0.95]">
          AI与<br />
          交互
        </h1>
      </div>

      {/* ========== 右上 ========== */}
      <div className="absolute right-16 top-28 z-20 text-right text-sm leading-6">
        I'm Xiaok,<br />
        Design Engineering<br />
        and AI exploration.
      </div>

      {/* ========== 左下 ========== */}
      <div className="absolute left-12 bottom-20 z-20">
        <h2 className="text-[64px] font-bold leading-[0.9]">
          为校园生活<br />
          注入科技<br />
          与乐趣
        </h2>
      </div>

      {/* ========== 底部 ========== */}
      <div className="absolute bottom-8 left-12 right-12 z-20 flex justify-between text-xs">
        <span>北京时间 {beijingTime}</span>
        <span>
          {mousePos.x.toString().padStart(4, "0")} X{" "}
          {mousePos.y.toString().padStart(4, "0")} Y
        </span>
      </div>

      <style>{`
        .hello-crystal {
          width: min(65vw, 900px);
          filter: brightness(1.05) saturate(1.15) contrast(1.05)
                  drop-shadow(0 25px 60px rgba(80,150,255,.25));
          opacity: .78;
          mix-blend-mode: screen;
          animation: crystalFloat 8s ease-in-out infinite;
        }
        @keyframes crystalFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}