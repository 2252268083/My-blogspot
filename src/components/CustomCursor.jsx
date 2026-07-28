import { useEffect, useRef } from "react";


export default function CustomCursor(){

const dot = useRef(null);


useEffect(()=>{

const move = (e)=>{
  if(!dot.current) return;
  dot.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
};

window.addEventListener("mousemove", move);

return ()=>{
  window.removeEventListener("mousemove", move);
}

},[]);


return (

<div

ref={dot}

className="
fixed
top-0
left-0
z-[999]
pointer-events-none
w-5
h-5
rounded-full
bg-white
mix-blend-difference
will-change-transform
hidden md:block
"

style={{transition:"transform .05s linear"}}

/>

)

}