import {motion} from "framer-motion";


export default function SkyGlow(){


return (

<>


<motion.div

animate={{

x:[-100,100,-100]

}}

transition={{

duration:20,

repeat:Infinity,

ease:"linear"

}}

className="

absolute

inset-0

bg-gradient-to-r

from-transparent

via-white/40

to-transparent

blur-3xl

z-0

"

 />



<div

className="

absolute

top-[20%]

left-[40%]

w-[500px]

h-[300px]

rounded-full

bg-white/30

blur-[100px]

z-0

"

/>



</>

)

}