// Tipos do Marketplace de Mobilidade Elétrica

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  seller: Seller;
  rating: number;
  reviews: Review[];
  stock: number;
  specifications: Record<string, string>;
}

export interface Seller {
  id: string;
  name: string;
  rating: number;
  totalSales: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  orders: Order[];
}

export interface Order {
  id: string;
  products: CartItem[];
  total: number;
  pointsEarned: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
