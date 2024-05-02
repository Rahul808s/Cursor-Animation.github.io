var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
                x: dets.x,
                y: dets.y,
                duration: 0.6
        })
});


document.querySelector(".main img").addEventListener("mouseenter", function () {
        gsap.to(cursor, {
                scale: 3
        })
})
document.querySelector(".main img").addEventListener("mouseleave",function () {
                gsap.to(cursor, {
                        scale: 1
                })
        })