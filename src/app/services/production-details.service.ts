import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductionDetails} from '../model/production-details';
import {Global} from '../services/global';
import { Observable, from, Subject } from 'rxjs';
export class ProductionDetailsIdClass{

    constructor(
      public productsCode: Number,
      public productBatch: Number
    ) {}
}
export class ProductionDetailsClass{
    constructor(
      public id: ProductionDetailsIdClass,
      public stockProducts: Number,
      public startDate: String,
      public endDate: String,
      public processedProducts: Number,
      public productionStateBean: Number
    ) {}
}
const toLower = text => {
  return text.toString().toLowerCase();
};
const getByIdComposite = (items, productsCode, productBatch) => {
  if (productBatch && productsCode) {
    return items.filter(item => toLower(item.id.productsCode)
      .includes(toLower(productsCode))  && toLower(item.id.productBatch).includes(toLower(productBatch)));
  }
  return items;
};

@Injectable({
    providedIn: 'root'
})

export class ProductionDetailsService {

    public url: string;
    private listData = new Subject<string>();
    constructor(private service: HttpClient) { this.url = Global.url; }

    getAll(){
      return this.service.get<ProductionDetails[]>(this.url + 'ProductionDetails/' );
    }
    deleteById(ProductionDetailsClass){
        return this.service.post<ProductionDetailsClass>(this.url + 'ProductionDetails/delete', ProductionDetailsClass);
    }
    save(ProductionDetailsClass){
      return this.service.post<ProductionDetailsClass>(this.url + 'ProductionDetails/', ProductionDetailsClass);
    }
    update(ProductionDetailsClass){
      return this.service.put<ProductionDetailsClass>(this.url + 'ProductionDetails/', ProductionDetailsClass);
    }
    getByIdComposite(list, productsCode, productBatch){
      list = getByIdComposite(list, productsCode, productBatch);
      return list;
    }
    listDataDetails(): Observable<string>{
      return this.listData.asObservable();
    }

    filter(filterBy: string){
        this.listData.next(filterBy);
    }
  }
