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

    const response = await this.http.get(this.productsUrl, {
      headers: header,
      observe: 'response'
    }).toPromise();

    return response.body;
  }


  async getProduct(id: number): Promise<any> {

    let actualUrl = this.productUrl + "?id=" + id;


    const response = await this.http.get(actualUrl, {
      headers: header,
      observe: 'response'
    }).toPromise();
    //console.log(response.body);

    return response.body;
  }





}
