// Pastikan library ScrollReveal terpasang di HTML
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500,
    delay: 200,
    reset: true
});

sr.reveal('.hero-content', {});
sr.reveal('.about-card', { delay: 300 });
sr.reveal('.dev-status', { delay: 400, scale: 0.9 });
