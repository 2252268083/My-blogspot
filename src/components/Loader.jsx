import {
motion
}
from "framer-motion";


export default function Loader(){


return (

<motion.div


initial={{
y:0
}}


animate={{
y:"-100%"
}}


transition={{
delay:1,
duration:.8
}}


className="
fixed
inset-0
bg-black
z-[999]
flex
items-center
justify-center
text-white
font-mono
text-2xl
"

>

XIAOK.AI


</motion.div>

)

}