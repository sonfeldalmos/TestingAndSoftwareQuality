import { Component, OnInit } from '@angular/core';
import { OrdereditemproviderService } from '../ordereditemprovider.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { NgModel } from '@angular/forms';
import { Transaction } from '../transaction'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private OIProvider: OrdereditemproviderService, private transactionService: TransactionService, private router: Router) { }

  productsToPurchase: Product[];

  total: number = 0;



  ngOnInit() {

    this.productsToPurchase = this.OIProvider.read();
    this.calculateTotal();

  }

  sendOrder() {

    if (this.productsToPurchase.length!==0) {
      //console.log(this.productsToPurchase);

      this.transactionService.createTransaction(this.productsToPurchase).then(res => { console.log("Success"); this.router.navigateByUrl('products');this.OIProvider.clear()
     })
      .catch(err => console.error(err));

    }

  }

  clearOrder() {

    this.OIProvider.clear();
    this.refresh();

  }

  deleteItem(id: number) {

    this.OIProvider.deleteItem(id);
    this.refresh();

  }

  calculateTotal() {

    this.productsToPurchase.forEach(element => {

      if (element.DiscountAmount == 0 || element.DiscountLimit > element.AmountToPurchase) {
        this.total += element.Prize * element.AmountToPurchase;
      }
      else {
        this.total += element.Prize * (1 - (element.DiscountAmount / 100)) * element.AmountToPurchase;
      }

    });

  }

  refresh() {

    this.router.navigateByUrl('products', { skipLocationChange: true }).then(() => {
      this.router.navigate(['checkout']);
    });

  }

}
