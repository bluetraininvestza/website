/* ================= MOBILE NAV ================= */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
});

/* ================= HERO ANIMATION ================= */
window.addEventListener('load', () => {
    document.querySelector('.hero-text').classList.add('show');
    document.querySelector('.hero-image').classList.add('show');
});

/* ================= SCROLL REVEAL ================= */
const revealItems = document.querySelectorAll('.service-card');

function revealOnScroll() {
    revealItems.forEach(item => {
        const rect = item.getBoundingClientRect().top;
        if (rect < window.innerHeight - 80) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
