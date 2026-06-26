const parallaxElements = document.querySelectorAll("[data-speed]");
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    parallaxElements.forEach(element => {

        const speed = element.dataset.speed;

        element.style.transform =
            `translateY(${scrollY * speed}px)`;

    });

});


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el => observer.observe(el));