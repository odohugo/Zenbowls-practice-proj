type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sweet Chicken",
    desc: "Tender, grilled chicken slices marinated in a special sweet and tangy sauce that adds a burst of unique and mouthwatering taste to every bite.",
    img: "/Poke-1.png",
    price: 18.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Shrimp Mushroom Deluxe",
    desc: "This bowl combines succulent shrimp with sautéed mushrooms for a deluxe experience. The shrimp imparts a savory flavor that pairs with the umami notes of the mushrooms.",
    img: "/Poke-2.png",
    price: 19.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Rainbow Bowl",
    desc: "A vibrant medley of fresh, sashimi-grade fish, including tuna, salmon, and yellowtail, served on a base of your choice — be it fluffy white rice, nutty brown rice, or quinoa.",
    img: "/Poke-3.png",
    price: 21.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Salmon Bowl",
    desc: "Generous cuts of fresh, sushi-grade salmon sit atop a bed of perfectly seasoned rice or quinoa, offering a satisfying base for this culinary masterpiece.",
    img: "/Poke-4.png",
    price: 23.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Teriyaki Glazed Salmon Bowl",
    desc: "Savory sensation that brings the warmth of cooked salmon and the irresistible sweetness of teriyaki sauce together in perfect harmony.",
    img: "/Poke-5.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Tuna Bowl",
    desc: "Savor the freshness of sushi-grade tuna, delicately cubed and served atop a foundation of steamed rice or quinoa. Complemented by crisp cucumber, creamy avocado, and a hint of radish.",
    img: "/Poke-6.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];