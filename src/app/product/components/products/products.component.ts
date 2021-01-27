import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  clickProduct(id:number) {
    console.log('product');
    console.log(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
