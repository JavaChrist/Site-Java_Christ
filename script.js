// Typed.js configuration
var typed = new Typed(".text", {
    strings: ["Web Developer", "Frontend Developer", "Freelance"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    // Formulaire en français
    var formFr = document.querySelector('#contact-form');
    var formMessageFr = document.getElementById('form-message');

    if (formFr) {
        formFr.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêche la soumission standard

            var formData = new FormData(formFr);

            fetch('https://formspree.io/f/xwpejvql', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                if (response.ok) {
                    formMessageFr.style.display = 'block';
                    formMessageFr.textContent = "Merci pour votre message, nous vous répondrons bientôt !"; // Affiche le message de confirmation français
                    formFr.reset(); // Réinitialise le formulaire
                } else {
                    alert('Il y a eu une erreur, veuillez réessayer.');
                }
            }).catch(function (error) {
                alert('Il y a eu une erreur, veuillez réessayer.');
            });
        });
    }

    // Formulaire en anglais
    var formEn = document.querySelector('#contact-form-en');
    var formMessageEn = document.getElementById('form-message-en');

    if (formEn) {
        formEn.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêche la soumission standard

            var formData = new FormData(formEn);

            fetch('https://formspree.io/f/xwpejvql', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                if (response.ok) {
                    formMessageEn.style.display = 'block';
                    formMessageEn.textContent = "Thank you for your message, we will get back to you soon!"; // Affiche le message de confirmation anglais
                    formEn.reset(); // Réinitialise le formulaire
                } else {
                    alert('There was an error, please try again.');
                }
            }).catch(function (error) {
                alert('There was an error, please try again.');
            });
        });
    }
});



// Smooth scrolling code
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
