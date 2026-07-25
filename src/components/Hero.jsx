import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll
} from "framer-motion";

import {
  useEffect,
  useState
} from "react";

import useTilt from "../hooks/useTilt";



export default function Hero(){


/*
  实时北京时间
*/

const [beijingTime,setBeijingTime] = useState(
  new Date().toLocaleString("zh-CN",{
    timeZone:"Asia/Shanghai",
    hour:"2-digit",
    minute:"2-digit"
  })
);

useEffect(()=>{
  const timer = setInterval(()=>{
    setBeijingTime(
      new Date().toLocaleString("zh-CN",{
        timeZone:"Asia/Shanghai",
        hour:"2-digit",
        minute:"2-digit"
      })
    );
  },1000);
  return ()=>clearInterval(timer);
},[]);


/*
  鼠标视差
*/

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const [mousePos,setMousePos] = useState({x:0,y:0});



const smoothX = useSpring(
  mouseX,
  {
    stiffness:30,
    damping:20
  }
);


const smoothY = useSpring(
  mouseY,
  {
    stiffness:30,
    damping:20
  }
);



useEffect(()=>{


const move=(e)=>{


const x =
(e.clientX / window.innerWidth - .5)
* 40;


const y =
(e.clientY / window.innerHeight - .5)
* 40;


mouseX.set(x);
mouseY.set(y);
setMousePos({x:Math.round(e.clientX),y:Math.round(e.clientY)});


}



window.addEventListener(
"mousemove",
move,
{passive:true}
);


return ()=>{

window.removeEventListener(
"mousemove",
move
)

}


},[]);



/*
 页面滚动动画
*/

const {
scrollY
}=useScroll();



const imageScale =
useTransform(
scrollY,
[0,600],
[1,0.75]
);


const imageY =
useTransform(
scrollY,
[0,600],
[0,-120]
);


const opacity =
useTransform(
scrollY,
[0,600],
[1,0]
);



const heroMove =
useTransform(
scrollY,
[0,800],
[0,-180]
);



const heroScale =
useTransform(
scrollY,
[0,800],
[1,0.7]
);



const heroRotate =
useTransform(
scrollY,
[0,800],
[0,-8]
);



const titleMove =
useTransform(
scrollY,
[0,800],
[0,-80]
);



/*
 3D Tilt
*/

const {
rotateX,
rotateY,
move:tiltMove,
leave:tiltLeave
}=useTilt();



return (

<section

className="
relative
min-h-screen
overflow-hidden
bg-[#b8d9f2]
"

>



{/* 云层背景 */}

<motion.div

style={{
y:useTransform(
scrollY,
[0,800],
[0,100]
),
willChange:"transform, filter"
}}

animate={{

x:[
"-10%",
"10%",
"-10%"
]

}}

transition={{

duration:30,
repeat:Infinity,
ease:"linear"

}}

className="
absolute
inset-0
bg-gradient-to-br
from-white/60
via-transparent
to-blue-300/40
blur-3xl
"

>



</motion.div>




{/* 中央柔光 */}


<motion.div

animate={{

scale:[
1,
1.2,
1
]

}}

transition={{

duration:12,
repeat:Infinity

}}

style={{willChange:"transform, filter"}}

className="

absolute

top-[25%]

left-[40%]

w-[500px]

h-[500px]

rounded-full

bg-white/30

blur-[120px]

"

>

</motion.div>





{/* 左上标题 */}


<motion.div

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

style={{willChange:"transform, opacity"}}

className="
absolute
top-32
left-16
z-20
text-5xl
font-bold
leading-tight
"

>

AI与<br/>

交互


</motion.div>





{/* 中间说明 */}


<div

className="
absolute
top-40
left-[32%]
z-20
font-mono
text-sm
"

>

计算机视觉。<br/>

体感交互。


</div>






{/* hello 3D Tilt */}



<motion.div


onMouseMove={tiltMove}

onMouseLeave={tiltLeave}


animate={{

y:[
0,
-15,
0
]

}}

transition={{

duration:6,

repeat:Infinity,

ease:"easeInOut"

}}


style={{
perspective:1000,
y:heroMove,
scale:heroScale,
rotateX:heroRotate,
willChange:"transform"
}}


className="
absolute
top-[26%]
left-1/2
-translate-x-1/2
z-30
origin-center
"

>



{/* 阴影层 - 独立于 3D tilt，避免每帧重算 filter */}

<motion.div

style={{
scale:imageScale,
y:imageY,
opacity,
willChange:"transform, opacity"
}}

className="
absolute
inset-0
flex
items-center
justify-center
pointer-events-none
"

>

<div

className="
w-[60%]
h-[30%]
rounded-full
bg-blue-400/25
blur-[50px]
"

/>

</motion.div>



<motion.img


src="/hello.png"



style={{

rotateX,

rotateY,

scale:imageScale,

y:imageY,

opacity,

willChange:"transform, opacity"

}}



initial={{

opacity:0,

scale:.8

}}



animate={{

opacity:1

}}



transition={{

duration:1.2

}}



className="
w-[70vw]
max-w-[1100px]
select-none
pointer-events-none
relative
z-10
"
 />



</motion.div>








{/* 主标题 */}



<motion.h1


initial={{
opacity:0,
y:50
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:.4,
duration:.8
}}


style={{
y:titleMove,
willChange:"transform"
}}


className="
absolute
bottom-20
left-16
z-20
text-[5.5vw]
font-black
leading-[.9]
tracking-tight
"


>


为校园生活

<br/>

注入科技

<br/>

与乐趣


</motion.h1>





{/* 底部信息 */}



<div

className="

absolute

bottom-10

left-16

right-16

flex

justify-between

font-mono

text-sm

z-20

"

>


<span>

北京时间 {beijingTime}

</span>


<span>

{mousePos.x.toString().padStart(4,"0")} X {mousePos.y.toString().padStart(4,"0")} Y

</span>


<span>

◎

</span>


</div>




</section>

)

}