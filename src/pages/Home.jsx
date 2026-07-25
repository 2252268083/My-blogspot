import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GridOverlay from "../components/GridOverlay";
import Stickers from "../components/Stickers";
import StatusBar from "../components/StatusBar";


export default function Home(){


return (

<main
className="
relative
h-screen
overflow-hidden
bg-[#b8d9f2]
"
>


<GridOverlay/>

<Navbar/>

<Hero/>

<Stickers/>

<StatusBar/>


</main>

)

}