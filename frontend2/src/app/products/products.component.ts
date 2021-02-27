import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];


  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.getProducts();

  }

  getProducts(): void {

    this.productService.getProducts().then(res => this.products = res).catch(err=>console.error(err));

  }

}
