gsap.registerPlugin(ScrollTrigger);
gsap.to('.fanta-img',
     {
    rotation:360,
    x: 100,
    duration:1,
},

{
    rotation:360,
    x: 0,
    duration:10,
}
);

gsap.fromTo(
    ".pepsi-img",
    {opacity:0,scale:0.5,rotation:0},
    {
        opacity:1,
        scale:1,
        rotation:360,
        duration:1.5,
        ScrollTrigger:{
        trigger:".pepsi-img",
        start:"top-bottom",
        end:"bottom top",
        scrub:true,
        markers:true,
        },
    }
);