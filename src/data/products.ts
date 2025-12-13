import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "White Shoe",
    categoryId: "c1",
    categoryName: "Chaussures",
    price: 79.99,
    quantity: 12,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Chaussure blanche élégante.",
    createdAt: "2025-12-01T10:00:00Z",
    updatedAt: "2025-12-05T12:00:00Z",
  },
  {
    id: "2",
    name: "Minimalist Watch",
    categoryId: "c2",
    categoryName: "Accessoires",
    price: 149.99,
    quantity: 10,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Montre élégante simple.",
    createdAt: "2025-12-02T11:00:00Z",
    updatedAt: "2025-12-06T13:00:00Z",
  },
  {
    id: "3",
    name: "Classic Sunglasses",
    categoryId: "c1",
    categoryName: "Accessoires",
    price: 59.99,
    quantity: 5,
    image:
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Lunettes de soleil classiques.",
    createdAt: "2025-12-03T09:30:00Z",
    updatedAt: "2025-12-07T10:45:00Z",
  },
  {
    id: "4",
    name: "Portable Speaker",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 89.99,
    quantity: 22,
    image:
      "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Haut‑parleur portable puissant.",
    createdAt: "2025-12-05T08:15:00Z",
    updatedAt: "2025-12-09T09:20:00Z",
  },
  {
    id: "5",
    name: "Smartphone Stand",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 24.99,
    quantity: 28,
    image:
      "https://images.pexels.com/photos/594613/pexels-photo-594613.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Support pour smartphone fiable.",
    createdAt: "2025-12-09T11:20:00Z",
    updatedAt: "2025-12-11T12:00:00Z",
  },
  {
    id: "6",
    name: "Coffee Mug",
    categoryId: "c5",
    categoryName: "Maison",
    price: 15.99,
    quantity: 40,
    image:
      "https://images.pexels.com/photos/4050425/pexels-photo-4050425.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Tasse à café simple et élégante.",
    createdAt: "2025-12-06T12:30:00Z",
    updatedAt: "2025-12-10T14:00:00Z",
  },
  {
    id: "7",
    name: "Wireless Headphones",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 129.99,
    quantity: 8,
    image:
      "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Casque sans fil confortable.",
    createdAt: "2025-12-07T10:00:00Z",
    updatedAt: "2025-12-10T15:00:00Z",
  },
  {
    id: "8",
    name: "Desk Lamp",
    categoryId: "c6",
    categoryName: "Maison",
    price: 49.99,
    quantity: 18,
    image:
      "https://images.pexels.com/photos/3771087/pexels-photo-3771087.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Lampe de bureau moderne.",
    createdAt: "2025-12-08T09:00:00Z",
    updatedAt: "2025-12-11T10:30:00Z",
  },
  {
    id: "9",
    name: "Smartphone Stand",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 24.99,
    quantity: 28,
    image:
      "https://images.pexels.com/photos/594613/pexels-photo-594613.jpeg?auto=compress&cs=tinysrgb&w=",
    description: "Support pour smartphone fiable.",
    createdAt: "2025-12-09T11:20:00Z",
    updatedAt: "2025-12-11T12:00:00Z",
  },
  {
    id: "10",
    name: "Minimal Backpack",
    categoryId: "c7",
    categoryName: "Accessoires",
    price: 74.99,
    quantity: 3,
    image:
      "https://images.pexels.com/photos/296883/pexels-photo-296883.jpeg?auto=compress&cs=tinysrgb&w=",

    description: "Sac à dos minimaliste.",
    createdAt: "2025-12-10T14:00:00Z",
    updatedAt: "2025-12-11T15:00:00Z",
  },
  {
    id: "11",
    name: "Men Casual T-Shirt",
    categoryId: "c8",
    categoryName: "Vêtements",
    price: 900,
    quantity: 35,
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "T-shirt confortable en coton, idéal pour un usage quotidien et les sorties décontractées.",
    createdAt: "2025-12-11T10:00:00Z",
    updatedAt: "2025-12-12T12:00:00Z",
  },
  {
    id: "12",
    name: "Leather Wallet",
    categoryId: "c2",
    categoryName: "Accessoires",
    price: 1300,
    quantity: 20,
    image:
      "https://images.pexels.com/photos/4452342/pexels-photo-4452342.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Portefeuille en cuir résistant avec plusieurs compartiments pour cartes et billets.",
    createdAt: "2025-12-11T11:30:00Z",
    updatedAt: "2025-12-12T13:10:00Z",
  },
  {
    id: "13",
    name: "Wireless Mouse",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 800,
    quantity: 27,
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Souris sans fil ergonomique, idéale pour le travail de bureau et l’étude.",
    createdAt: "2025-12-11T12:00:00Z",
    updatedAt: "2025-12-12T14:00:00Z",
  },
  {
    id: "14",
    name: "Mechanical Keyboard",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 4200,
    quantity: 6,
    image:
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Clavier mécanique robuste avec touches réactives, idéal pour la programmation.",
    createdAt: "2025-12-11T13:00:00Z",
    updatedAt: "2025-12-12T15:00:00Z",
  },
  {
    id: "15",
    name: "Office Notebook",
    categoryId: "c9",
    categoryName: "Bureau",
    price: 350,
    quantity: 50,
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Cahier pratique pour le travail, l’école ou la prise de notes quotidienne.",
    createdAt: "2025-12-11T14:00:00Z",
    updatedAt: "2025-12-12T16:00:00Z",
  },
  {
    id: "16",
    name: "Power Bank 10000mAh",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 1800,
    quantity: 15,
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Batterie externe fiable pour recharger vos appareils lors de vos déplacements.",
    createdAt: "2025-12-11T15:30:00Z",
    updatedAt: "2025-12-12T17:00:00Z",
  },
  {
    id: "17",
    name: "Men Casual Shirt",
    categoryId: "c8",
    categoryName: "Vêtements",
    price: 1600,
    quantity: 18,
    image:
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Chemise élégante et confortable, adaptée au travail et aux occasions décontractées.",
    createdAt: "2025-12-11T16:00:00Z",
    updatedAt: "2025-12-12T18:00:00Z",
  },
  {
    id: "18",
    name: "Electric Kettle",
    categoryId: "c5",
    categoryName: "Maison",
    price: 2000,
    quantity: 12,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Bouilloire électrique rapide et pratique pour le thé et le café.",
    createdAt: "2025-12-11T17:00:00Z",
    updatedAt: "2025-12-12T19:00:00Z",
  },
  {
    id: "19",
    name: "Bluetooth Earbuds",
    categoryId: "c4",
    categoryName: "Électronique",
    price: 2300,
    quantity: 4,
    image:
      "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Écouteurs Bluetooth compacts avec bonne qualité sonore et autonomie correcte.",
    createdAt: "2025-12-11T18:00:00Z",
    updatedAt: "2025-12-12T20:00:00Z",
  },
  {
    id: "20",
    name: "Wall Clock",
    categoryId: "c6",
    categoryName: "Maison",
    price: 900,
    quantity: 16,
    image:
      "https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&w=",
    description:
      "Horloge murale moderne et silencieuse, idéale pour la maison ou le bureau.",
    createdAt: "2025-12-11T19:00:00Z",
    updatedAt: "2025-12-12T21:00:00Z",
  },
];
