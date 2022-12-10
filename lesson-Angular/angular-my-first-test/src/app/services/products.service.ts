import { iProduct } from '../types/product.types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly ProducrList: iProduct[] = [
    {
    image: 'krossowki.webp',
    name: 'Product 1',
    price: 100,
    id: 1,
  },
  {
    image: 'krossowki.webp',
    name: 'Product 2',
    price: 299,
    id: 2,
  },
  {
    image: 'krossowki.webp',
    name: 'Product 3',
    price: 300,
    id: 3,
  },
]

  getProductList(): iProduct [] {
    return this.ProducrList;
  }
}
