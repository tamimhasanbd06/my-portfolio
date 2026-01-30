// Smooth scroll navigation
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
        });
    });
});

// Navbar shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll(".card, .project-card, .brands");
const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("reveal-active");
        }
    });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Button ripple effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        const rect = this.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];
        if (ripple) ripple.remove();

        this.appendChild(circle);
    });
});
