import Cookies from 'js-cookie';

import {
  purchaseLinks as links,
  editionsList as editions,
  platformsList as platforms,
  comingSoon,
  editionsInfo as edition,
} from './purchaselinks_object';

const purchaseLinks = links;
const editionsList = editions;
const platformsList = platforms;
const comingSoonText = comingSoon;
const editionsInfo = edition;

//variables list
const customSelectEdition = document.querySelector('.edition .custom__select');
const selectBtnEdition = document.querySelector(
  '.edition .custom__select__button'
);
const selectedValueEdition = document.querySelector(
  '.edition .custom__select__value'
);
const optionsListEdition = document.querySelectorAll(
  '.edition .custom__select__dropdown li'
);

const customSelectPlatform = document.querySelector(
  '.platform .custom__select'
);
const selectBtnPlatform = document.querySelector(
  '.platform .custom__select__button'
);
const selectedValuePlatform = document.querySelector(
  '.platform .custom__select__value'
);
const optionsListPlatform = document.querySelectorAll(
  '.platform .custom__select__dropdown li'
);

const customSelectRetailers = document.querySelector(
  '.retailers .custom__select'
);
const selectBtnRetailers = document.querySelector(
  '.retailers .custom__select__button'
);
const selectedValueRetailers = document.querySelector(
  '.retailers .custom__select__value'
);
const optionsListRetailers = document.querySelectorAll(
  '.retailers .custom__select__dropdown li'
);

//setup/change glamshot and text based on edition chosen
const updateGlamAndText = () => {
  const lang = Cookies.get('lang');
  const editionType = Cookies.get('edition');
  const title = document.querySelector('.purchase__desc__wrapper h1');
  const unorderedList = document.querySelector('.purchase__desc__wrapper ul');
  let itemsToPlace = '';
  const glamshotImages = document.querySelectorAll('.purchase__glamshot img');
  editionsInfo[lang][editionType].title
    ? (title.innerHTML = editionsInfo[lang][editionType].title)
    : (title.innerHTML = '');
  glamshotImages.forEach((glamshot) => {
    glamshot.src = editionsInfo[lang][editionType].image;
  });
  if (editionsInfo[lang][editionType].items.length > 0) {
    editionsInfo[lang][editionType].items.forEach((item) => {
      itemsToPlace += `
        <li><strong>${item.title}</strong> ${item.desc}</li>
      `;
    });
    unorderedList.innerHTML = itemsToPlace;
  }
};

//create/update the purchase button
const purchaseBtns = () => {
  const lang = Cookies.get('lang');
  let platform = Cookies.get('platform');
  if (platform.includes('xbox')) {
    platform = 'xbox';
  }
  const edition = Cookies.get('edition');
  const retailer = selectedValueRetailers.textContent;
  let purchaseHTMLDigital = '';
  let purchaseHTMLPhysical = '';
  if (
    edition.includes('digital') &&
    purchaseLinks[lang][platform]['digital'][edition] !== undefined &&
    purchaseLinks[lang][platform]['digital'][edition].length > 0
  ) {
    const digitalHREF = purchaseLinks[lang][platform]['digital'][edition];
    purchaseHTMLDigital = `
      <a 
        class="gtm__purchase" 
        href="${digitalHREF}" 
        target="_blank" 
        data-purchase="${lang} ${edition} ${platform}">
        <h5>pre-order now</h5>
      </a>
    `;
    document
      .querySelector('.custom__select__platform__button')
      .classList.remove('custom__select__purchase__button--disabled');
  } else {
    purchaseHTMLDigital = `
      <a 
        class="gtm__purchase" 
        target="_blank" 
        data-purchase="${lang} ${edition} ${platform}">
        <h5>pre-order now</h5>
        <h5 class='custom__select__comingsoon__text custom__select__purchase__button__comingsoon'>${comingSoonText[lang]}</h5>
      </a>
    `;
    document
      .querySelector('.custom__select__platform__button')
      .classList.add('custom__select__purchase__button--disabled');
  }
  document.querySelector('.custom__select__platform__button').innerHTML =
    purchaseHTMLDigital;
  if (edition.includes('physical')) {
    const retailerList = purchaseLinks[lang][platform]['physical'];
    const index = retailerList.findIndex((obj) => obj.name === retailer);
    if (retailerList.length !== 0 && index !== -1) {
      const physicalHREF =
        purchaseLinks[lang][platform]['physical'][index].link;
      purchaseHTMLPhysical = `
        <a 
          class="gtm__purchase" 
          href="${physicalHREF}" 
          target="_blank" 
          data-purchase="${lang} ${edition} ${platform} ${retailer}">
          <h5>pre-order now</h5>
        </a>
      `;
      document
        .querySelector('.custom__select__retailers__button')
        .classList.remove('custom__select__purchase__button--disabled');
    } else {
      purchaseHTMLPhysical = `
      <a 
        class="gtm__purchase" 
        target="_blank" 
        data-purchase="${lang} ${edition} ${platform} ${retailer}">
        <h5>pre-order now</h5>
        <h5 class='custom__select__comingsoon__text custom__select__purchase__button__comingsoon'>${comingSoon[lang]}</h5>
      </a>
    `;
      document
        .querySelector('.custom__select__retailers__button')
        .classList.add('custom__select__purchase__button--disabled');
    }
    document.querySelector('.custom__select__retailers__button').innerHTML =
      purchaseHTMLPhysical;
  }
};

