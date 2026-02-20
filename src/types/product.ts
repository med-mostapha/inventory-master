export interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
  min_threshold: number;
  expiration_date: string | null;
  category: number;
  is_low_stock: boolean;
  has_expiry: boolean;
  created_at: string;
}
