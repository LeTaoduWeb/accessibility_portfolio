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

