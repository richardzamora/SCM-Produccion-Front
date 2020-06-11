import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RawMaterialDeliveryStates} from '../model/RawMaterialDeliveryStates'
import {Global} from '../services/global'

export class RawMaterialDeliveryStatesClass{
  constructor(
    public request: Number,
    public dateDelivery: String,
    public deliveryStock: Number
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})
 export class RawMaterialDeliveryStatesService {
    public url: string;
    constructor(private service: HttpClient) {this.url = Global.url;}
    getAll(){
      return this.service.get<RawMaterialDeliveryStates[]>(this.url + 'RawMaterialDeliveryStates/');
    }
    deleteById(id){
        return this.service.delete<RawMaterialDeliveryStates>(this.url + 'RawMaterialDeliveryStates/' + id)
    }
    save(RawMaterialDeliveryStatesClass){
      return this.service.post<RawMaterialDeliveryStates>(this.url + 'RawMaterialDeliveryStates/', RawMaterialDeliveryStatesClass);
    }
    getById(id){
      return this.service.get<RawMaterialDeliveryStates>(this.url + 'RawMaterialDeliveryStates/' + id);
    }
    update(id, RawMaterialDeliveryStatesClass){
      return this.service.put<RawMaterialDeliveryStates>(this.url + 'RawMaterialDeliveryStates/' + id, RawMaterialDeliveryStatesClass);
    }
  }