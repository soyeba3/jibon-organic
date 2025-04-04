export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  shippingMethod: "inside-dhaka" | "outside-dhaka";
  items: CartItem[];
  totalAmount: number;
  shippingCost: number;
}
