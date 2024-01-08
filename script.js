var crsr = document.querySelector('#cursor')
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x - 7 + "px"
    crsr.style.top = dets.y - 7 + "px"
})
var blur = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function (dets) {
    blur.style.left = dets.x - 100 + "px"
    blur.style.top = dets.y - 100 + "px"
})

var h4all = document.querySelectorAll('#nav h4')
h4all.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(27, 159, 164)"
        crsr.style.backgroundColor = "rgb(27, 159, 164)"
    })
})

// dets is telling what is happening with mouse position 
gsap.to("#nav", {
    backgroundColor: '#000',
    duration: 1,
    delay: 0.5,
    height: '100px',
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        // markers:true,    used for our understanding
        scrub: 1
        // scrub is used to reverse the flow
    }

})

gsap.to("#main", {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        scroll: 'body',
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})


gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from(".blue_div",{
    
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".blue_div",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.5,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})