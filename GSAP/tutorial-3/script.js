var initialPath=`M 10 100 Q 250 100 490 100`;
var finalPath=`M 10 100 Q 250 100 490 100`;

var str=document.querySelector(".string");

str.addEventListener("mousemove",(dets)=>{
    initialPath=`M 10 100 Q ${dets.x} ${dets.y} 490 100`;

    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:0.5,
        ease:"power3.out"
    })
});
str.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.5,
        ease:"elastic.out"
    })
});