export type MenuItem = {
  ko: string;
  en: string;
  description?: string;
  price?: string;
  imageSrc?: string;
};

/** Shown on menu cards when no price is set in data (replace per item in `MENU_ITEM_SECTIONS`). */
export function displayMenuPrice(item: MenuItem): string {
  const p = item.price?.trim();
  return p || "MP";
}

export function getMenuDescription(item: MenuItem): string | null {
  const d = item.description?.trim();
  if (!d || d === "N/A." || d === "N/A") return null;
  return d;
}

export type MenuItemSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const MENU_ITEM_SECTIONS: MenuItemSection[] = [
  {
    id: "combo",
    title: "Combo",
    items: [
      {
        ko: "달라스 콤보",
        en: "Dallas Combo",
        description: "Small & large intestine of cow / Abomasum / Tripe.",
        imageSrc: "/photos/kbbq-3.png",
        price: "$89.99",
      },
      {
        ko: "텍사스 콤보",
        en: "Texas Combo",
        description: "Small & large intestine of cow / Abomasum / Tripe.",
        imageSrc: "/photos/kbbq-2.png",
        price: "$89.99",
      },
      {
        ko: "카우보이 콤보",
        en: "Cowboy Combo",
        description: "Prime ribeye / Prime brisket / Prime rib finger / Prime rib.",
        imageSrc: "/photos/kbbq-6.png",
        price: "$129.99",
      },
      {
        ko: "소고기 콤보",
        en: "Beef Combo",
        description: "Prime ribeye / Brisket / Rib finger.",
        imageSrc: "/photos/kbbq-10.png",
        price: "$79.99",
      },
      {
        ko: "돼지 콤보",
        en: "Pork Combo",
        description: "Pork belly / Pork jowl / Pork Collar.",
        imageSrc: "/photos/kbbq-7.png",
        price: "$69.99",
      },
    ],
  },
  {
    id: "korean-bbq",
    title: "Korean BBQ",
    items: [
      { ko: "특 등심", en: "Prime rib-eye", description: "N/A.", imageSrc: "/photos/kbbq-6.png" },
      { ko: "소특양 구이", en: "Tripe", description: "N/A.", imageSrc: "/photos/kbbq-4.png" },
      { ko: "황제 늑간살", en: "Prime rib finger", description: "N/A.", imageSrc: "/photos/kbbq-1.png" },
      { ko: "차돌박이", en: "Brisket", description: "N/A.", imageSrc: "/photos/kbbq-11.png" },
      { ko: "갈비살", en: "Prime rib", description: "N/A.", imageSrc: "/photos/kbbq-10.png" },
      { ko: "염통 구이", en: "Heart of cow", description: "N/A.", imageSrc: "/photos/kbbq-12.png" },
      { ko: "소곱창 구이", en: "Small intestine of cow", description: "N/A.", imageSrc: "/photos/kbbq-3.png" },
      { ko: "소대창 구이", en: "Large intestine of cow", description: "N/A.", imageSrc: "/photos/kbbq-2.png" },
      { ko: "소막창 구이", en: "Abomasum", description: "N/A.", imageSrc: "/photos/kbbq-5.png" },
      { ko: "껍데기 삼겹살", en: "Pork belly", description: "N/A.", imageSrc: "/photos/kbbq-7.png" },
      { ko: "돼지 갈비", en: "Pork rib", description: "N/A.", imageSrc: "/photos/kbbq-8.png" },
      { ko: "항정살", en: "Pork jowl", description: "N/A.", imageSrc: "/photos/kbbq-9.png" },
      { ko: "돼지 목살", en: "Pork Collar", description: "N/A.", imageSrc: "/photos/kbbq-2.png" },
    ],
  },
  {
    id: "chef-special",
    title: "Chef Special",
    items: [
      { ko: "곱창 전골", en: "Small intestine stew", description: "N/A.", imageSrc: "/photos/chef-4.png" },
      { ko: "낙곱새 전골", en: "Small octopus, intestine of cow, shrimp stew", description: "N/A.", imageSrc: "/photos/chef-10.png" },
      { ko: "간장게장", en: "Soy sauce marinated raw crab", description: "N/A.", imageSrc: "/photos/chef-1.png" },
      { ko: "양념게장", en: "Spicy sauce marinated raw crab", description: "N/A.", imageSrc: "/photos/chef-7.png" },
      { ko: "육회", en: "Marinated raw beef slices", description: "N/A.", imageSrc: "/photos/chef-6.png" },
      { ko: "소곱창 볶음", en: "Spicy stir-fried small intestine of cow", description: "N/A.", imageSrc: "/photos/chef-8.png" },
      { ko: "낙곱새 볶음", en: "Spicy stir-fried small octopus & intestine of cow, shrimp", description: "N/A.", imageSrc: "/photos/chef-3.png" },
      { ko: "지랄 닭발", en: "Spicy stir-fried chicken foot", description: "N/A.", imageSrc: "/photos/chef-9.png" },
    ],
  },
  {
    id: "side-dish-to-add",
    title: "Side Dish to Add",
    items: [
      { ko: "라면사리", en: "Extra ramen noodles", description: "N/A.", imageSrc: "/photos/entree-ramen.png" },
      { ko: "당면사리", en: "Extra glass noodles", description: "N/A.", imageSrc: "/photos/dish-3.png" },
      { ko: "우동사리", en: "Extra udon noodles", description: "N/A.", imageSrc: "/photos/dish-2.png" },
      { ko: "떡사리", en: "Extra rice cake", description: "N/A.", imageSrc: "/photos/dish-4.png" },
      { ko: "국수사리", en: "Extra noodles", description: "N/A.", imageSrc: "/photos/entree-cold-noodles.png" },
      { ko: "치즈사리", en: "Extra cheese", description: "N/A.", imageSrc: "/photos/dish-5.png" },
      { ko: "공기밥", en: "Rice", description: "N/A.", imageSrc: "/photos/entree-shrimp-fried-rice.png" },
      { ko: "오뎅탕", en: "Fish cake soup", description: "N/A.", imageSrc: "/photos/entree-mixed-stew.webp" },
      { ko: "콘치즈", en: "Corn & cheese", description: "N/A.", imageSrc: "/photos/dish-1.png" },
    ],
  },
  {
    id: "entree",
    title: "Entree",
    items: [
      {
        ko: "부산 돼지 국밥",
        en: "Busan pork stew",
        description: "N/A.",
        imageSrc: "/photos/entree-busan-pork-stew.png",
      },
      {
        ko: "얼큰 돼지 국밥",
        en: "Spicy pork stew",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-pork-stew.png",
      },
      { ko: "섞어탕", en: "Mixed stew", description: "N/A." },
      { ko: "얼큰 섞어탕", en: "Spicy mixed stew", description: "N/A." },
      {
        ko: "간장게장 백반",
        en: "Soy sauce marinated raw crab",
        description: "N/A.",
        imageSrc: "/photos/entree-soy-crab.png",
      },
      {
        ko: "양념게장 백반",
        en: "Spicy sauce marinated raw crab",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-crab.png",
      },
      {
        ko: "소불고기",
        en: "Soy sauce marinated beef",
        description: "N/A.",
        imageSrc: "/photos/entree-bulgogi.png",
      },
      {
        ko: "돼지불고기",
        en: "Spicy sauce marinated pork",
        description: "N/A.",
        imageSrc: "/photos/entree-spicy-pork-bulgogi.png",
      },
      {
        ko: "오징어 볶음",
        en: "Stir-fried squid",
        description: "N/A.",
        imageSrc: "/photos/entree-stir-fried-squid.png",
      },
      {
        ko: "뚝곱창탕",
        en: "Beef small intestine stew",
        description: "N/A.",
        imageSrc: "/photos/entree-duk-gopchang-tang.png",
      },
      { ko: "김치찌개", en: "Kimchi stew", description: "N/A." },
      {
        ko: "특양 볶음밥",
        en: "Fried rice with tripe",
        description: "N/A.",
        imageSrc: "/photos/entree-tripe-fried-rice.png",
      },
      {
        ko: "새우 볶음밥",
        en: "Fried rice with shrimp",
        description: "N/A.",
        imageSrc: "/photos/entree-shrimp-fried-rice.png",
      },
      {
        ko: "날치알 주먹밥",
        en: "Flying fish roe onigiri",
        description: "N/A.",
        imageSrc: "/photos/entree-onigiri.png",
      },
      { ko: "제주도 고기 국수", en: "Jejudo pork noodles", description: "N/A." },
      {
        ko: "불타는 볶음면",
        en: "Extremely spicy stir-fried noodles",
        description: "N/A.",
        imageSrc: "/photos/entree-extremely-spicy-noodles.png",
      },
      {
        ko: "물냉면 / 비빔냉면",
        en: "Cold noodle / Spicy cold noodles",
        description: "N/A.",
        imageSrc: "/photos/entree-cold-noodles.png",
      },
      {
        ko: "라면",
        en: "Korean ramen",
        description: "N/A.",
        imageSrc: "/photos/entree-ramen.png",
      },
      { ko: "군만두 6pcs", en: "Fried dumplings 6pcs", description: "N/A." },
      { ko: "볶음밥", en: "Fried rice", description: "N/A." },
    ],
  },
  {
    id: "drink",
    title: "Drink",
    items: [
      { ko: "참이슬 후레쉬, 오리지널", en: "Chamisul Fresh, Original", description: "Soju.", imageSrc: "/photos/drink-soju.png" },
      { ko: "진로이즈백", en: "Jinro is back", description: "Soju." },
      { ko: "한라산 17도 / 한라산 21도", en: "Hallasan from Jeju Island (17% ABV / 21% ABV)", description: "Soju." },
      { ko: "처음처럼", en: "Chum churum", description: "Soju." },
      { ko: "새로", en: "Saero", description: "Soju." },
      {
        ko: "N/A",
        en: "Flavored Soju",
        description:
          "Grapefruit, Green grape, Lychee, Peach, Pineapple, Plum, Pomegranate, Mango, Lemon, Strawberry, Apple mango, Yogurt, Orange.",
      },
      { ko: "하이볼", en: "Highball", description: "Peach, Grapefruit.", imageSrc: "/photos/drink-highball.png" },
      { ko: "막걸리", en: "Makgeolli", description: "Wine.", imageSrc: "/photos/drink-makgeolli.png" },
      { ko: "복분자", en: "Bokbunja", description: "Wine." },
      { ko: "백세주", en: "Baekseju", description: "Wine." },
      { ko: "맥주", en: "Domestic Beer", description: "Coors Light, Shiner Bock, Miller Lite.", imageSrc: "/photos/drink-beer.png" },
      { ko: "맥주", en: "Imported Beer", description: "Heineken, Corona, Tsingtao, Asahi, Sapporo, Kirin Ichiban, Terra." },
      { ko: "음료", en: "Soda", description: "Soda, Milkis, Hongcho.", imageSrc: "/photos/drink-soda.png" },
    ],
  },
];

