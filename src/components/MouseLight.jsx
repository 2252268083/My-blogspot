import {
motion,
useMotionValue,
useSpring
}
from "framer-motion";


export default function MouseLight(){


const x=useMotionValue(0);

const y=useMotionValue(0);


const sx=useSpring(x);

const sy=useSpring(y);



window.onmousemove=(e)=>{

x.set(e.clientX);

y.set(e.clientY);

}



return (

<motion.div

style={{

x:sx,

y:sy

}}

className="
fixed
w-[300px]
h-[300px]
rounded-full
bg-white/20
blur-[100px]
pointer-events-none
z-40
hidden md:block
"

/>


)

}