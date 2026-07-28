import {useState,useEffect} from "react";
import useSmoothScroll from "./hooks/useSmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import GridOverlay from "./components/GridOverlay";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Intro from "./components/Intro";
import Works from "./components/Works";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseLight from "./components/MouseLight";


export default function App(){

const [loading,setLoading]=useState(true);

useEffect(()=>{
setTimeout(()=>{setLoading(false)},2000)
},[])

useSmoothScroll();

return (
<>

<Loader/>

<GridOverlay/>

<SEO/>

<MouseLight/>

<Navbar/>
<Hero/>
<About/>
<Intro/>
<Works/>
<Philosophy/>
<Contact/>
<Footer/>

<CustomCursor/>

</>
)

}