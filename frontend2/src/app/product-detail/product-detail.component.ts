import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrdereditemproviderService } from '../ordereditemprovider.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { element } from 'protractor';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  amountToPurchase: number;
  product: Product;
  

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService, private OIProvider: OrdereditemproviderService) { }

  ngOnInit(): void {

    this.getProduct();
    
  }

  getProduct() {

    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).then(res=>this.product=res).catch(err=>console.log(err));

  }

  addToCard() {

    if (this.amountToPurchase > 0) {
      this.product.AmountToPurchase = Number(this.amountToPurchase);
      this.OIProvider.add(this.product);
      this.location.back();
    }
    console.log("Product added to the card");

  }

  goBack() {
    this.location.back();
  }

}
