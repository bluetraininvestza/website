// ================= NAVBAR MENU TOGGLE =================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open'); // optional for icon change
});

// ================= HEADER SCROLL EFFECT =================
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ================= HERO ANIMATION =================
const heroContent = document.querySelector('.hero-content');

window.addEventListener('load', () => {
    if(heroContent) {
        heroContent.classList.add('active'); // add active class for fade-in
    }
});

// ================= SCROLL REVEAL =================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100) { // 100px before element enters view
            el.classList.add('active');
        }
    });
}

// Initial call and on scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ================= STATS COUNTER =================
const counters = document.querySelectorAll('.stat span');

function runCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100); // adjust speed

        if(current < target) {
            counter.innerText = Math.min(current + increment, target);
            setTimeout(runCounters, 20);
        } else {
            counter.innerText = target;
        }
    });
}

// Trigger counters only if in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

function checkCounters() {
    counters.forEach(counter => {
        if(isElementInViewport(counter) && !counter.classList.contains('counted')) {
            counter.classList.add('counted'); // avoid re-running
            runCounters();
        }
    });
}

window.addEventListener('scroll', checkCounters);
window.addEventListener('load', checkCounters);