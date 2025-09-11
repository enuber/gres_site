import dde from '../img/purchase/digital_deluxe.jpg';
import dse from '../img/purchase/digital_standard.jpg';
import ple from '../img/purchase/physical_launch.jpg';
import pse from '../img/purchase/physical_standard.jpg';

// NOTE: edition_id MUST include digital or physical in it.
export const editionsList = {
  en: [
    {
      edition_name: 'Digital Deluxe Edition',
      edition_id: 'digitalDeluxe',
    },
    {
      edition_name: 'Digital Standard Edition',
      edition_id: 'digitalStandard',
    },
    {
      edition_name: 'Physical Launch Edition',
      edition_id: 'physicalLaunch',
    },
    {
      edition_name: 'Physical Standard Edition',
      edition_id: 'physicalStandard',
    },
  ],
  uk: [],
  au: [],
  fr: [],
  it: [],
  de: [],
  es: [],
  mx: [],
  br: [],
};

export const platformsList = [
  {
    platform_name: 'PlayStation&reg;5',
    platform_id: 'ps5',
    platform_cookie: 'ps5',
    digitalOnly: false,
  },
  {
    platform_name: 'PlayStation&reg;4',
    platform_id: 'ps4',
    platform_cookie: 'ps4',
    digitalOnly: false,
  },
  {
    platform_name: 'Xbox Seriexs X|S',
    platform_id: 'xbox_x_s',
    platform_cookie: 'xbox',
    digitalOnly: false,
  },
  {
    platform_name: 'Xbox One',
    platform_id: 'xbox_one',
    platform_cookie: 'xbox',
    digitalOnly: false,
  },
  {
    platform_name: 'Windows',
    platform_id: 'windows',
    platform_cookie: 'windows',
    digitalOnly: true,
  },
  {
    platform_name: 'Steam',
    platform_id: 'steam',
    platform_cookie: 'steam',
    digitalOnly: true,
  },
];

export const purchaseLinks = {
  en: {
    ps5: {
      digital: {
        digitalDeluxe:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-LIKEADRAGON80000',
        digitalStandard:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-DELUXEEDITION000',
      },
      physical: [
        {
          name: 'Best Buy',
          link: 'https://www.bestbuy.com/site/like-a-dragon-infinite-wealth-playstation-4/6562602.p?skuId=6562602',
        },
        {
          name: 'GameStop',
          link: 'https://www.gamestop.com/video-games/products/like-a-dragon-infinite-wealth-launch-edition---playstation-4/401446.html',
        },
        {
          name: 'GameStop (CA)',
          link: 'https://www.gamestop.ca/PS4/Games/913021/like-a-dragon-infinite-wealth',
        },
        {
          name: 'Amazon',
          link: 'https://www.amazon.com/Like-Dragon-Infinite-Wealth-PlayStation-4/dp/B0CJH31VFT/ref=sr_1_11',
        },
        {
          name: 'Target',
          link: 'https://www.target.com/p/like-a-dragon-infinite-wealth-playstation-4/-/A-90023941#lnk=sametab',
        },
        // {
        //   name: 'Walmart',
        //   link: 'https://www.walmart.com/ip/Sonic-Superstars-PlayStation-4/3632594759?from=/search',
        // },
        {
          name: 'VGP.CA',
          link: 'https://videogamesplus.ca/products/like-a-dragon-infinite-wealth-ps4?_pos=2&_sid=d40b27beb&_ss=r',
        },
      ],
    },
    ps4: {
      digital: {
        digitalDeluxe:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-LIKEADRAGON80000',
        digitalStandard:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-DELUXEEDITION000',
      },
      physical: [
        {
          name: 'Best Buy',
          link: 'https://www.bestbuy.com/site/like-a-dragon-infinite-wealth-playstation-4/6562602.p?skuId=6562602',
        },
        {
          name: 'GameStop',
          link: 'https://www.gamestop.com/video-games/products/like-a-dragon-infinite-wealth-launch-edition---playstation-4/401446.html',
        },
        {
          name: 'GameStop (CA)',
          link: 'https://www.gamestop.ca/PS4/Games/913021/like-a-dragon-infinite-wealth',
        },
        {
          name: 'Amazon',
          link: 'https://www.amazon.com/Like-Dragon-Infinite-Wealth-PlayStation-4/dp/B0CJH31VFT/ref=sr_1_11',
        },
        {
          name: 'Target',
          link: 'https://www.target.com/p/like-a-dragon-infinite-wealth-playstation-4/-/A-90023941#lnk=sametab',
        },
        // {
        //   name: 'Walmart',
        //   link: 'https://www.walmart.com/ip/Sonic-Superstars-PlayStation-4/3632594759?from=/search',
        // },
        {
          name: 'VGP.CA',
          link: 'https://videogamesplus.ca/products/like-a-dragon-infinite-wealth-ps4?_pos=2&_sid=d40b27beb&_ss=r',
        },
      ],
    },
    xbox: {
      digital: {
        digitalDeluxe:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-LIKEADRAGON80000',
        digitalStandard:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-DELUXEEDITION000',
      },
      physical: [
        {
          name: 'Best Buy',
          link: 'https://www.bestbuy.com/site/like-a-dragon-infinite-wealth-xbox-series-x-xbox-one/6562588.p?skuId=6562588',
        },
        {
          name: 'GameStop',
          link: 'https://www.gamestop.com/video-games/products/like-a-dragon-infinite-wealth-launch-edition---xbox-series-x/401450.html',
        },
        {
          name: 'GameStop (CA)',
          link: 'https://www.gamestop.ca/Xbox%20Series%20X/Games/913023/like-a-dragon-infinite-wealth',
        },
        {
          name: 'Amazon',
          link: 'https://www.amazon.com/Like-Dragon-Infinite-Wealth-Xbox-X/dp/B0CJGQH7Y7/ref=sr_1_2',
        },
        {
          name: 'Target',
          link: 'https://www.target.com/p/like-a-dragon-infinite-wealth-xbox-series-x-xbox-one/-/A-90023942#lnk=sametab',
        },
        // {
        //   name: 'Walmart',
        //   link: 'https://www.walmart.com/ip/Sonic-Superstars-Xbox-Series-X/2733130641?from=/search',
        // },
        {
          name: 'VGP.CA',
          link: 'https://videogamesplus.ca/products/like-a-dragon-infinite-wealth?_pos=3&_sid=d40b27beb&_ss=r',
        },
      ],
    },
    steam: {
      digital: {
        digitalDeluxe:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-LIKEADRAGON80000',
        digitalStandard:
          'https://store.playstation.com/product/UP0177-PPSA06435_00-DELUXEEDITION000',
      },
    },
    windows: {
      digital: {
        digitalStandard:
          'https://www.microsoft.com/store/productid/9P00SVGWDJCP',
        digitalDeluxe: 'https://www.microsoft.com/store/productid/9PFQFHCJQPT0',
      },
    },
  },
  au: {},
  uk: {},
  fr: {},
  it: {},
  de: {},
  es: {},
  mx: {},
  br: {},
};

