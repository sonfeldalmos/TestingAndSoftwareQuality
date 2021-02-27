import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from './transaction';


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
export class TransactionService {

  constructor(private http: HttpClient) { }

  async createTransaction(transaction: any[]): Promise<any> {

    console.log(transaction);

  }

}
