import {
motion
}
from "framer-motion";

import LiquidGlass from "./LiquidGlass";


export default function ProjectCard({
project
}){


return (

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
margin:"-50px"
}}



className="group relative cursor-pointer"

>


<LiquidGlass

className="
p-5 md:p-8
min-h-[320px] md:min-h-[420px]
"

>


<div>


<div

className="
font-mono
opacity-50

"

>

{project.id} / PROJECT

</div>



<h3
className="
text-4xl md:text-6xl
font-black
mt-6 md:mt-10
"
>

{project.title}

</h3>




<img

src={`${import.meta.env.BASE_URL}${project.image}`}

loading="lazy"

className="
rounded-2xl md:rounded-3xl
mt-8 md:mt-12
w-full
"

/>



</div>


</LiquidGlass>


</motion.div>

)

}