export const comingSoon = {
  en: 'Links Coming Soon',
  uk: 'Links Coming Soon',
  au: 'Links Coming Soon',
  fr: 'Liens bientôt disponibles',
  it: 'Collegamenti presto disponibili',
  de: 'Links bald verfügbar',
  es: 'Enlaces muy pronto',
  br: 'Links em breve',
  mx: 'Próximamente los enlaces',
};

export const editionsInfo = {
  en: {
    digitalDeluxe: {
      image: dde,
      title: 'Digital Deluxe Edition Includes:',
      items: [
        { title: 'Full Game', desc: '' },
        { title: '"2 Sacred Treasure Sets" DLC', desc: '(*Pre-order Bonus)' },
        {
          title: 'DLC - Mitama Dance of Wealth -',
          desc: 'Increases the spawn rate of "Saki Mitama," demons that drop items that can be sold for Macca.',
        },
        {
          title: 'DLC - Mitama Dance of EXP -',
          desc: 'Increases the spawn rate of ”Kushi Mitama,“ demons that drop items that give the protagonist EXP, and "Ara Mitama," demons that drop items that give ally demons EXP.',
        },
      ],
    },
    digitalStandard: {
      image: dse,
      title: 'Digital Standard Edition Includes:',
      items: [
        { title: 'Full Game', desc: '' },
        { title: '"2 Sacred Treasure Sets" DLC', desc: '(*Pre-order Bonus)' },
      ],
    },
    physicalLaunch: {
      image: ple,
      title: 'Physical Launch Edition Includes:',
      items: [
        { title: 'Full Game', desc: '' },
        { title: '"2 Sacred Treasure Sets" DLC', desc: '(*Pre-order Bonus)' },
        { title: 'Steelbook&reg;', desc: '' },
      ],
    },
    physicalStandard: {
      image: pse,
      title: 'Physical Standard Edition Includes:',
      items: [{ title: 'Full Game', desc: '' }],
    },
  },
  uk: {},
  au: {},
  fr: {},
  it: {},
  de: {},
  es: {},
  mx: {},
  br: {},
};
