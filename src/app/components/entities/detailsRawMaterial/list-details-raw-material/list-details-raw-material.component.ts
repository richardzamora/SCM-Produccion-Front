import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {DialogConfirmationProductionsComponent} from '../../productions/components/dialog/dialog-confirmation/dialog-confirmation.component'
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {RequestsDetailsRawMaterial} from '../../../../model/RequestsDetailsRawMaterial'
import {RequestsDetailsRawMaterialService} from '../../../../services/requests_details_raw_material.service'


@Component({
  selector: 'app-list-details-raw-material',
  templateUrl: './list-details-raw-material.component.html',
  styleUrls: ['./list-details-raw-material.component.css']
})
export class ListDetailsRawMaterialComponent implements OnInit {

  constructor(private requestsDetailsRawMaterialService: RequestsDetailsRawMaterialService, public dialogo: MatDialog) { }

  listData: RequestsDetailsRawMaterial[]

  ngOnInit(): void {
    this.requestsDetailsRawMaterialService.getAll()
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
    this.requestsDetailsRawMaterialService.deleteById(id)
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
