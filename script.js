function page1Animation(){
    var tl = gsap.timeline()
    tl.from("nav h1 , nav h4 , .part2 button",{
        y:-40,
        delay:0.65,
        duration:0.3,
        opacity:0,
        stagger:0.15
    })
    tl.from(".center-part1 h1",{
        x:-200,
        duration:0.5,
        opacity:0
        
    })
    tl.from(".center-part1 p",{
        x:-100,
        duration:0.4,
        opacity:0
    })
    tl.from(".center-part1 button",{
        x:-100,
        duration:0.4,
        opacity:0
    })
    tl.from(".center-part2",{
        x:200,
        duration:0.4,
        opacity:0
    },"-=0.6")
    
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0){
            gsap.to(".section1bottom",{
                transform:"translateX(-200%)",
                duration:12,
                repeat:-1,
                ease:"none",
                scrub:true
            })
        }
        else{
            gsap.to(".section1bottom",{
                transform:"translateX(0%)",
                duration:12,
                repeat:-1,
                ease:"none",
                scrub:true
            })
        }
    })
}
page1Animation()
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 45%",
        end:"top 0",
        scrub:2
    }
})
tl2.from(".services",{
    x:200,
    opacity:0,
    duration:0.6,
})
tl2.from(".elem.line1",{
    x:-300,
    opacity:0,
    duration:1,
    scrub:2
},"eksath")
tl2.from(".elem.line2",{
    x:300,
    opacity:0,
    duration:1,
    scrub:2
},"eksath")
tl2.from(".elem.line3",{
    x:-300,
    opacity:0,
    duration:1,
    scrub:2
},"eksath1")
tl2.from(".elem.line4",{
    x:300,
    opacity:0,
    duration:1,
    scrub:2
},"eksath1")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top 60%",
        end:"top 0",
        scrub:2
    }
})

tl3.from(".box1-part1 h1",{
    x:-200,
    duration:1,
    opacity:0
    
})
tl3.from(".box1-part1 p",{
    x:-100,
    duration:1,
    opacity:0
})
tl3.from(".box1-part1 button",{
    x:-100,
    duration:1,
    opacity:0
})
tl3.from(".box1-part2",{
    x:200,
    duration:1,
    opacity:0
},"-=0.4")


window.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
        gsap.to(".marquee",{
            transform:"translateX(-200%)",
            duration:6,
            repeat:-1,
            ease:"none"
        })
    }
    else{
        gsap.to(".marquee",{
            transform:"translateX(0%)",
            duration:6,
            repeat:-1,
            ease:"none"
        })
    }
})
var sections = document.querySelectorAll(".section1, .section2, .section3");
var cursor = document.querySelector("#cursor");

sections.forEach(function(section) {
    section.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        });
    });
});




