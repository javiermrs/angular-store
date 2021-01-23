import { Injectable } from '@angular/core';

import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products : Product[] = [
    {
      id: '1',
      title : 'Media mediana',
      image: 'assets/images/tshirt-mediano.jpg',
      price : 100,
      description : 'Son bubenas'
    },
    {
      id: '2',
      title : 'Media mediana',
      image: 'assets/images/tshirt-mediano.jpg',
      price : 100,
      description : 'Son buenas realmente'
    },
    {
      id: '3',
      title : 'Media mediana',
      image: 'assets/images/tshirt-mediano.jpg',
      price : 100,
      description : 'Son bubenas'
    },
    {
      id: '4',
      title : 'Media mediana',
      image: 'assets/images/tshirt-pequeno.jpg',
      price : 100,
      description : 'Son bubenas'
    }
  ];

  constructor() { }
  
  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
 
}
