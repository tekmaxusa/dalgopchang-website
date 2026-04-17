export type MenuItem = {
  ko: string;
  en: string;
  description?: string;
  /** Korean line(s) for the dish detail (e.g. combo inclusions). Shown above English `description` when set. */
  descriptionKo?: string;
  /** Single price (used when lunch/dinner are not both set). */
  price?: string;
  /** Lunch price (e.g. entrées with lunch menu). */
  priceLunch?: string;
  /** Dinner / regular price when lunch pricing applies. */
  priceDinner?: string;
  imageSrc?: string;
};

/**
 * Shown on menu cards when no price is set in data.
 * Note: `public/DalgopchangMenu.pdf` is image-based (no extractable text). Update `price` here to match your printed menu.
 */
export function displayMenuPrice(item: MenuItem): string {
  const p = item.price?.trim();
  return p || "MP";
}

export function getMenuDescription(item: MenuItem): string | null {
  const d = item.description?.trim();
  if (!d || d === "N/A." || d === "N/A") return null;
  return d;
}

/** Lunch + dinner columns for entrée cards (single-price items show "—" for lunch). */
export function getEntreePriceCells(item: MenuItem): { lunch: string; dinner: string } {
  if (item.priceLunch?.trim() && item.priceDinner?.trim()) {
    return { lunch: item.priceLunch.trim(), dinner: item.priceDinner.trim() };
  }
  return { lunch: "—", dinner: displayMenuPrice(item) };
}

export type MenuItemSection = {
  id: string;
  title: string;
  items: MenuItem[];
  /** Shown under the section title (e.g. entrée lunch window). Split for mobile line break. */
  lunchMenuHoursEn1?: string;
  lunchMenuHoursEn2?: string;
  lunchMenuHoursKo1?: string;
  lunchMenuHoursKo2?: string;
};

