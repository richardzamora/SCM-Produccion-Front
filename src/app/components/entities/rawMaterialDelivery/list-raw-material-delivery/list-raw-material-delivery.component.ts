import { Component, OnInit } from '@angular/core';
import {RawMaterialDeliveryStatesService, RawMaterialDeliveryStatesClass} from '../../../../services/raw-material-delivery-states-service.service'
import {RawMaterialDeliveryStates} from '../../../../model/RawMaterialDeliveryStates'
import { MatDialog } from "@angular/material/dialog";
import {DialogConfirmationProductionsComponent} from '../../productions/components/dialog/dialog-confirmation/dialog-confirmation.component'
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'


@Component({
  selector: 'app-list-raw-material-delivery',
  templateUrl: './list-raw-material-delivery.component.html',
  styleUrls: ['./list-raw-material-delivery.component.css']
})
export class ListRawMaterialDeliveryComponent implements OnInit {

  constructor(private rawMaterialDeliveryStatesService: RawMaterialDeliveryStatesService, public dialogo: MatDialog) { }

  listData: RawMaterialDeliveryStates[]

  ngOnInit(): void {
    this.rawMaterialDeliveryStatesService.getAll()
    .subscribe(
      data => {
        this.listData = data;
      }
    ) 
  }
  mostrarDialogo(id): void {
    this.dialogo
      .open(DialogConfirmationProductionsComponent, {
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
    this.rawMaterialDeliveryStatesService.deleteById(id)
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
