// window.addEventListener('scroll', e => {
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
// })

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTuch !==1) {

    ScrollSmoother.create({
        wrapper: 'wrapper',
        content: 'content',
        smooth: 1,
        effects: true
    })

    // gsap.fromTo('.delimiter', { opacity: 0 }, {
    //     opacity: 1,
    //     ScrollTrigger: {
    //         trigger: '.delimiter',
    //         start: 'top',
    //         end: 'bottom',
    //         scrub: true
    //     }
    // })
}