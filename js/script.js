function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open')
  }
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
