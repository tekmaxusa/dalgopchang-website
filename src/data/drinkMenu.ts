/**
 * Drink menu — compact layout on the Menu page (aligned with printed menu).
 */

export type DrinkRow = {
  ko: string;
  en: string;
};

export const SOJU_STANDARD: DrinkRow[] = [
  { ko: "참이슬 후레쉬, 오리지널", en: "Chamisul Fresh, Original" },
  { ko: "진로이즈백", en: "Jinro is back" },
  { ko: "한라산 17도 / 한라산 21도", en: "Hallasan from Jeju Island (17% ABV / 21% ABV)" },
  { ko: "처음처럼", en: "Chum churum" },
  { ko: "새로", en: "Saero" },
];

export const SOJU_FLAVORS =
  "Grapefruit, Green Grape, Lychee, Peach, Pineapple, Plum, Pomegranate, Mango, Lemon, Strawberry, Apple Mango, Yogurt, Orange";

export const PRICES = {
  soju: "$14.99",
  flavoredSoju: "$14.99",
  highball: "$11.99",
  wine: "$17.99",
  beerDomestic: "$4.99",
  beerImported: "$5.99",
  beerTerra: "$9.99",
  soda: "$2.50",
  milkis: "$3.50",
  hongcho: "$4.99",
} as const;

/** Hero images for each drink section (see `public/photos/drink-*.png`). */
export const DRINK_SECTION_IMAGES = {
  soju: { src: "/photos/drink-soju.png", alt: "Korean soju" },
  highball: { src: "/photos/drink-highball.png", alt: "Highball drinks" },
  wine: { src: "/photos/drink-makgeolli.png", alt: "Korean wine and makgeolli" },
  beer: { src: "/photos/drink-beer.png", alt: "Beer" },
  soda: { src: "/photos/drink-soda.png", alt: "Soft drinks" },
} as const;
