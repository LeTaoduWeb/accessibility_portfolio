// Menu mobile

const menuButton = document.querySelector('#menuMobile');
const menuBurger = document. querySelector('.menu__burger');
const menuClose = document.querySelector('.menu__burger--close');
const containerNav = document.querySelector('#navigationMobile');

function toggleNavMobile(){
    if(menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.removeAttribute('aria-expanded');
        menuBurger.style.display='';
        menuClose.style.display='';
        containerNav.style.display = '';
    } else {
        menuButton.setAttribute('aria-expanded', 'true');
        menuBurger.style.display = 'none';
        menuClose.style.display = 'block';
        containerNav.style.display = 'flex';
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

