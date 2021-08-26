gsap.registerPlugin(ScrollTrigger);

function mediaQuery() {
    if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth >= 650) {
        gsap.to('.pic img', {
            x: '-30vw',
            y: '-9.5vh',
            height: '50vh',
            scrollTrigger: {
                trigger: '.container1',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
    } else if(document.documentElement.clientWidth < 650) { 
        gsap.to('.pic img', {
            y: '-43vh',
            height: '25vh',
            scrollTrigger: {
                trigger: '.container1',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
    } else if (document.documentElement.clientWidth >= 1200) {
        gsap.to('.pic img', {
            x: '-45vw',
            y: '-9.5vh',
            height: '110vh',
            scrollTrigger: {
                trigger: '.container1',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        ScrollTrigger.create({
            trigger: '.container2',
            start: 'top top',
            end: '+=500vh',
            pin: true,
            scrub: true,
        });

        ScrollTrigger.create({
            trigger: '.container3',
            start: 'top top',
            end: '+=800vh',
            pin: true,
            scrub: true,
        });
    }
}

mediaQuery();

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.container2',
        start: '-50vh'
    }
})

tl.from('.container2 p', {
    y: 200, opacity: 0, duration: 1
});

gsap.to('.pic img', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.container3',
        start: 'top bottom',
        end: 'middle top',
        scrub: true
    }
});

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.container3',
        start: '-50vh'
    }
})

tl1.from('.first', {
    y: 200, opacity: 0, duration: 1
});

tl1.from('.second', {
    x: -200, opacity: 0, duration: 1
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.primary',
        start: 'top bottom'
    }
});

tl2.from('.primary', {
    y: 200, opacity: 0, duration: 1
});

let tl21 = gsap.timeline({
    scrollTrigger: {
        trigger: '.secondary',
        start: 'top bottom'
    }
});

tl21.from('.secondary', {
    y: 200, opacity: 0, duration: 1
});







