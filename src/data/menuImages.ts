export type MenuImage = {
  src: string;
  alt: string;
};

export type MenuSection = {
  id: string;
  title: string;
  images: MenuImage[];
};

/**
 * Update the image-based menu by editing ONLY this file.
 * Replace `src` paths with new image URLs or `/public` assets.
 */
export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "combo",
    title: "Combo",
    images: [
      { src: "/photos/bbq-1.png", alt: "Dalgopchang combo menu (page 1)" },
      { src: "/photos/dish-3.png", alt: "Dalgopchang combo menu (page 2)" },
    ],
  },
  {
    id: "korean-bbq",
    title: "Korean BBQ",
    images: [
      { src: "/photos/kbbq-1.png", alt: "Korean BBQ cut (photo 1)" },
      { src: "/photos/kbbq-2.png", alt: "Korean BBQ grilled (photo 2)" },
      { src: "/photos/kbbq-3.png", alt: "Korean BBQ platter (photo 3)" },
      { src: "/photos/kbbq-4.png", alt: "Korean BBQ skewers (photo 4)" },
      { src: "/photos/kbbq-5.png", alt: "Korean BBQ grilled pork (photo 5)" },
      { src: "/photos/kbbq-6.png", alt: "Korean BBQ beef ribeye set (photo 6)" },
      { src: "/photos/kbbq-7.png", alt: "Korean BBQ pork belly set (photo 7)" },
      { src: "/photos/kbbq-8.png", alt: "Korean BBQ ribeye set (photo 8)" },
      { src: "/photos/kbbq-9.png", alt: "Korean BBQ spicy intestines (photo 9)" },
      { src: "/photos/kbbq-10.png", alt: "Korean BBQ raw beef platter (photo 10)" },
      { src: "/photos/kbbq-11.png", alt: "Korean BBQ sliced beef (photo 11)" },
      { src: "/photos/kbbq-12.png", alt: "Korean BBQ marinated beef bowl (photo 12)" },
    ],
  },
  {
    id: "chef-special",
    title: "Chef Special",
    images: [
      { src: "/photos/crab.png", alt: "Dalgopchang chef special menu (soy sauce crab)" },
      { src: "/photos/dish-2.png", alt: "Dalgopchang chef special menu (page 2)" },
    ],
  },
  {
    id: "side-dish-to-add",
    title: "Side Dish to Add",
    images: [{ src: "/photos/dish-1.png", alt: "Dalgopchang side dish add-ons menu" }],
  },
  {
    id: "entree",
    title: "Entree",
    images: [{ src: "/photos/interior.png", alt: "Dalgopchang entree menu" }],
  },
  {
    id: "drink",
    title: "Drink",
    images: [{ src: "/photos/dish-5.png", alt: "Dalgopchang drinks menu" }],
  },
];

