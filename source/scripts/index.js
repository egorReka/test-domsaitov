import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import { initToggleMenu } from './toggle-menu';
import { initSwiper } from './swiper-steps';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initToggleMenu();
    initSwiper(Swiper, Pagination);
  });
});

// ---------------------------------

