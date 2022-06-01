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

