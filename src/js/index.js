import Cookies from 'js-cookie';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

// if background video fails to play. replaces with image. Called from html inline onerror within video tag
function fallback(video) {
  const img = video.querySelector('img');
  if (img) {
    video.parentNode.replaceChild(img, video);
  }
}

// cookie set up when page loads. this will allow you to go directly to a FIGS page with index.html?lang="yourlangcode" and be able to have the correct language show up/////
//  will check for any name after a query string in the URL. Here using it to find the language if it's set.
const urlParam = (name) => {
  const results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
    window.location.href
  );
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};
//  this is how you use the above function, can put in any name that you need to find in a query string within the URL into the call.
const langQuery = urlParam('lang');
const langCookie = Cookies.get('lang');

//  now checking to see if language in the query and cookie are set and, fixing any issues
//  check to see if they are both there
if (langQuery && langCookie) {
  //  if they are both there but different we need to reset the cookie to what the query is and then reload the page
  if (langQuery !== langCookie) {
    Cookies.set('lang', langQuery);
    // window.location.replace("index.html?lang=" + langQuery);
  }
  //  if query is set but not the cookie, then we need to set the cookie and again reload the page
} else if (langQuery && !langCookie) {
  Cookies.set('lang', langQuery);
  //  window.location.replace("index.html?lang=" + langQuery);
  //  if neither is set, we set the cookie to english and leave the page alone.
} else if (!langCookie && !langQuery) {
  //  CHANGE THIS TO SET STARTING COUNTRY
  Cookies.set('lang', 'en');
  //  if the query doesn't exist but the cookie does then set it.
} else if (langQuery === null && langCookie) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('lang', langCookie);
  window.location.search = urlParams;
}
//  there is no else as the final group of if cookie is set but not the query string the correct language would still be displayed.

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
// window.addEventListener(
//   'resize',
//   () => {
//     setNavStyles();
//   },
//   true,
// );

// setNavStyles();
