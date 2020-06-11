import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from './global';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanResourcesService {
  public url: string;

  constructor(
    private http: HttpClient
  ){
    this.url = Global.url + 'HumanResource';
  }

  add(humanresource): Observable<any>{
    const params = JSON.stringify(humanresource);
    const headers = new
    HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, params, {headers});
  }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  getOne(humanresourceId): Observable<any>{
    return this.http.get(this.url + '/' + humanresourceId);
  }

  update(code, humanresource): Observable<any>{
    const params = JSON.stringify(humanresource);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + code, params, {headers});
  }

  delete(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + '/' + code, {headers});
  }

}
