const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('.navigation');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
    navigation.classList.toggle('active');
});

