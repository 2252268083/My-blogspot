import Masonry from
"react-masonry-css";


const images=[

"/project1.jpg",

"/project2.jpg",

"/project3.jpg",

"/project4.jpg"

]


export default function ProjectGallery(){


return (

<Masonry

breakpointCols={{

default:3,

768:2,

500:1

}}

className="
flex
gap-6
"


>


{

images.map(
(img,i)=>(

<img

key={i}

src={img}

className="
rounded-xl
"

loading="lazy"

/>


)

)

}


</Masonry>


)

}