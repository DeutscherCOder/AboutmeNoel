document.addEventListener('DOMContentLoaded', function() {
    // Modal Logic
    const btn = document.getElementById('sigmaBtn');
    const modal = document.getElementById('sigmaModal');
    const closeBtn = document.querySelector('.close-modal');

    btn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll Animationen
    const sections = document.querySelectorAll('.content-section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // Freund-Emojis folgen dem Mauszeiger
    const friendEmojis = document.querySelectorAll('.friend-emoji');
    
    document.addEventListener('mousemove', function(e) {
        friendEmojis.forEach((emoji, index) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            const moveX = (x - 0.5) * 40 * (index + 1);
            const moveY = (y - 0.5) * 40 * (index + 1);
            
            emoji.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});