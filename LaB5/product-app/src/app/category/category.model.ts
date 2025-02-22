import { Product } from '../models/product.model';

export interface Category {
    name: string;
    products: Product[];
  }
  