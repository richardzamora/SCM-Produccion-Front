import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Productions} from '../model/productions'
import {Global} from '../services/global'
export class ProductionsClass{
  constructor(
    public createDate: String,
    public expirationDate: String,
    public startOrderDate: String,
    public time:String,
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})
 export class ProductionsService {
    public url: string;
    constructor(private service: HttpClient) {this.url = Global.url;}
    //readonly url = 'http://localhost:8089/scm-unibague/Production/'
    getAll(){
      return this.service.get<Productions[]>(this.url + 'Production/');
    }
    deleteById(id){
        return this.service.delete<Productions>(this.url + 'Production/' + id)
    }
    save(ProductionsClass){
      return this.service.post<Productions>(this.url + 'Production/', ProductionsClass);
    }
    getById(id){
      return this.service.get<Productions>(this.url + 'Production/' + id);
    }
    update(id, ProductionsClass){
      return this.service.put<Productions>(this.url + 'Production/' + id, ProductionsClass);
    }
  }