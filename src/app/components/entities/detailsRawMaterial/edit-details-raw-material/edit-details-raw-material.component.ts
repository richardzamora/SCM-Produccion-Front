import { Component, OnInit } from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {RequestsDetailsRawMaterialService, RequestsDetailsRawMaterialClass} from '../../../../services/requests_details_raw_material.service'
import {RawMaterialRequestsService} from '../../../../services/rawMaterialRequests-service.service'
import {RawMaterialRequests} from '../../../../model/RawMaterialRequests'
import {RequestsDetailsRawMaterial} from '../../../../model/RequestsDetailsRawMaterial'
import {DialogRawMaterialRequestsComponent} from '../list-details-raw-material/dialog-raw-material-requests/dialog-raw-material-requests.component'


@Component({
  selector: 'app-edit-details-raw-material',
  templateUrl: './edit-details-raw-material.component.html',
  styleUrls: ['./edit-details-raw-material.component.css']
})
export class EditDetailsRawMaterialComponent implements OnInit {

  code: Number
  public rawMaterialRequests: Number;
  public requestAmount: Number;
  public deliveryDeadlineDate = new Date();
  public description: String;
  public status: String;

  public page_title: String;
  public btn: String;

  listDataRawMaterialRequests: RawMaterialRequests[]
  listDataRequestdDetailsRawMaterial:  RequestsDetailsRawMaterial

  constructor(private rawMaterialRequestService: RawMaterialRequestsService, private _router: Router, private _route: ActivatedRoute, private dateAdapter: DateAdapter<any>, private requestsDetailsRawMaterialService: RequestsDetailsRawMaterialService, public dialogo: MatDialog)  {this.page_title = 'Editar detalle de solicitud de materia prima';
  this.btn = 'Actualizar'; }
  ngOnInit(): void {
    this.dateAdapter.setLocale("es")
    this.rawMaterialRequestService.getAll()
    .subscribe(
      data => {
        this.listDataRawMaterialRequests = data;
      }
    ) 
    this.getById()
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(DialogRawMaterialRequestsComponent, {
      data: arreglo
    })
    .afterClosed()
    console.log("asda \n" + "a3ee");
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
   var requestsDetailRawMaterial = new RequestsDetailsRawMaterialClass(parseInt(this.rawMaterialRequests.toString()), this.requestAmount, this.deliveryDeadlineDate.toLocaleDateString(), this.description)
    this.requestsDetailsRawMaterialService.update(this.code,requestsDetailRawMaterial)
    .subscribe(
      data => {
        if (this.status = 'success') {
          this.showDialogSuccesful()
          this.status = 'succes';
          this._router.navigate(['/requests-details-raw-material'])

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
      this.requestsDetailsRawMaterialService.getById(code).subscribe(
        data => {
          this.listDataRequestdDetailsRawMaterial = data;
          
          this.requestAmount = this.listDataRequestdDetailsRawMaterial.requestAmount;
          
          this.code = this.listDataRequestdDetailsRawMaterial.code;

          let createDeliveryDeadlineDate = this.listDataRequestdDetailsRawMaterial.deliveryDeadlineDate.split("/")
          this.deliveryDeadlineDate = new Date(parseInt(createDeliveryDeadlineDate[2]), parseInt(createDeliveryDeadlineDate[1])-1, parseInt( createDeliveryDeadlineDate[0] ))

          this.description = this.listDataRequestdDetailsRawMaterial.description;
          this.rawMaterialRequests = this.listDataRequestdDetailsRawMaterial.rawMaterialRequests
          let codigo = []
          codigo.push(this.listDataRequestdDetailsRawMaterial.rawMaterialRequests);
          this.rawMaterialRequests = codigo[0].code;

        }, error => {
          console.log(error);

        }
      )
    })
    
  }
  getRawMaterialRequestsById(code){
    this.rawMaterialRequestService.getById(code).subscribe(
      data => {
        let numberBatch = []
        numberBatch.push(data.numberBatch)
        let arregloData = [
          {
           value: "Código: "+ data.code
          },
          {
            value:"Estado: " +  data.state
          },
          {
            value: "Fecha de solicitud: "+ data.requestDate
          },
          {
            value: "Número de orden: "+data.numberOrder
          },
          {
            value:"Lote: " + numberBatch[0].code
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
