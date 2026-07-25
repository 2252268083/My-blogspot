import {
useParams
}
from "react-router-dom";


export default function Project(){


const {
id
}=useParams();



return (

<main
className="
min-h-screen
bg-[#b8d9f2]
p-16
"
>


<div
className="
font-mono
"
>

PROJECT

</div>


<h1
className="
text-[9vw]
font-black
"
>

{id}

</h1>


</main>

)

}