import {
motion,
useScroll,
useTransform
}
from "framer-motion";

import { useRef } from "react";


export default function About(){

const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});

/* 肖像视差：向上移动速度比文字慢，产生突出效果 */
const portraitY = useTransform(scrollYProgress, [0, 1], [80, -80]);


return (

<section

id="about"

ref={sectionRef}

className="

min-h-screen

px-16

py-40

grid

md:grid-cols-2

gap-20

overflow-hidden

"

>


<div>


<div

className="

font-mono

text-sm

mb-10

"

>

关于

</div>



<motion.h2


initial={{

opacity:0,

x:-80

}}


whileInView={{

opacity:1,

x:0

}}


className="

text-[8vw]

font-black

leading-none

"

>

小

<br/>

K

</motion.h2>



{/* 个人照片 — 视差突出效果 */}

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

style={{y:portraitY}}

className="mt-10"

>

<img

src={`${import.meta.env.BASE_URL}projects/portrait.png`}

alt="小K"

className="w-64 h-80 object-cover"

/>

</motion.div>


</div>





<div

className="

font-mono

text-lg

leading-relaxed

self-end

"

>


我是小K，一名AI开发者

与计算机视觉爱好者。



<br/><br/>



专注于将人工智能技术

转化为有趣的互动体验。



<br/><br/>



研究方向：

<br/>

• 计算机视觉

<br/>

• 体感交互

<br/>

• 骨骼姿态识别

<br/>

• 手势识别



<br/><br/>



我开发的隔空AI切水果游戏，

让同学们在系门口就能体验

体感交互的乐趣——

无需触碰屏幕，挥挥手就能

切水果。致力于让AI技术

走入校园生活的每个角落。



</div>


</section>

)

}