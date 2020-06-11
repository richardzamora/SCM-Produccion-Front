import { Component, OnInit } from '@angular/core';
import {ProductionStatesService, ProductionStatesClass} from '../../../../../services/production-states.service'
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-production-states',
  templateUrl: './add-production-states.component.html',
  styleUrls: ['./add-production-states.component.css']
})
export class AddProductionStatesComponent implements OnInit {

  description: String;
  public btn: String;
  public page_title: String;

  constructor(private productionStatesService: ProductionStatesService, public dialogo: MatDialog, private router: Router) { this.page_title = 'Crear estado de producción' 
  this.btn = 'Guardar'}

  ngOnInit(): void {
   
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Agregado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Error. No se ha agregado el elemento.`
    })
    .afterClosed()
  }
  save():void{
    var productionStates = new ProductionStatesClass(this.description);
    this.productionStatesService.save(productionStates)
    .subscribe(
      data => {
        this.showDialogSuccesful()
        location.reload(true);
        this.router.navigate(['/production-states']);
      },
      err => {
        this.showDialogError()
      }
    )
  }

}
