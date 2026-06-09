document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            // Deschide/Închide lista cu pagini
            navLinks.classList.toggle("active");
            
            // Transformă liniile în X și înapoi
            hamburger.classList.toggle("active");
        });
    }
});