//handles retailer list showing up and whether button next to platforms shows up if digital edition
const showHideBtns = (edition) => {
  if (edition.includes('digital')) {
    document.querySelector('.retailers').classList.add('retailers__hidden');
    document
      .querySelector('.custom__select__platform__button')
      .classList.remove('custom__select__purchase__button__hidden');
  } else {
    document.querySelector('.retailers').classList.remove('retailers__hidden');
    document
      .querySelector('.custom__select__platform__button')
      .classList.add('custom__select__purchase__button__hidden');
  }
};

//reset so when switching editions, goes back to first platform
const resetPlatform = () => {
  const editionType = Cookies.get('edition');
  platformsList.forEach((platform) => {
    document
      .getElementById(platform.platform_id)
      .closest('li')
      .classList.remove('hidden');
    if (
      (editionType.includes('physical') && !platform.digitalOnly) ||
      editionType.includes('digital')
    ) {
      document
        .getElementById(platform.platform_id)
        .closest('li')
        .classList.remove('hidden');
    } else {
      document
        .getElementById(platform.platform_id)
        .closest('li')
        .classList.add('hidden');
    }
  });

  const platformCookie = platformsList[0].platform_cookie;
  Cookies.set('platform', platformCookie);
  selectedValuePlatform.textContent = document.querySelector(
    '.platform .custom__select .custom__select__dropdown li label'
  ).textContent;
};

//handles all select choices
const selectBtns = (eventTarget, btn) => {
  const btnCapitalize =
    btn.toLowerCase().charAt(0).toUpperCase() + btn.slice(1);
  const clickedItem = eval(`customSelect${btnCapitalize}`);
  const selectBtnToSet = eval(`selectBtn${btnCapitalize}`);
  if (eventTarget.closest('button')) {
    clickedItem.classList.toggle('active');
    selectBtnToSet.setAttribute(
      'aria-expanded',
      `selectBtn${btnCapitalize}.getAttribute('aria-expanded')` === 'true'
        ? 'false'
        : 'true'
    );
  }
  //using optional chaining here to make sure that if it's the button itself getting clicked an error doesn't get thrown.
  let eventName;
  if (eventTarget.closest('li')?.children[0].id) {
    eventName = eventTarget.closest('li').children[0].id;
  }
  if (btn.toLowerCase() === 'edition' && eventName !== undefined) {
    Cookies.set('edition', eventName);
    showHideBtns(eventName);
    resetPlatform();
    setUpRetailers();
    newOptionsHandler();
    purchaseBtns();
    updateGlamAndText();
  }
  if (btn.toLowerCase() === 'platform' && eventName !== undefined) {
    Cookies.set('platform', eventName);
    setUpRetailers();
    newOptionsHandler();
    purchaseBtns();
  }
  if (btn.toLowerCase() === 'retailers' && eventName !== undefined) {
    purchaseBtns();
  }
};

function closeAllSelect(evt) {
  const customSelectMenu = document.querySelectorAll('.custom__select');
  customSelectMenu.forEach((menu) => {
    if (!menu.contains(evt.target)) {
      menu.classList.remove('active');
    }
  });
}

function newOptionsHandler() {
  const checkOption = document.querySelectorAll(
    '.retailers .custom__select__dropdown li'
  );

  checkOption.forEach((option) => {
    function handler(e) {
      let fromOptionList = e.target.closest('aside').classList[0];
      fromOptionList =
        fromOptionList.charAt(0).toUpperCase() + fromOptionList.slice(1);
      const selectedValue = eval(`selectedValue${fromOptionList}`);
      const customSelect = eval(`customSelect${fromOptionList}`);
      // Click Events
      if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.textContent = this.children[1].textContent;
        customSelect.classList.remove('active');
      }
      // Key Events
      if (e.key === 'Enter') {
        selectedValue.textContent = this.textContent;
        customSelect.classList.remove('active');
      }
    }
    option.addEventListener('keyup', handler);
    option.addEventListener('click', handler);
  });
}

