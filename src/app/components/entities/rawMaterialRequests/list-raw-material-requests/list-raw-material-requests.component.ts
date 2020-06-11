import { Component, OnInit } from '@angular/core';
import {RawMaterialRequests} from '../../../../model/rawMaterialRequests'
import {RawMaterialRequestsService} from '../../../../services/rawMaterialRequests-service.service'
import { MatDialog } from "@angular/material/dialog";
import {DialogConfirmationProductionsComponent} from '../../productions/components/dialog/dialog-confirmation/dialog-confirmation.component'
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ShowDialogNumberBatchComponent} from './show-dialog-number-batch/show-dialog-number-batch.component'

@Component({
  selector: 'app-list-raw-material-requests',
  templateUrl: './list-raw-material-requests.component.html',
  styleUrls: ['./list-raw-material-requests.component.css']
})
export class ListRawMaterialRequestsComponent implements OnInit {

  constructor(private rawMaterialRequetsService: RawMaterialRequestsService, public dialogo: MatDialog) { }
  listDataRawMaterialRequests: RawMaterialRequests[]
  dataRawMaterialRequests: RawMaterialRequests
  numberBatch: []
  ngOnInit(): void {
    this.rawMaterialRequetsService.getAll()
    .subscribe(
      data => {
        this.listDataRawMaterialRequests = data;
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
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogNumberBatchComponent, {
      data: arreglo
    })
    .afterClosed()
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
    this.rawMaterialRequetsService.deleteById(id)
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
  getById(code){
      this.rawMaterialRequetsService.getById(code).subscribe(
        data => {
          this.dataRawMaterialRequests = data;
          let arregloBatch = []
          arregloBatch.push(this.dataRawMaterialRequests.numberBatch);

          let arregloData = [
            {
             value: "Código: "+ arregloBatch[0].code
            },
            {
              value:"Fecha de inicio de orden: " +  arregloBatch[0].startOrderDate
            },
            {
              value: "Tiempo: "+ arregloBatch[0].time
            },
            {
              value: "Fecha de creación: "+arregloBatch[0].createDate
            },
            {
              value:"Fecha de expiración: " + arregloBatch[0].expirationDate
            }
          ]
          this.showNumberBatch(arregloData);

        }, error => {
          console.log(error);

        }
      )
    
  }
}
