import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {ProductionStates} from '../../../../../model/production-states'
import {ProductionStatesService, ProductionStatesClass} from '../../../../../services/production-states.service'

@Component({
  selector: 'app-list-one-production-states',
  templateUrl: './list-one-production-states.component.html',
  styleUrls: ['./list-one-production-states.component.css']
})
export class ListOneProductionStatesComponent implements OnInit {

  public productionSates: ProductionStatesClass = new ProductionStatesClass("")
  public title: String;
  public url: String;
  public codigo: Number;
  constructor(private _route: ActivatedRoute,
    private _router: Router, private productionStatesService: ProductionStatesService) {{this.title = 'Estado de producción' } }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this.productionStatesService.getById(code).subscribe(
        response => {
          this.productionSates = response;
          this.codigo = code;
        },error => {
          console.log(error);
        }
        )
    })
  }

}
