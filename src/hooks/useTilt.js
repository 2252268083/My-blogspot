import {
 useMotionValue,
 useSpring
}
from "framer-motion";


export default function useTilt(){


const rotateX =
useSpring(
useMotionValue(0),
{
 stiffness:60,
 damping:20,
 mass:.4
}
);


const rotateY =
useSpring(
useMotionValue(0),
{
 stiffness:60,
 damping:20,
 mass:.4
}
);


const move=(e)=>{


const rect =
e.currentTarget.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateYValue =
((x / rect.width)-0.5)
*20;


const rotateXValue =
((y / rect.height)-0.5)
*-20;



rotateX.set(
rotateXValue
);


rotateY.set(
rotateYValue
);


};



const leave=()=>{


rotateX.set(0);

rotateY.set(0);


};



return {

rotateX,

rotateY,

move,

leave

}

}