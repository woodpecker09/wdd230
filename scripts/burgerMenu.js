document.addEventListener("DOMContentLoaded", function() {

    const mainnav = document.querySelector('nav')
    const hambutton = document.querySelector('#menuButton');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
   
});
