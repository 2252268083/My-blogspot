import {
motion
}
from "framer-motion";


export default function ProjectCard({
project
}){


return (

<motion.article


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


style={{willChange:"transform, opacity"}}

className="

group

relative

cursor-pointer

"



>



<div

className="

relative

w-full

aspect-square

overflow-hidden

mb-3

"

>


<motion.img


src={project.image}

loading="lazy"


whileHover={{

scale:1.05

}}


transition={{

duration:.35

}}


className="

w-full

h-full

object-cover

"

style={{willChange:"transform"}}

 />



<span

className="

absolute

top-0

right-0

z-10

bg-black

text-white

px-2

py-0.5

font-mono

text-xs

"

>

{project.type}

</span>


</div>





<div

className="

flex

justify-between

items-center

text-xs

lg:text-sm

uppercase

"

>


<span

className="

truncate

flex-1

min-w-0

"

>

{project.title}

</span>



<span

className="

font-mono

tabular-nums

whitespace-nowrap

shrink-0

ml-2

"

>

{project.year}

</span>


</div>



</motion.article>


)

}