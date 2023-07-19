let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};


const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardsContainer = document.querySelector('.cards-container');

prevButton.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});

$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
  
});
