import { Component, OnInit } from '@angular/core';
import {ProductionStates} from '../../../../../model/production-states'
import {ProductionStatesService, ProductionStatesClass} from '../../../../../services/production-states.service'
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'

@Component({
  selector: 'app-edit-production-states',
  templateUrl: './edit-production-states.component.html',
  styleUrls: ['./edit-production-states.component.css']
})
export class EditProductionStatesComponent implements OnInit {
  code:Number;
  description: String;
  listData: ProductionStates

  public page_title: String;
  public btn: String;

  constructor(private productionStateService: ProductionStatesService, private _router: Router, private _route: ActivatedRoute, public dialogo: MatDialog) { this.page_title = 'Editar estado de producción';
  this.btn = 'Actualizar';}

  ngOnInit(): void {
    this.getById();
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Actualizado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Error. No se ha actualizado el elemento.`
    })
    .afterClosed()
  }
  edit(): void{
    var productionStates = new ProductionStatesClass(this.description);
    this.productionStateService.update(this.code,productionStates)
    .subscribe(
      data => {
        this.showDialogSuccesful()
        this._router.navigate(['/production-states'])
      },
      er =>{
        this.showDialogError()
      }
    )
  }
  getById(): void{
    this._route.params.subscribe(params => {
      let code = params['code'];
      this.productionStateService.getById(code)
      .subscribe(
        data => {
          this.listData = data;
          this.description = this.listData.description;
          this.code = code;
        }
      )
    })
  }
}
