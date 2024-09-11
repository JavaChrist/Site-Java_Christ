var typed = new Typed(".text", {
    strings: ["Web Developer", "Frontend Developer", "Freelance"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Ajoutez ce code à la fin du fichier script.js
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.contact-form form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêche l'envoi standard du formulaire

            // Envoie le formulaire
            form.submit();

            // Réinitialise le formulaire après un court délai
            setTimeout(function () {
                form.reset();
            }, 100);
        });
    }
});

// Ajout du code de défilement fluide
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.getAttribute('href') === '#') {
                // Scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                // Define different offsets for different sections
                let headerOffset = 150; // Default offset

                if (targetID === 'skills') {
                    headerOffset = 290; // Adjust this value as needed for the skills section
                }

                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
