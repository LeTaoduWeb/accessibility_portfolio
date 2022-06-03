// Menu mobile

const menuButton = document.querySelector('#menuMobile');
const menuBurger = document. querySelector('.menu__burger');
const menuClose = document.querySelector('.menu__burger--close');
const containerNav = document.querySelector('#navigationMobile');

function toggleNavMobile(){
        menuBurger.classList.toggle('hidden__mobile');
        menuClose.classList.toggle('hidden__mobile');
        containerNav.classList.toggle('hidden__mobile');
        if(menuButton.getAttribute('aria-expanded') === 'true') {
            menuButton.setAttribute('aria-expanded', 'false');
        } else {
            menuButton.setAttribute('aria-expanded', 'true');
        }
}

menuButton.addEventListener('click', toggleNavMobile);


// Bouton vers le haut

mybutton = document.querySelector("#topBtn");

// Montrer le bouton lorsque l'utilisateur descend au-dessus de 100px
window.onscroll = function() {scrollFunction()};

let isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null 
    || screen.width <= 480;

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// Quand l'utilisateur clique sur le bouton, la page remonte vers le haut
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', topFunction);

/* Accordéon valeurs */

const toggles = document.querySelectorAll('.metier__toggle');


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        let attributeToggle = toggle.getAttribute('aria-expanded');
        let descriptionValue = toggle.parentNode.nextElementSibling;

        if(attributeToggle === 'true') {
            toggle.setAttribute('aria-expanded', 'false');
            descriptionValue.setAttribute('hidden','');
        } else {
            toggle.setAttribute('aria-expanded', 'true');
            descriptionValue.removeAttribute('hidden');
        }
    })
})