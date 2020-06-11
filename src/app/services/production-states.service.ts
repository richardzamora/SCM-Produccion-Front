import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductionStates} from '../model/production-states'
import {Global} from '../services/global'
export class ProductionStatesClass{

  constructor(
    public description: String
  ) {}
  
}
@Injectable({
    providedIn: 'root'
})
  export class ProductionStatesService {

    public url: string;
    constructor(private service: HttpClient) { this.url = Global.url;}

    getAll(){
      return this.service.get<ProductionStates[]>(this.url + 'ProductionState/' );
    }
    deleteById(id){
        return this.service.delete<ProductionStates>(this.url + 'ProductionState/' + id)
    }
    save(ProductionStatesClass){
      return this.service.post<ProductionStatesClass>(this.url + 'ProductionState/', ProductionStatesClass);
    }
    getById(id){
      return this.service.get<ProductionStatesClass>(this.url + 'ProductionState/' + id);
    }
    update(id, ProductionStatesClass){
      return this.service.put<ProductionStatesClass>(this.url + 'ProductionState/' + id, ProductionStatesClass);
    }
  }