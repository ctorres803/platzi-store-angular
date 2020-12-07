import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {id: '1', image: 'assets/camiseta.png', title: 'camiseta', price: 80000, description: 'bla bla bla'},
    {id: '2', image: 'assets/hoodie.png', title: 'Hoodie', price: 80000, description: 'bla bla bla'},
    {id: '3', image: 'assets/mug.png', title: 'Mug', price: 80000, description: 'bla bla bla'},
    {id: '4', image: 'assets/pin.png', title: 'pin', price: 80000, description: 'bla bla bla'},
    {id: '5', image: 'assets/stickers1.png', title: 'sticker1' , price: 80000, description: 'bla bla bla'},
    {id: '6', image: 'assets/stickers2.png', title: 'sticker2', price: 80000, description: 'bla bla bla'}
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
