import {
motion
}
from "framer-motion";


import {
projects
}
from "../data/projects";


import ProjectCard 
from "./ProjectCard";



export default function Works(){


return (

<section

id="work"

className="

px-4

lg:px-14

py-18

lg:py-24

w-full

"

>


<motion.h2


initial={{

opacity:0,

y:100

}}


whileInView={{

opacity:1,

y:0

}}


className="

text-[12vw]

font-black

leading-none

mb-16

lg:mb-24

"

>

项目

</motion.h2>





<div

className="

grid

grid-cols-12

w-full

gap-y-8

lg:gap-y-12

"

>


{

projects.map(

(project,index)=>(


<div

key={project.id}

className={

index===0

?"col-span-12 lg:col-span-8 lg:col-start-5"

:index===1

?"col-span-12 lg:col-span-6 xl:col-span-5 lg:col-start-1"

:index===2

?"col-span-12 lg:col-span-6 xl:col-span-5 lg:col-start-7 xl:col-start-7"

:index===3

?"col-span-6 lg:col-span-4 xl:col-span-3 lg:col-start-5 xl:col-start-6"

:index===4

?"col-span-6 lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10"

:index===5

?"col-span-12 lg:col-span-4 xl:col-span-3 lg:col-start-1 xl:col-start-1"

:index===6

?"col-span-6 lg:col-span-4 xl:col-span-3 lg:col-start-5 xl:col-start-5"

:index===7

?"col-span-6 lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-9"

:index===8

?"col-span-6 lg:col-span-4 xl:col-span-3 lg:col-start-5 xl:col-start-6"

:"col-span-6 lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10"

}

>


<ProjectCard

project={project}

/>


</div>


)

)


}


</div>



</section>


)

}