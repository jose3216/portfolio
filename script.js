gsap.registerPlugin(ScrollTrigger);

// Animation Welcome text

gsap.from(".welcome_text", {
  scaleX: 0,
  stagger: 0.5,
  duration: 1,
  ease: Power3,
  scrollTrigger: {
    trigger: ".welcome",
    start: "bottom bottom",
    end: "top top",
    // markers: true,
  },
});
