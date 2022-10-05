
$(document).ready(function() {
    $('.header__burger,.menu__link').click(function(event) {
       $('.header__burger,.header__menu').toggleClass('active');
       $('body').toggleClass('lock');
    });
});



var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});





const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');



openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})







const openPopUpp = document.getElementById('open_pop_upp');
const closePopUpp = document.getElementById('pop_upp_close');
const popUpp = document.getElementById('pop_upp');



openPopUpp.addEventListener('click', function(e){
    e.preventDefault();
    popUpp.classList.add('active');
})

closePopUpp.addEventListener('click', () => {
    popUpp.classList.remove('active');
})





