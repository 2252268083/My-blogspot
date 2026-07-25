import {
useEffect
}
from "react";

import Lenis from "lenis";


export default function useSmoothScroll(){


useEffect(()=>{


const lenis=new Lenis({

duration:1.0,

smoothWheel:true,

smoothTouch:false,

lerp:.12,

wheelMultiplier:.8

});



function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}



requestAnimationFrame(raf);



return ()=>{

lenis.destroy();

}


},[])

}