import {motion} from "framer-motion";


export default function Stickers(){


return (

<>


<motion.div

animate={{

y:[0,-12,0],

rotate:[0,-5,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="

absolute

top-16

left-[22%]

font-black

text-4xl

text-green-800

z-20

"

>

TikTore

</motion.div>




<motion.div

animate={{

rotate:[0,15,-15,0]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="

absolute

top-[22vh]

left-[38%]

text-6xl

z-20

"

>

⭐

</motion.div>




<motion.div

animate={{

scale:[1,1.1,1]

}}

transition={{

duration:2,

repeat:Infinity

}}

className="

absolute

top-20

left-0

bg-orange-400

rounded-full

w-16

h-16

flex

items-center

justify-center

text-3xl

z-20

"

>

🎧

</motion.div>


</>

)

}