//sets up handlers, so deals with what happens when the button is clicked, or an option from the menu is chosen
function handlerSetup() {
  const checkTarget = document.querySelectorAll(
    '.edition .custom__select,.platform .custom__select, .retailers .custom__select'
  );

  const checkOption = document.querySelectorAll(
    '.edition .custom__select__dropdown li,.platform .custom__select__dropdown li, .retailers .custom__select__dropdown li'
  );

  checkTarget.forEach((item) => {
    function handler(e) {
      selectBtns(e.target, e.target.closest('aside').classList[0]);
    }
    item.addEventListener('click', handler);
  });

  checkOption.forEach((option) => {
    function handler(e) {
      let fromOptionList = e.target.closest('aside').classList[0];
      fromOptionList =
        fromOptionList.charAt(0).toUpperCase() + fromOptionList.slice(1);
      const selectedValue = eval(`selectedValue${fromOptionList}`);
      const customSelect = eval(`customSelect${fromOptionList}`);
      // Click Events
      if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.textContent = this.children[1].textContent;
        customSelect.classList.remove('active');
      }
      // Key Events
      if (e.key === 'Enter') {
        selectedValue.textContent = this.textContent;
        customSelect.classList.remove('active');
      }
    }
    option.addEventListener('keyup', handler);
    option.addEventListener('click', handler);
  });
  /* if the user clicks anywhere outside the select box,
      then close all select boxes: */
  document.addEventListener('click', closeAllSelect);
}

//creates the editions menu
const setUpEditions = () => {
  const lang = Cookies.get('lang');
  let editionsHTML = '';
  if (editionsList[lang].length !== 0) {
    editionsList[lang].forEach((edition) => {
      editionsHTML += `
        <li role="option">
            <input type="radio" id="${edition.edition_id}" name="edition" />
            <label for="${edition.edition_id}">${edition.edition_name}</label>
        </li>
        `;
    });
    document.querySelector('.edition .custom__select__dropdown').innerHTML =
      editionsHTML;
    const editionType = editionsList[lang][0].edition_id;
    Cookies.set('edition', editionType);
    showHideBtns(editionType);
    selectedValueEdition.textContent = document.querySelector(
      '.edition .custom__select .custom__select__dropdown li label'
    ).textContent;
  }
};

//creates the platforms menu
const setUpPlatforms = () => {
  let platformsHTML = '';
  if (platformsList.length !== 0) {
    platformsList.forEach((platform) => {
      platformsHTML += `
          <li role="option">
              <input type="radio" id="${platform.platform_id}" name="platform" class="${platform.platform_cookie}" />
              <label for="${platform.platform_id}">${platform.platform_name}</label>
          </li>
          `;
    });
    document.querySelector('.platform .custom__select__dropdown').innerHTML =
      platformsHTML;
    resetPlatform();
  }
};

//creates list of retailers
const setUpRetailers = () => {
  const lang = Cookies.get('lang');
  let platform = Cookies.get('platform');
  if (platform.includes('xbox')) {
    platform = 'xbox';
  }
  const editionType = Cookies.get('edition');
  if (!editionType.includes('digital')) {
    let retailersHTML = '';
    const retailerList = purchaseLinks[lang][platform].physical;
    //NOTE: need to add the else statment here to deal  with coming soon if retailer links aren't available
    if (retailerList.length !== 0) {
      retailerList.forEach((retailer) => {
        const condensedName = retailer.name.toLowerCase().replace(' ', '_');
        retailersHTML += `
        <li role="option">
          <input type="radio" id="${condensedName}" name="retailers" />
          <label for="${condensedName}">${retailer.name}</label>
        </li>
      `;
      });
    } else {
      retailersHTML = '';
      selectedValueRetailers.textContent = `${comingSoonText[lang]}`;
    }
    document.querySelector('.retailers .custom__select__dropdown').innerHTML =
      retailersHTML;
    if (
      document.querySelector(
        '.retailers .custom__select .custom__select__dropdown li label'
      ) !== null
    ) {
      selectedValueRetailers.textContent = document.querySelector(
        '.retailers .custom__select .custom__select__dropdown li label'
      ).textContent;
    }
  }
};

//initial set up for purchase area
const selectListSetup = () => {
  setUpEditions();
  setUpPlatforms();
  setUpRetailers();
  purchaseBtns();
  handlerSetup();
  updateGlamAndText();
};

selectListSetup();
