/* ===========================
   Smooth Scroll Navigation
   =========================== */

// Add smooth scrolling to all nav links (only for anchor links starting with #)
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only prevent default and smooth scroll for hash links (starting with #)
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // Otherwise, let the browser handle the navigation normally
    });
});

/* ===========================
   Intersection Observer for Project Tiles Animation
   =========================== */

// Configuration for the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
};

// Callback function when elements intersect
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the element is intersecting (visible in viewport)
        if (entry.isIntersecting) {
            // Add the animation class to trigger the CSS transition
            entry.target.classList.add('animate-in');
            
            // Optional: Stop observing once animated (one-time animation)
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer instance
const projectObserver = new IntersectionObserver(observerCallback, observerOptions);

// Observe all project tiles
document.addEventListener('DOMContentLoaded', () => {
    const projectTiles = document.querySelectorAll('.project-tile');
    
    projectTiles.forEach((tile, index) => {
        // Add a slight delay to each tile for a staggered effect
        tile.style.transitionDelay = `${index * 0.1}s`;
        
        // Start observing each tile
        projectObserver.observe(tile);
    });
});

/* ===========================
   Contact Form Handling - Removed (using Formspree instead)
   =========================== */

// Formspree handles the form submission automatically
// No JavaScript needed - just use the action attribute in the form

/* ===========================
   Active Navigation Link on Scroll
   =========================== */

// Update active nav link based on scroll position
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ===========================
   Navbar Background on Scroll
   =========================== */

// Add shadow to navbar when scrolling down
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(10, 35, 66, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(10, 35, 66, 0.1)';
    }
    
    lastScroll = currentScroll;
});
