
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // Typing animation
    const heading = document.querySelector(".home-content h2");

    if (heading) {
        const roles = [
            "AI & Machine Learning Enthusiast",
            "Generative AI Learner",
            "Computer Science Student"
        ];

        let roleIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        heading.classList.add("typing-text");

        function typeEffect() {
            const currentRole = roles[roleIndex];

            if (deleting) {
                characterIndex--;
            } else {
                characterIndex++;
            }

            heading.textContent = currentRole.substring(0, characterIndex);

            let speed = deleting ? 45 : 85;

            if (!deleting && characterIndex === currentRole.length) {
                deleting = true;
                speed = 1500;
            } else if (deleting && characterIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 400;
            }

            setTimeout(typeEffect, speed);
        }

        heading.textContent = "";
        typeEffect();
    }


    // Home entrance animation
    const homeContent = document.querySelector(".home-content");

    if (homeContent) {
        homeContent.animate(
            [
                { opacity: 0, transform: "translateY(30px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 1000,
                easing: "ease-out",
                fill: "both"
            }
        );
    }


    // Scroll reveal animation
    const animatedElements = document.querySelectorAll(
        ".section-heading, .about-content, .skill-card, .project-card, .contact-content"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.animate(
                            [
                                { opacity: 0, transform: "translateY(35px)" },
                                { opacity: 1, transform: "translateY(0)" }
                            ],
                            {
                                duration: 700,
                                easing: "ease-out",
                                fill: "both"
                            }
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });
    }

    console.log("Enhanced portfolio animations loaded!");

});
