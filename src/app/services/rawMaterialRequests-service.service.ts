import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RawMaterialRequests} from '../model/rawMaterialRequests'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';
export class RawMaterialRequestsClass{
  constructor(
    public state: Number,
    public requestDate: String,
    public numberOrder: Number,
    public numberBatch: Number
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})
 export class RawMaterialRequestsService {
   public url: string;
    constructor(private service: HttpClient) {this.url = Global.url; }

  private listRawMaterialRequests = new Subject<string>();

    getAll(){
      return this.service.get<RawMaterialRequests[]>(this.url + 'RawMaterialRequests/');
    }
    deleteById(id){
        return this.service.delete<RawMaterialRequests>(this.url + 'RawMaterialRequests/' + id)
    }
    save(RawMaterialRequestsClass){
      return this.service.post<RawMaterialRequests>(this.url + 'RawMaterialRequests/', RawMaterialRequestsClass);
    }
    getById(id){
      return this.service.get<RawMaterialRequests>(this.url + 'RawMaterialRequests/' + id);
    }
    update(id, RawMaterialRequestsClass){
      return this.service.put<RawMaterialRequests>(this.url + 'RawMaterialRequests/' + id, RawMaterialRequestsClass);
    }
    listrawMaterialRequests(): Observable<string>{
      return this.listRawMaterialRequests.asObservable();
    }

    filter(filterBy: string){
        this.listRawMaterialRequests.next(filterBy);
    }
  }