export const MENU_ITEM_SECTIONS: MenuItemSection[] = [
  {
    id: "combo",
    title: "Combo",
    items: [
      {
        ko: "달라스 콤보",
        en: "Dallas Combo",
        descriptionKo: "곱창 / 대창 / 막창 / 특양",
        description: "Small & large intestine of cow / Abomasum / Tripe.",
        imageSrc: "/photos/kbbq-3.png",
        price: "$64.99",
      },
      {
        ko: "텍사스 콤보",
        en: "Texas Combo",
        descriptionKo: "곱창 / 대창 / 막창 / 특양",
        description: "Small & large intestine of cow / Abomasum / Tripe.",
        imageSrc: "/photos/kbbq-2.png",
        price: "$79.99",
      },
      {
        ko: "카우보이 콤보",
        en: "Cowboy Combo",
        descriptionKo: "특 등심 / 특 차돌박이 / 황제 늑간살 / 갈비살",
        description: "Prime ribeye / Prime brisket / Prime rib finger / Prime rib.",
        imageSrc: "/photos/kbbq-6.png",
        price: "$129.99",
      },
      {
        ko: "소고기 콤보",
        en: "Beef Combo",
        descriptionKo: "특 등심 / 차돌박이 / 늑간살",
        description: "Prime ribeye / Brisket / Rib finger.",
        imageSrc: "/photos/kbbq-10.png",
        price: "$79.99",
      },
      {
        ko: "돼지 콤보",
        en: "Pork Combo",
        descriptionKo: "삼겹살 / 항정살 / 돼지 목살",
        description: "Pork belly / Pork jowl / Pork Collar.",
        imageSrc: "/photos/kbbq-7.png",
        price: "$64.99",
      },
    ],
  },
  {
    id: "korean-bbq",
    title: "Korean BBQ",
    items: [
      { ko: "특 등심", en: "Prime rib-eye", description: "N/A.", imageSrc: "/photos/kbbq-6.png", price: "$36.99" },
      { ko: "소특양 구이", en: "Tripe", description: "N/A.", imageSrc: "/photos/kbbq-2.png", price: "$29.99" },
      { ko: "황제 늑간살", en: "Prime rib finger", description: "N/A.", imageSrc: "/photos/kbbq-1.png", price: "$34.99" },
      { ko: "차돌박이", en: "Brisket", description: "N/A.", imageSrc: "/photos/kbbq-11.png", price: "$32.99" },
      { ko: "갈비살", en: "Prime rib", description: "N/A.", imageSrc: "/photos/kbbq-10.png", price: "$35.99" },
      { ko: "염통 구이", en: "Heart of cow", description: "N/A.", imageSrc: "/photos/kbbq-4.png", price: "$28.99" },
      { ko: "소곱창 구이", en: "Small intestine of cow", description: "N/A.", imageSrc: "/photos/kbbq-3.png", price: "$32.99" },
      { ko: "소대창 구이", en: "Large intestine of cow", description: "N/A.", imageSrc: "/photos/kbbq-9.png", price: "$30.99" },
      { ko: "소막창 구이", en: "Abomasum", description: "N/A.", imageSrc: "/photos/kbbq-5.png", price: "$31.99" },
      { ko: "껍데기 삼겹살", en: "Pork belly", description: "N/A.", imageSrc: "/photos/kbbq-7.png", price: "$27.99" },
      { ko: "돼지 갈비", en: "Pork rib", description: "N/A.", imageSrc: "/photos/kbbq-8.png", price: "$28.99" },
      { ko: "항정살", en: "Pork jowl", description: "N/A.", imageSrc: "/photos/kbbq-5.png", price: "$29.99" },
      { ko: "돼지 목살", en: "Pork Collar", description: "N/A.", imageSrc: "/photos/kbbq-8.png", price: "$26.99" },
    ],
  },
  {
    id: "chef-special",
    title: "Chef Special",
    items: [
      { ko: "곱창 전골", en: "Small intestine stew", description: "N/A.", imageSrc: "/photos/chef-4.png", price: "$42.99" },
      { ko: "낙곱새 전골", en: "Small octopus, intestine of cow, shrimp stew", description: "N/A.", imageSrc: "/photos/chef-10.png", price: "$44.99" },
      { ko: "간장게장", en: "Soy sauce marinated raw crab", description: "N/A.", imageSrc: "/photos/chef-1.png", price: "$38.99" },
      { ko: "양념게장", en: "Spicy sauce marinated raw crab", description: "N/A.", imageSrc: "/photos/chef-7.png", price: "$38.99" },
      { ko: "육회", en: "Marinated raw beef slices", description: "N/A.", imageSrc: "/photos/chef-6.png", price: "$34.99" },
      { ko: "소곱창 볶음", en: "Spicy stir-fried small intestine of cow", description: "N/A.", imageSrc: "/photos/chef-8.png", price: "$36.99" },
      { ko: "낙곱새 볶음", en: "Spicy stir-fried small octopus & intestine of cow, shrimp", description: "N/A.", imageSrc: "/photos/chef-3.png", price: "$37.99" },
      { ko: "지랄 닭발", en: "Spicy stir-fried chicken foot", description: "N/A.", imageSrc: "/photos/chef-9.png", price: "$32.99" },
    ],
  },
  {
    id: "side-dish-to-add",
    title: "Side Dish to Add",
    items: [
      { ko: "라면사리", en: "Extra ramen noodles", description: "N/A.", imageSrc: "/photos/side-ramen.png", price: "$4.99" },
      { ko: "우동사리", en: "Extra udon noodles", description: "N/A.", imageSrc: "/photos/side-udon.png", price: "$4.99" },
      { ko: "떡사리", en: "Extra rice cake", description: "N/A.", imageSrc: "/photos/side-rice-cake.png", price: "$4.99" },
      { ko: "국수사리", en: "Extra noodles", description: "N/A.", imageSrc: "/photos/side-wheat-noodles.png", price: "$4.99" },
      { ko: "치즈사리", en: "Extra cheese", description: "N/A.", imageSrc: "/photos/side-cheese.png", price: "$5.99" },
      { ko: "공기밥", en: "Rice", description: "N/A.", imageSrc: "/photos/side-rice.png", price: "$3.99" },
      { ko: "오뎅탕", en: "Fish cake soup", description: "N/A.", imageSrc: "/photos/side-odeng.png", price: "$8.99" },
      { ko: "콘치즈", en: "Corn & cheese", description: "N/A.", imageSrc: "/photos/side-corn-cheese.png", price: "$7.99" },
    ],
  },
  {
    id: "entree",
    title: "Entree",
    lunchMenuHoursEn1: "Lunch menu available",
    lunchMenuHoursEn2: "Mon–Sat · until ~3:30 PM",
    lunchMenuHoursKo1: "런치 메뉴",
    lunchMenuHoursKo2: "월–토 · 오후 3:30경까지",
    items: [
      {
        ko: "부산 돼지 국밥",
        en: "Busan pork stew",
        description: "N/A.",
        imageSrc: "/photos/entree-busan-pork-stew.png",
        priceLunch: "$9.99",
        priceDinner: "$14.99",
      },
      {
        ko: "얼큰 돼지 국밥",
        en: "Spicy pork stew",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-pork-stew.png",
        priceLunch: "$9.99",
        priceDinner: "$14.99",
      },
      {
        ko: "섞어탕",
        en: "Mixed stew",
        description: "N/A.",
        imageSrc: "/photos/entree-seokeotang.png",
        priceLunch: "$9.99",
        priceDinner: "$14.99",
      },
      {
        ko: "얼큰 섞어탕",
        en: "Spicy mixed stew",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-seokeotang.png",
        priceLunch: "$9.99",
        priceDinner: "$14.99",
      },
      {
        ko: "간장게장 백반",
        en: "Soy sauce marinated raw crab",
        description: "N/A.",
        imageSrc: "/photos/entree-soy-crab.png",
        priceLunch: "$17.99",
        priceDinner: "$21.99",
      },
      {
        ko: "양념게장 백반",
        en: "Spicy sauce marinated raw crab",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-crab.png",
        priceLunch: "$15.99",
        priceDinner: "$19.99",
      },
      {
        ko: "소불고기",
        en: "Beef Bulgogi",
        description: "N/A.",
        imageSrc: "/photos/entree-bulgogi.png",
        price: "$22.99",
      },
      {
        ko: "돼지불고기",
        en: "Spicy sauce marinated pork",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-pork-bulgogi.png",
        price: "$16.99",
      },
      {
        ko: "오징어 볶음",
        en: "Stir-fried squid",
        description: "N/A.",
        imageSrc: "/photos/entree-stir-fried-squid.png",
        price: "$16.99",
      },
      {
        ko: "뚝곱창탕",
        en: "Beef small intestine stew",
        description: "N/A.",
        imageSrc: "/photos/entree-duk-gopchang-tang.png",
        price: "$17.99",
      },
      {
        ko: "김치찌개",
        en: "Kimchi stew",
        description: "N/A.",
        imageSrc: "/photos/entree-kimchi-jjigae.png",
        price: "$14.99",
      },
      {
        ko: "특양 볶음밥",
        en: "Fried rice with tripe",
        description: "N/A.",
        imageSrc: "/photos/entree-tripe-fried-rice.png",
        price: "$15.99",
      },
      {
        ko: "새우 볶음밥",
        en: "Fried rice with shrimp",
        description: "N/A.",
        imageSrc: "/photos/entree-shrimp-fried-rice.png",
        price: "$15.99",
      },
      {
        ko: "날치알 주먹밥",
        en: "Flying fish roe onigiri",
        description: "N/A.",
        imageSrc: "/photos/entree-onigiri.png",
        price: "$12.99",
      },
      {
        ko: "제주도 고기 국수",
        en: "Jejudo pork noodles",
        description: "N/A.",
        imageSrc: "/photos/entree-jeju-gogi-guksu.png",
        price: "$14.99",
      },
      {
        ko: "불타는 볶음면",
        en: "Extremely spicy stir-fried noodles",
        description: "N/A.",
        imageSrc: "/photos/entree-extremely-spicy-noodles.png",
        price: "$14.99",
      },
      {
        ko: "물냉면 / 비빔냉면",
        en: "Cold noodle / Spicy cold noodles",
        description: "N/A.",
        imageSrc: "/photos/entree-cold-noodles.png",
        price: "$13.99",
      },
      {
        ko: "라면",
        en: "Korean ramen",
        description: "N/A.",
        imageSrc: "/photos/entree-ramen.png",
        price: "$11.99",
      },
      {
        ko: "군만두 6pcs",
        en: "Fried dumplings 6pcs",
        description: "N/A.",
        imageSrc: "/photos/entree-gun-mandu.png",
        price: "$9.99",
      },
      {
        ko: "볶음밥",
        en: "Fried rice",
        description: "N/A.",
        imageSrc: "/photos/entree-bokkeumbap.png",
        price: "$12.99",
      },
    ],
  },
  {
    id: "drink",
    title: "Drink",
    /** Card grid not used — see `DrinkMenuCompact` + `drinkMenu.ts`. */
    items: [],
  },
];

