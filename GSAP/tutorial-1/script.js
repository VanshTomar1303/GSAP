// gsap.from(".box",{
//     x:-800,
//     duration:2,
//     delay:1
// })

let tl=gsap.timeline();
tl.from(".box",{
    x:800,
    duration:2,
    opacity:0.5
})
tl.to(".box1",{
    y:-800,
    duration:2,
})
