/* ===============================
   SKILL CARD HEIGHT SYNC
================================ */
function syncSkillCardHeight() {
    const rightCard = document.getElementById("rightSkillCard");
    const leftCard = document.getElementById("leftSkillCard");

    if (!rightCard || !leftCard) return;

    leftCard.style.height = rightCard.offsetHeight + "px";
}

window.addEventListener("load", syncSkillCardHeight);
window.addEventListener("resize", syncSkillCardHeight);

/* ===============================
   SEE BUTTON (OPEN NEW TAB)
================================ */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".see-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const link = btn.getAttribute("href");
            if (link) window.open(link, "_blank");
        });
    });
});

/* ===============================
   NAVBAR SMOOTH SCROLL
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const navbarHeight = navbar.offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (!target) return;

            const offsetTop = target.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});

/* ===============================
   HAMBURGER MENU TOGGLE
================================ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
