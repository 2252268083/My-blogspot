export default function SectionLabel({
number,
title
}){


return (

<div

className="
absolute
top-10
left-16
font-mono
text-xs
opacity-50
"

>

{number}

&nbsp;

/

&nbsp;

{title}


</div>

)

}