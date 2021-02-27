import { Injectable } from '@angular/core';
import { Product } from './product'
import { BehaviorSubject } from 'rxjs';
import { Products } from './mock-product';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class OrdereditemproviderService {

  products: Product[] = [];

  constructor() { }

  add(product: Product) {

    if (this.products.findIndex((item) => item.Id === product.Id) < 0) {

      this.products.push(product);

    }
    else {

      this.products[this.products.findIndex((item) => item.Id === product.Id)].AmountToPurchase += product.AmountToPurchase;

    }

  }

  readOne(id:number){

    return this.products.find(element=>element.Id===id);

  }

  read() {

     return this.products 

  }

  clear() {

    this.products = [];

  }

  deleteItem(id:number){

    var temp : Product[]= [];

      for(let i=0; i<this.products.length;i++){

          if(this.products[i].Id!=id){
            temp.push(this.products[i]);
          }

      }

      this.products=temp;
  }

}
