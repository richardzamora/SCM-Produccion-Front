import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {ProductionsService, ProductionsClass} from '../../../../../services/productions-service.service'

@Component({
  selector: 'app-list-one-productions',
  templateUrl: './list-one-productions.component.html',
  styleUrls: ['./list-one-productions.component.css']
})
export class ListOneProductionsComponent implements OnInit {

  public productions: ProductionsClass = new ProductionsClass("","","","");
  public title: String;
  public url: String;

  constructor( private _route: ActivatedRoute,
    private _router: Router, private productionsService: ProductionsService) { {this.title = 'Producciones' } }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this.productionsService.getById(code).subscribe(
        response => {
          this.productions = response;
        },error => {
          console.log(error);
        }
        )
    })
  }

}
