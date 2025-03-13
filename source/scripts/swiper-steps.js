const swiperSteps = document.querySelector('.swiper');

let swiper = null;

function initSwiper(Swiper, Pagination) {
  if (swiper !== null || !swiperSteps) {
    return;
  }

  swiper = new Swiper(swiperSteps, {
    modules: [Pagination],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function destroySwiper() {
  if (swiper === null || !swiperSteps) {
    return;
  }

  swiper.destroy();
  swiper = null;
}


export {initSwiper, destroySwiper};
