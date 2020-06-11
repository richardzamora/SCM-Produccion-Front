import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute, Params} from '@angular/router';
import {RawMaterialDeliveryStates} from '../../../../model/RawMaterialDeliveryStates'
import {RawMaterialDeliveryStatesService, RawMaterialDeliveryStatesClass} from '../../../../services/raw-material-delivery-states-service.service'
import {ShowDialogRequestsComponent} from '../list-raw-material-delivery/show-dialog-requests/show-dialog-requests.component'


@Component({
  selector: 'app-list-one-raw-material-delivery',
  templateUrl: './list-one-raw-material-delivery.component.html',
  styleUrls: ['./list-one-raw-material-delivery.component.css']
})
export class ListOneRawMaterialDeliveryComponent implements OnInit {

  public rawMaterialDeliveryStates: RawMaterialDeliveryStatesClass = new RawMaterialDeliveryStatesClass(null, null, null)

  public title: String;
  public url: String;
  public requests: Number
  dataRawMaterialDeliveryStates: RawMaterialDeliveryStates

  constructor(private _route: ActivatedRoute,
    private _router: Router, private rawMaterialDeliveryStatesService: RawMaterialDeliveryStatesService, public dialogo: MatDialog) {{this.title = 'Estado de entrega de solicitud de materia prima' }}

    ngOnInit(): void {
      this._route.params.subscribe(params =>{
        let code = params['code'];
        this.rawMaterialDeliveryStatesService.getById(code).subscribe(
          response => {
            this.rawMaterialDeliveryStates = response;
            let codigo = []
            codigo.push(response.request)
            this.requests = codigo[0].code;
          },error => {
            console.log(error);
          }
          )
      })
    }
    showNumberBatch(arreglo): void {
      this.dialogo
      .open(ShowDialogRequestsComponent, {
        data: arreglo
      })
      .afterClosed()
    }
    getById(){
      this._route.params.subscribe(params =>{
        let code = params['code'];
        this.rawMaterialDeliveryStatesService.getById(code).subscribe(
          data => {
            this.dataRawMaterialDeliveryStates = data;
            let arregloRequests = []
            arregloRequests.push(this.dataRawMaterialDeliveryStates.request);
            let request = []
            request.push(arregloRequests[0].request)
            console.log(data)
            let arregloData = [
              {
               value: "Código: "+ data.code
              },
              {
                value:"Solicitud materia prima: " +  arregloRequests[0].code
              },
              {
                value: "Cantidad solicitada: "+ arregloRequests[0].requestAmount
              },
              {
                value: "Fecha entrega: "+arregloRequests[0].deliveryDeadlineDate
              },
              {
                value:"Descripción: " + arregloRequests[0].description
              }
            ]
            this.showNumberBatch(arregloData);
            console.log(arregloData)
  
          }, error => {
            console.log(error);
  
          }
        )
      })
    
    }

}
