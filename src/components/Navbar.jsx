import { useState } from "react";
import LiquidGlass from "./LiquidGlass";

export default function Navbar(){

const [soundOn,setSoundOn] = useState(false);
const [themeIdx,setThemeIdx] = useState(0);

const themes = ["[A]","[B]","[C]"];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:"smooth"});
};


return (

<nav
className="
absolute
top-10
left-16
right-16
z-30
flex
items-center
justify-between
font-mono
text-xs
md:text-sm
font-bold
tracking-[0.15em]
"
>


<div>
XIAOK.AI
</div>



<LiquidGlass

className="

fixed

top-6

left-1/2

-translate-x-1/2

px-8

py-4

rounded-full

z-50

"

>



<nav

className="

flex

gap-10

font-mono

text-sm

"

>


<a
onClick={(e)=>{e.preventDefault();scrollTo("work")}}
className="hover:opacity-50 transition cursor-pointer"
>
项目
</a>


<a
onClick={(e)=>{e.preventDefault();scrollTo("about")}}
className="hover:opacity-50 transition cursor-pointer"
>
关于
</a>


<a
onClick={(e)=>{e.preventDefault();scrollTo("contact")}}
className="hover:opacity-50 transition cursor-pointer"
>
联系
</a>


</nav>



</LiquidGlass>


</nav>

)

}