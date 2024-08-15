gsap.from(".page1 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})
gsap.from(".page2 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    //scrollTrigger:".page2 .box"
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        //scrub:true
        scrub:2//valce can be 1-5
    }
})
gsap.from(".page3 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        markers:true,
        scrub:2,
        start:"top 50%",
        pin:true
    }
})