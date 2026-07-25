export default function GridOverlay(){


return (

<div

className="
fixed
inset-0
pointer-events-none
z-0
"

style={{willChange:"transform"}}

>


<div className="
absolute
left-[8vw]
top-0
bottom-0
w-px
bg-black/10
"/>


<div className="
absolute
left-1/2
top-0
bottom-0
w-px
bg-black/10
"/>


<div className="
absolute
right-[8vw]
top-0
bottom-0
w-px
bg-black/10
"/>



<div className="
absolute
top-[33vh]
left-0
right-0
h-px
bg-black/10
"/>


<div className="
absolute
top-[66vh]
left-0
right-0
h-px
bg-black/10
"/>



</div>

)

}