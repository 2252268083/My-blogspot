import {
motion
}
from "framer-motion";


export default function Contact(){


return (

<section

id="contact"

className="

min-h-screen

px-16

py-40

flex

flex-col

justify-center

"

>


<div

className="

font-mono

mb-10

"

>

联系

</div>



<motion.h2


initial={{

scale:.9,

opacity:0

}}


whileInView={{

scale:1,

opacity:1

}}


className="

text-[11vw]

font-black

leading-none

"

>


一起

<br/>

创造


</motion.h2>



<div

className="

mt-20

flex

justify-between

font-mono

"

>


<span>

joyxiaok@Gmail.com

</span>


<span>

Instagram

<br/>

<a href="https://github.com/2252268083" target="_blank" rel="noopener noreferrer">Github</a>

<br/>

LinkedIn

</span>


</div>



</section>

)

}