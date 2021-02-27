import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './mock-product';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';

const header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});
const httpOptions = {
  headers: header,
  observe: 'response'

};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private productsUrl = "http://localhost:25052/api/getAllProductWithDiscount";

  private productUrl = "http://localhost:25052/api/getProductById";




  async getProducts(): Promise<any> {
    return Products;
  }


  async getProduct(id: number): Promise<any> {
    return Products[id];
  }
}
