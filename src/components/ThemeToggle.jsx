import {
useState
}
from "react";


export default function ThemeToggle(){


const [dark,setDark]
=
useState(false);



function toggle(){

setDark(!dark);

document.documentElement.classList.toggle(
"dark"
);

}


return (

<button
onClick={toggle}
className="
font-mono
"
>

THEME[A]

</button>

)

}