const slider = document.querySelector('.brands__list');
let swiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
     },
		 breakpoints: {
					320: {
						slidesPerView: 1.25,
					},
          768: {
            enabled: false,
            width: 224,
            spaceBetween: 24,
          },
        },
   });

   slider.dataset.mobile = 'true';
   document.querySelector('.swiper-pagination').classList.remove('hidden');
  }
}
mobileSlider();



const showAllButton = document.querySelector('.show-all');
const arrow = document.querySelector('.show-all::before');
const brandsList = document.querySelector('.brands__list-wrapper');
const showAllText = showAllButton.textContent;

showAllButton.addEventListener('click', () => {
  if (showAllButton.classList.contains('show-all--hide')) {
    brandsList.style.overflow = 'hidden';
    brandsList.style.height = '160px';

    showAllButton.textContent = showAllText;
    showAllButton.classList.remove('show-all--hide');
		showAllButton.classList.remove("show-all--rotate");
  } else {
    brandsList.style.overflow = 'visible';
    brandsList.style.height = 'auto';

    showAllButton.textContent = 'Скрыть';
    showAllButton.classList.add('show-all--hide');
		showAllButton.classList.add("show-all--rotate");

  }
});

