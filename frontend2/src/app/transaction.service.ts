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

  private transactionUrl="http://localhost:16137/createTransaction";
  
  async createTransaction(transaction : any[]): Promise<any> {

    const response = await this.http.post(this.transactionUrl,transaction,{
      headers: header,
      observe: 'response'
    }).toPromise();

    return response.body;
  }

}
