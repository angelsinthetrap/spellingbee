document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((element) => {
        observer.observe(element);
    });

    initDaysCounter();
});

function initDaysCounter() {
    const deadline = new Date('2026-11-18');
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const badge = document.querySelector('.animate-pulse');
    if(diffDays > 0 && badge && badge.parentElement) {
        badge.parentElement.innerHTML += ' • осталось ' + diffDays + ' дн.';
    }
}