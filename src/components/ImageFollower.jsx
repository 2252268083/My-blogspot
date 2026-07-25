import {
motion,
useMotionValue,
useSpring
}
from "framer-motion";


import {
useEffect
}
from "react";



export default function ImageFollower(){


const x=useMotionValue(0);

const y=useMotionValue(0);



const sx=useSpring(
x,
{
stiffness:100
}
);


const sy=useSpring(
y,
{
stiffness:100
}
);



useEffect(()=>{


const move=(e)=>{

x.set(e.clientX+30);

y.set(e.clientY+30);

}


window.addEventListener(
"mousemove",
move
);


return ()=>{

window.removeEventListener(
"mousemove",
move

)

}


},[])



return (

<motion.div

style={{
x:sx,
y:sy
}}


className="

fixed

w-52

h-36

rounded-xl

bg-black/10

backdrop-blur

pointer-events-none

z-50

"

>


</motion.div>

)

}