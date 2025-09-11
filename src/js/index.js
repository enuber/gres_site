import Cookies from 'js-cookie';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

//  checks to see if JS is enabled on the page. If it does, then no-js will be removed. This statement will allow css background images to be set.

document.documentElement.classList.remove('no-js');

//  replace <a> tag .jpg in media section with .webp files if webp is safe to use.

const isWebpAvailable = document.querySelector('html');
if (isWebpAvailable.classList.contains('webp')) {
  let singleSrc;
  let multilineSrc;
  document.querySelectorAll('[data-fancybox="media"]').forEach((elem) => {
    multilineSrc = elem.dataset.srcset.replace(/jpg/g, 'webp').trim();
    singleSrc = elem.dataset.src.replace('jpg', 'webp');
    elem.dataset.srcset = multilineSrc;
    elem.dataset.src = singleSrc;
  });
}

const activeNav = document.querySelector('.navigation__active');

activeNav.addEventListener('click', (e) => {
  e.preventDefault();
});

//  hiding part of nav or showing it. Otherwise see the buttons on the hamburger nav transition visibly on screen.
const setNavStyles = () => {
  const navigation = document.querySelector('.navigation__nav');
  const checkBox = document.querySelector('.navigation__checkbox');
  if (checkBox.checked) {
    checkBox.checked = false;
  }
  if (window.innerWidth < 600) {
    navigation.style.display = 'none';
    setTimeout(() => {
      navigation.style.display = 'block';
    }, 200);
  } else {
    // navigation.style.display = 'none';
    // setTimeout(() => {
    //   navigation.style.display = 'block';
    // }, 200);
  }
};
