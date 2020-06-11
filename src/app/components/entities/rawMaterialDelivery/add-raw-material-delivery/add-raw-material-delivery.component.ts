import { Component, OnInit } from '@angular/core';
import {RawMaterialDeliveryStatesService, RawMaterialDeliveryStatesClass} from '../../../../services/raw-material-delivery-states-service.service'
import {RawMaterialDeliveryStates} from '../../../../model/RawMaterialDeliveryStates'
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ShowDialogRequestsComponent} from '../list-raw-material-delivery/show-dialog-requests/show-dialog-requests.component'
import { Router } from '@angular/router';
import {DateAdapter} from '@angular/material/core';
import {RequestsDetailsRawMaterial} from '../../../../model/RequestsDetailsRawMaterial'
import {RequestsDetailsRawMaterialService, RequestsDetailsRawMaterialClass} from '../../../../services/requests_details_raw_material.service'

@Component({
  selector: 'app-add-raw-material-delivery',
  templateUrl: './add-raw-material-delivery.component.html',
  styleUrls: ['./add-raw-material-delivery.component.css']
})
export class AddRawMaterialDeliveryComponent implements OnInit {

  
  public request: Number;
  public dateDelivery = new Date;
  public deliveryStock: Number
  public status: String;

  public btn: String;
    public page_title: String;

  listDatarequest: RequestsDetailsRawMaterial[];

  constructor(private rawMaterialDeliveryStatesService: RawMaterialDeliveryStatesService, private router: Router,private dateAdapter: DateAdapter<any>, private requestsDetailsRawMaterialService: RequestsDetailsRawMaterialService, public dialogo: MatDialog) {this.page_title = 'Crear estado de entrega de materia prima' 
  this.btn = 'Guardar' }

  ngOnInit(): void {
    this.dateAdapter.setLocale("es")
    this.requestsDetailsRawMaterialService.getAll()
    .subscribe(
      data => {
        this.listDatarequest = data;
      }
    ) 
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogRequestsComponent, {
      data: arreglo
    })
    .afterClosed()
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
  save(): void{
   var rawMaterialDeliveryStates = new RawMaterialDeliveryStatesClass(parseInt(this.request.toString()), this.dateDelivery.toLocaleDateString(), this.deliveryStock)

     this.rawMaterialDeliveryStatesService.save(rawMaterialDeliveryStates)
     .subscribe(
       data => {
         if (this.status = 'success') {
           this.showDialogSuccesful()
           this.status = 'succes';
           location.reload(true);
           this.router.navigate(['/raw-material-delivery-states']);
           
         }else{
           this.status = "error"
           this.showDialogError()
         }location.reload(true);
       },
       err => {
         this.showDialogError()
       }
     )
   }

   getRequestsById(code){
    this.requestsDetailsRawMaterialService.getById(code).subscribe(
      data => {
        let requests = []
        requests.push(data.rawMaterialRequests)
        let arregloData = [
          {
           value: "Código: "+ data.code
          },
          {
            value:"Solicitud materia prima: " +  requests[0].code
          },
          {
            value: "Cantidad solicitada: "+ data.requestAmount
          },
          {
            value: "Fecha entrega: "+data.deliveryDeadlineDate
          },
          {
            value:"Descripción: " + data.description
          }
        ]
        this.showNumberBatch(arregloData);

      }, error => {
        console.log(error);

      }
    )
  }
  public onChange(event: any): void {
    console.log(event.target.value);
  }

}
