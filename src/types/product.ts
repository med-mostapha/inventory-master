export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName?: string;

  price: number;
  quantity: number;

  image?: string;
  description?: string;

  createdAt: string;
  updatedAt: string;
}
