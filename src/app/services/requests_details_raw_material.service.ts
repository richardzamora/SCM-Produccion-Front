import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestsDetailsRawMaterial} from '../model/RequestsDetailsRawMaterial'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';

export class RequestsDetailsRawMaterialClass{
  constructor(
    public rawMaterialRequests: Number,
    public requestAmount: Number,
    public deliveryDeadlineDate: String,
    public description: String,
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})
 export class RequestsDetailsRawMaterialService {
    public url: string;
    constructor(private service: HttpClient) {this.url = Global.url;}
    private listData = new Subject<string>();
    getAll(){
      return this.service.get<RequestsDetailsRawMaterial[]>(this.url + 'RequestDetailsRawMaterial/');
    }
    deleteById(id){
        return this.service.delete<RequestsDetailsRawMaterial>(this.url + 'RequestDetailsRawMaterial/' + id)
    }
    save(RequestsDetailsRawMaterialClass){
      return this.service.post<RequestsDetailsRawMaterial>(this.url + 'RequestDetailsRawMaterial/', RequestsDetailsRawMaterialClass);
    }
    getById(id){
      return this.service.get<RequestsDetailsRawMaterial>(this.url + 'RequestDetailsRawMaterial/' + id);
    }
    update(id, RequestsDetailsRawMaterialClass){
      return this.service.put<RequestsDetailsRawMaterial>(this.url + 'RequestDetailsRawMaterial/' + id, RequestsDetailsRawMaterialClass);
    }
    listDataDetails(): Observable<string>{
      return this.listData.asObservable();
    }

    filter(filterBy: string){
        this.listData.next(filterBy);
    }
  }