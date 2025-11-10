// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Copy functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async function() {
        const text = this.getAttribute('data-copy');
        try {
            await navigator.clipboard.writeText(text);
            this.textContent = 'Copied';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});

// Navbar scroll effect & scroll progress
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollProgress = document.querySelector('.scroll-progress');

    // Navbar background
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 20, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 20, 0.8)';
    }

    // Scroll progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});
