import { useState } from "react";

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



<div
className="
flex
gap-6
md:gap-16
uppercase
"
>


<a
onClick={(e)=>{e.preventDefault();scrollTo("work")}}
className="hover:opacity-50 transition cursor-pointer"
>
项目
</a>


<a
onClick={(e)=>{e.preventDefault();scrollTo("contact")}}
className="hover:opacity-50 transition cursor-pointer"
>
联系
</a>


<a
onClick={()=>setThemeIdx((themeIdx+1)%themes.length)}
className="hover:opacity-50 transition cursor-pointer"
>
主题{themes[themeIdx]}
</a>


<a
onClick={()=>setSoundOn(!soundOn)}
className="hover:opacity-50 transition cursor-pointer"
>
音效[{soundOn?"+":"-"}]
</a>


</div>


</nav>

)

}