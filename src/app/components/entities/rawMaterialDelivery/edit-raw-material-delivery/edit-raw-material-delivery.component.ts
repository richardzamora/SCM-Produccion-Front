import { Component, OnInit } from '@angular/core';
import {RawMaterialDeliveryStatesService, RawMaterialDeliveryStatesClass} from '../../../../services/raw-material-delivery-states-service.service'
import {RawMaterialDeliveryStates} from '../../../../model/RawMaterialDeliveryStates'
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ShowDialogRequestsComponent} from '../list-raw-material-delivery/show-dialog-requests/show-dialog-requests.component'
import { Router, ActivatedRoute } from '@angular/router';
import {DateAdapter} from '@angular/material/core';
import {RequestsDetailsRawMaterial} from '../../../../model/RequestsDetailsRawMaterial'
import {RequestsDetailsRawMaterialService, RequestsDetailsRawMaterialClass} from '../../../../services/requests_details_raw_material.service'


@Component({
  selector: 'app-edit-raw-material-delivery',
  templateUrl: './edit-raw-material-delivery.component.html',
  styleUrls: ['./edit-raw-material-delivery.component.css']
})
export class EditRawMaterialDeliveryComponent implements OnInit {

  
  public code: Number;
  public request: Number;
  public dateDelivery = new Date;
  public deliveryStock: Number
  public status: String;

  public page_title: String;
  public btn: String;

  listDatarequest: RequestsDetailsRawMaterial[];

  listDataRawMaterialDeliveryStates: RawMaterialDeliveryStates;
  
  constructor(private rawMaterialDeliveryStatesService: RawMaterialDeliveryStatesService, private _router: Router, private _route: ActivatedRoute, private dateAdapter: DateAdapter<any>, private requestsDetailsRawMaterialService: RequestsDetailsRawMaterialService, public dialogo: MatDialog)  {this.page_title = 'Editar estado de entrega de solicitud de materia prima';
  this.btn = 'Actualizar'; }

  ngOnInit(): void {
    this.dateAdapter.setLocale("es")
    this.requestsDetailsRawMaterialService.getAll()
    .subscribe(
      data => {
        this.listDatarequest = data;
      }
    )
    this.getById()
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
  edit(): void{
    var rawMaterialDeliveryStates = new RawMaterialDeliveryStatesClass(parseInt(this.request.toString()), this.dateDelivery.toLocaleDateString(), this.deliveryStock)
 
      this.rawMaterialDeliveryStatesService.update(this.code,rawMaterialDeliveryStates)
      .subscribe(
        data => {
          if (this.status = 'success') {
            this.showDialogSuccesful()
            this.status = 'succes';
            this._router.navigate(['/raw-material-delivery-states'])
          }else{
            this.status = "error"
            this.showDialogError()
          }
        },
        err => {
          this.showDialogError()
        }
      )
    }
    getById(){
      this._route.params.subscribe(params => {
        let code = params['code'];
        this.rawMaterialDeliveryStatesService.getById(code).subscribe(
          data => {
            this.listDataRawMaterialDeliveryStates = data;
            
            this.code = data.code;
            let createDeliveryDate = this.listDataRawMaterialDeliveryStates.dateDelivery.split("/")
            this.dateDelivery = new Date(parseInt(createDeliveryDate[2]), parseInt(createDeliveryDate[1])-1, parseInt( createDeliveryDate[0] ))
  
            this.deliveryStock = this.listDataRawMaterialDeliveryStates.deliveryStock;

            this.request = this.listDataRawMaterialDeliveryStates.request
            let codigo = []
            codigo.push(this.listDataRawMaterialDeliveryStates.request);
            this.request = codigo[0].code;
  
          }, error => {
            console.log(error);
  
          }
        )
      })
      
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
