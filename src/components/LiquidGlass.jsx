import {
motion
} from "framer-motion";


export default function LiquidGlass({

children,

className=""

}){


return (

<motion.div


whileHover={{

y:-5

}}


transition={{

duration:.5

}}


className={`
relative
overflow-hidden

rounded-[32px]

${className}

`}


>


{/* Base Glass */}

<div

className="

absolute

inset-0

bg-white/20

backdrop-blur-3xl

"

/>



{/* Color Refraction */}

<motion.div


animate={{

x:[
"-50%",
"50%",
"-50%"
],

y:[
"-20%",
"30%",
"-20%"
]


}}


transition={{

duration:15,

repeat:Infinity,

ease:"linear"

}}



className="

absolute

w-[500px]

h-[500px]

rounded-full

bg-gradient-to-r

from-cyan-200/40

via-white/50

to-purple-200/40

blur-[90px]

"

/>



{/* Glass Edge */}

<div

className="

absolute

inset-0

rounded-[32px]

border

border-white/50

"

/>



{/* Highlight */}

<div

className="

absolute

inset-0

bg-gradient-to-br

from-white/50

via-transparent

to-transparent

opacity-60

"

/>



{/* Noise */}

<div

className="

absolute

inset-0

opacity-[0.02]

mix-blend-overlay

bg-[url('/noise.png')]

"

/>



{/* Content */}

<div

className="

relative

z-10

"

>

{children}

</div>


</motion.div>

)

}