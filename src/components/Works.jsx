import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Works() {
  return (
    <section id="work" className="px-4 lg:px-14 py-16 md:py-18 lg:py-24 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[14vw] md:text-[12vw] font-black leading-none mb-12 md:mb-16 lg:mb-24"
      >
        项目
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-y-6 md:gap-y-8 lg:gap-y-12">
        {projects.map((project, index) => {
          /* 移动端全部全宽，桌面端按原始布局 */
          const colClass = [
            "md:col-span-8 md:col-start-5",
            "md:col-span-6 xl:col-span-5 md:col-start-1",
            "md:col-span-6 xl:col-span-5 md:col-start-7 xl:col-start-7",
            "md:col-span-4 xl:col-span-3 md:col-start-5 xl:col-start-6",
            "md:col-span-4 xl:col-span-3 md:col-start-9 xl:col-start-10",
            "md:col-span-4 xl:col-span-3 md:col-start-1",
            "md:col-span-4 xl:col-span-3 md:col-start-5",
            "md:col-span-4 xl:col-span-3 md:col-start-9",
            "md:col-span-4 xl:col-span-3 md:col-start-5",
            "md:col-span-4 xl:col-span-3 md:col-start-9"
          ][index] || "md:col-span-4 xl:col-span-3 md:col-start-9";

          return (
            <div
              key={project.id}
              style={{ contentVisibility: "auto", containIntrinsicSize: "auto 420px" }}
              className={colClass}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}