import ProjectCard 
from "../components/ProjectCard";


const projects=[

{
id:"ai-tool",
title:"AI DESIGN SYSTEM",
year:"2026",
type:"AI / PRODUCT"
},


{
id:"brand",
title:"DIGITAL BRAND",
year:"2025",
type:"BRANDING"
},


{
id:"motion",
title:"INTERACTION LAB",
year:"2025",
type:"EXPERIMENT"
}


]



export default function Work(){


return (

<main
className="
min-h-screen
bg-[#b8d9f2]
p-16
"
>


<h1
className="
text-[10vw]
font-black
leading-none
"
>

WORK

</h1>



<section
className="
mt-20
grid
gap-12
"
>


{
projects.map(
item=>(

<ProjectCard
key={item.id}
project={item}
/>

)

)

}


</section>


</main>

)

}