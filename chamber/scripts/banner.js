const date = new Date();
const dayOfWeek = date.getDay(); 
const banner = document.querySelector('.banner2')
const closeBanner = document.querySelector('#closeBanner')

if(!(dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3)){
    banner.style.display = 'none';
}

closeBanner.addEventListener('click', () => {
    banner.classList.toggle('close');
    closeBanner.classList.toggle('open');
})