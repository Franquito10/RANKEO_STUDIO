window.addEventListener("load", () => {
    gsap.fromTo("#main-title", 
    { opacity: 0, y: 30, scale: 0.95 }, 
    { opacity: 1, y: 0, scale: 1, duration: 1.6, ease: "power4.out" }
    );

    gsap.fromTo("#subtitle", 
    { opacity: 0, y: 40, scale: 0.95 }, 
    { opacity: 1, y: 0, scale: 1, duration: 1.6, ease: "power4.out", delay: 0.3 }
    );


    gsap.utils.toArray(".reveal").forEach((section) => {
    gsap.fromTo(section,
        { opacity: 0, y: 20 },
        {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
        }
    );
    });

  gsap.utils.toArray(".service").forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      delay: i * 0.1,
      duration: 1,
      ease: "power2.out"
    });
  });

  // ✅ Estos estaban ejecutándose antes de que el DOM esté listo
  gsap.from("#footer-brand", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.utils.toArray("#social-icons a").forEach((icon, i) => {
    gsap.from(icon, {
      y: 20,
      opacity: 0,
      delay: 0.6 + i * 0.2,
      duration: 1,
      ease: "power3.out"
    });
  });
  gsap.from("#cta-main", {
    scrollTrigger: {
        trigger: "#cta-main",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out"
});
        gsap.to(".overlay", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 50,
    opacity: 0.2,
    ease: "none"
});

gsap.utils.toArray("section").forEach((section) => {
    const beforeEl = document.createElement("div");
    beforeEl.className = "skew-transition";
    section.prepend(beforeEl);
});

gsap.utils.toArray(".reveal").forEach((section) => {
gsap.to(section.querySelector(".skew-transition"), {
    scrollTrigger: {
    trigger: section,
    start: "top 95%",
    toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
});
});
gsap.utils.toArray(".timeline-item").forEach((item, i) => {
gsap.to(item.querySelector(".dot"), {
    scrollTrigger: {
    trigger: item,
    start: "top 85%",
    toggleActions: "play none none none"
    },
    opacity: 1,
    scale: 1,
    duration: 0.5,
    delay: i * 0.1,
    ease: "back.out(1.7)"
});

gsap.to(item.querySelector("p"), {
    scrollTrigger: {
    trigger: item,
    start: "top 85%",
    toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: i * 0.15,
    ease: "power2.out"
});
});
gsap.to(".section-bg-deco", {
    scrollTrigger: {
        trigger: ".section-bg",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0.25,
    duration: 1.5,
    ease: "power2.out"
});

gsap.to(".section-bg-deco", {
    scrollTrigger: {
        trigger: ".section-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: -50, // desplazamiento hacia arriba
    ease: "none"
 });
 
 gsap.from(".service-card", {
    scrollTrigger: {
      trigger: ".diagonal-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15
  });
  
  

});