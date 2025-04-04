import { Category, Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Pure Cow Ghee",
    description:
      "100% pure and organic cow ghee made from the milk of grass-fed cows. Rich in nutrients and perfect for cooking, religious ceremonies, and Ayurvedic remedies.",
    price: 850,
    images: ["/images/products/jibon_premium_ghee.png"],
    category: "ghee",
    stock: 50,
    featured: true,
  },
  {
    id: "2",
    name: "Cold-Pressed Mustard Oil",
    description:
      "Traditional cold-pressed mustard oil with a strong aroma and authentic taste. Perfect for Bengali cuisine and offers numerous health benefits.",
    price: 350,
    images: ["/images/products/jibon_premium_ghee.png"],
    category: "oils",
    stock: 100,
    featured: true,
  },
  {
    id: "3",
    name: "Virgin Coconut Oil",
    description:
      "Pure virgin coconut oil extracted through cold pressing. Ideal for cooking, hair care, and skin moisturizing. Contains healthy fatty acids that boost metabolism.",
    price: 650,
    images: ["/images/products/jibon_premium_ghee.png"],
    category: "oils",
    stock: 75,
    featured: true,
  },
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Ghee",
    description: "Pure and organic ghee products",
  },
  {
    id: "2",
    name: "Oils",
    description: "Cold-pressed organic oils",
  },
  {
    id: "3",
    name: "Spices",
    description: "Organic and authentic spices",
  },
];

export const SHIPPING_COSTS = {
  insideDhaka: 70,
  outsideDhaka: 150,
};
