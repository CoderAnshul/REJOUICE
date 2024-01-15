function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



}

locoScroll()


function cursorEffect(){
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
        // crsr.style.left = dets.x + "px";
        // crsr.style.top = dets.y + "px";
    })
})


page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}

cursorEffect()

// const myText = new SplitType('#page2-content h2')
function page2Animation(){
    gsap.from(".elem h2", {
        y:120,
        // skewY:2,
        stagger: 0.6,
        opacity:0,
        // delay:0.5,
        duration: 10,
        scrollTrigger: {
            trigger: "#page2 #page2-content h2",
            scroller: "#main",
            start:"top 87%",
            end:"top 83%",
            // markers:true,
            scrub:4
        }
    })
}

page2Animation() 


function page3Animation(){
    gsap.from(".elem2 h2",{
        y:120,
        stagger:0.6,
        opacity:0,
        duration:10,
        scrollTrigger:{
            trigger:"#page3 .elem2 h2",
            scroller: "#main",
            start:"top 87%",
            end:"top 83%",
            // markers:true,
            scrub:4
        }
    })
}

page3Animation()

function footerAnimation(){
    gsap.from("#btmcontainer h1",{
        y:-100,
        duration:10,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:"#btmcontainer h1",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"top 50%",
            scrub:5
        }
    })
}
footerAnimation()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    autoplay:{
        delay: 2500,
        desableOnInteraction: true,
    },
  });