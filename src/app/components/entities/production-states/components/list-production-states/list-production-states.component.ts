import { Component, OnInit } from '@angular/core';
import {ProductionStates} from '../../../../../model/production-states'
import {ProductionStatesService} from '../../../../../services/production-states.service'
import { MatDialog } from "@angular/material/dialog";
import {DialogConfirmationComponent} from '../../../production-states/components/dialog/dialog-confirmation/dialog-confirmation.component'
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
@Component({
  selector: 'app-list-production-states',
  templateUrl: './list-production-states.component.html',
  styleUrls: ['./list-production-states.component.css']
})
export class ListProductionStatesComponent implements OnInit {

  constructor(private productionStateService: ProductionStatesService,public dialogo: MatDialog) { }
  listData: ProductionStates[]

  ngOnInit(): void {
    this.productionStateService.getAll() 
    .subscribe(
      data => {
        this.listData = data;
      }
    )
  }
  mostrarDialogo(id): void {
    this.dialogo
      .open(DialogConfirmationComponent, {
        data: `¿Estas seguro de eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.deleteById(id);
        }
      });
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Eliminado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Error. No se ha eliminado el elemento.`
    })
    .afterClosed()
  }
  deleteById(id){
    this.productionStateService.deleteById(id)
    .subscribe(
      data => {
        this.showDialogSuccesful();
        this.ngOnInit();
      },
      error => {
        this.showDialogError(); 
      }
    )
  }
}
