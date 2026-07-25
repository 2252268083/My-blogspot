import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function Cloud(){

return (

<mesh>

<sphereGeometry
args={[3,64,64]}
/>


<meshStandardMaterial

color="#ffffff"

transparent

opacity={0.25}

/>


</mesh>

)

}



export default function SkyCanvas(){


return (

<div
className="
absolute
inset-0
z-0
"
>


<Canvas
camera={{
position:[0,0,5]
}}
>


<ambientLight intensity={1}/>


<Cloud/>


<OrbitControls
enableZoom={false}
/>


</Canvas>


</div>


)

}