// Main JavaScript for Wedding Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize animations
    initAnimations();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
                
                // Smooth scroll to section
                section.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    // Handle hash changes
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const section = document.getElementById(hash);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth' });
                section.classList.add('active');
                const correspondingLink = document.querySelector(`[data-section="${hash}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }, 100);
        }
    }
}

/**
 * Initialize animations and interactive elements
 */
function initAnimations() {
    // Add entrance animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe header elements
    const headerElements = document.querySelectorAll('.header > *');
    headerElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(el);
    });
    
    // Observe illustration
    const illustration = document.querySelector('.illustration');
    if (illustration) {
        illustration.style.opacity = '0';
        illustration.style.transform = 'scale(0.9)';
        illustration.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
        observer.observe(illustration);
    }
    
    // Observe navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${0.6 + index * 0.1}s, transform 0.5s ease ${0.6 + index * 0.1}s`;
        observer.observe(item);
    });
}

/**
 * Utility function to show a specific section
 * @param {string} sectionId - The ID of the section to show
 */
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    const link = document.querySelector(`[data-section="${sectionId}"]`);
    
    if (section && link) {
        // Remove active from all
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        
        // Add active to selected
        link.classList.add('active');
        section.classList.add('active');
        
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Export functions for external use
window.weddingWebsite = {
    showSection: showSection
};

