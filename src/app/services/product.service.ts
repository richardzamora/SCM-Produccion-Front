import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url + 'Product';
  }

  addProduct(product): Observable<any> {
    const params = JSON.stringify(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, params, {headers: headers});
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  getProduct(productId): Observable<any> {
    return this.http.get(this.url + '/' + productId);
  }

  updateProduct(code, product): Observable<any> {
    const params = JSON.stringify(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + code, params, {headers: headers});
  }
  deleteProduct(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + '/' + code, {headers: headers});
  }
}
