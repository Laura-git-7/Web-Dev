export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  link: string;
  likes: number;     
  categoryId: number; 
}