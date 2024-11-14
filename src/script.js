document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('foot').textContent = new Date().getFullYear();

    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');

    menuToggle.addEventListener('click', () => {
        if (navItems.style.display === 'none' || navItems.style.display === '') {
            navItems.style.display = 'block';
        } else {
            navItems.style.display = 'none';
        }
    });

    function handleResize() {
        if (window.innerWidth < 480) {
            menuToggle.style.display = 'block';
            navItems.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            navItems.style.display = 'flex';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    document.querySelector('.about-me-email').addEventListener('click', function(e) {
        e.preventDefault();
        const email = 'danielwmartin1@gmail.com';
        window.location.href = `mailto:${email}`;
    });
});
