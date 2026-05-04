// Select elements for mobile navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu when clicking the hamburger button
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu automatically when a navigation link is clicked
if (navLinksItems.length > 0) {
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    // Current positions
    let mouseX = 0;
    let mouseY = 0;

    // Outline's trailing positions
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Instantly move the dot to the mouse position
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Animate the outline with a slight delay/easing for smooth follow
    function animateCursor() {
        // Easing factor (lower is slower)
        const easing = 0.15;

        // Calculate distance
        const dx = mouseX - outlineX;
        const dy = mouseY - outlineY;

        // Ease towards mouse
        outlineX += dx * easing;
        outlineY += dy * easing;

        // Apply to outline
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }

    // Start animation loop
    animateCursor();

    // Add hover effects for clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, select, .tag');
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });
}

// Project Toggle Logic
const toggleBtns = document.querySelectorAll('.toggle-btn');
const projectGrids = document.querySelectorAll('.project-grid');
const toggleSlider = document.querySelector('.toggle-slider');

if (toggleBtns.length > 0 && toggleSlider) {
    toggleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            // Move slider
            const btnWidth = btn.offsetWidth;
            const leftPosition = btn.offsetLeft;
            toggleSlider.style.width = `${btnWidth}px`;
            toggleSlider.style.transform = `translateX(${leftPosition - 5}px)`; // -5 because of container padding

            // Toggle Grids
            const targetId = btn.getAttribute('data-target');
            projectGrids.forEach(grid => {
                if (grid.id === targetId) {
                    grid.style.display = 'grid';
                } else {
                    grid.style.display = 'none';
                }
            });
        });
    });

    // Initialize slider position
    window.addEventListener('load', () => {
        const activeBtn = document.querySelector('.toggle-btn.active');
        if (activeBtn && toggleSlider) {
            toggleSlider.style.width = `${activeBtn.offsetWidth}px`;
            toggleSlider.style.transform = `translateX(${activeBtn.offsetLeft - 5}px)`;
        }
    });
}
