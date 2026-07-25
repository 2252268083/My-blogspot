import {
motion
} from "framer-motion";


export default function Philosophy(){


return (

<section

className="

relative

min-h-screen

px-16

py-40

overflow-hidden

"


>


{/* 背景编号 */}

<div

className="

absolute

top-20

right-20

font-mono

text-sm

opacity-40

"

>

03 / 理念

</div>



<motion.h2


initial={{

opacity:0,

y:100

}}


whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}


transition={{

duration:1

}}


className="

text-[10vw]

font-black

leading-[0.85]

tracking-tight

"

>

技术

<br/>

不止

<br/>

于代码


</motion.h2>





<motion.div


initial={{

opacity:0

}}


whileInView={{

opacity:1

}}



transition={{

delay:.4

}}



className="

absolute

right-20

bottom-32

max-w-md

font-mono

text-sm

leading-relaxed

"

>


AI不仅是
算法与模型。


<br/><br/>


更是关于交互、
体验
与让每个人都能感受到的乐趣。


</motion.div>



</section>

)

}