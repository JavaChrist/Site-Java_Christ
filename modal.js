document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var modalTitle = document.getElementById("modal-title");
    var modalText = document.getElementById("modal-text");
    var servicesSection = document.getElementById("services");

    var serviceContent = {
        service1: {
            title: "Web Creation",
            text: "Notre service de création web offre des solutions sur mesure pour votre présence en ligne. Nous combinons design innovant, fonctionnalités avancées et optimisation SEO pour créer des sites web qui non seulement attirent l'attention, mais convertissent également les visiteurs en clients. Notre approche englobe l'analyse de vos besoins, la conception UX/UI, le développement responsive, et l'intégration de systèmes de gestion de contenu pour une maintenance facile."
        },
        service2: {
            title: "UI/UX Design",
            text: "Notre service de design UI/UX va au-delà de l'esthétique pour créer des expériences utilisateur mémorables. Nous commençons par une recherche approfondie sur vos utilisateurs cibles, créons des personas, et élaborons des parcours utilisateur détaillés. Nos wireframes et prototypes interactifs permettent de tester et d'affiner l'expérience avant le développement. Le résultat ? Des interfaces intuitives qui augmentent l'engagement, la satisfaction et la fidélité des utilisateurs."
        },
        service3: {
            title: "SEO",
            text: "Notre expertise en SEO booste votre visibilité en ligne de manière durable. Nous effectuons une analyse approfondie de votre site et de votre marché pour élaborer une stratégie SEO sur mesure. Cela inclut l'optimisation on-page, la création de contenu de qualité, la construction de liens, et l'amélioration de la structure technique de votre site. Nous suivons de près les algorithmes des moteurs de recherche pour garantir que votre site reste en tête des résultats."
        },
        service4: {
            title: "Optimisation",
            text: "Notre service d'optimisation va au-delà de la simple présence sur Google My Business. Nous créons une stratégie locale complète, optimisant votre profil avec des informations précises, des photos attrayantes et des posts réguliers. Nous gérons également vos avis clients et mettons en place une stratégie de référencement local pour améliorer votre visibilité dans les recherches géolocalisées, attirant ainsi plus de clients potentiels dans votre zone."
        },
        service5: {
            title: "Hébergement",
            text: "Notre service d'hébergement offre bien plus qu'un simple espace sur un serveur. Nous fournissons une solution complète avec une haute disponibilité, des sauvegardes automatiques, et une sécurité renforcée. Notre équipe surveille en permanence les performances de votre site, effectue des mises à jour régulières, et offre un support technique 24/7. Vous pouvez ainsi vous concentrer sur votre contenu et votre entreprise, en sachant que votre site est entre de bonnes mains."
        },
        service6: {
            title: "Refonte de site",
            text: "Notre service de refonte de site web va au-delà d'un simple rafraîchissement visuel. Nous analysons en profondeur votre site actuel, identifions les points d'amélioration en termes de design, de fonctionnalités et de performances. Nous repensons entièrement l'architecture de l'information, optimisons l'expérience utilisateur, et intégrons les dernières technologies web pour créer un site moderne, performant et parfaitement adapté à vos objectifs commerciaux."
        }
    };

    document.querySelectorAll('.read').forEach(function (btn) {
        btn.onclick = function (e) {
            e.preventDefault();
            var service = this.getAttribute('data-service');
            modalTitle.textContent = serviceContent[service].title;
            modalText.textContent = serviceContent[service].text;

            // Calculer la position de la modale
            var rect = servicesSection.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var topPosition = rect.top + scrollTop + window.innerHeight / 2;

            document.body.style.overflow = 'hidden';
            modal.style.top = topPosition + 'px';
            modal.style.display = "block";
        }
    });

    span.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }
});