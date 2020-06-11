import { Component, OnInit } from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {RequestsDetailsRawMaterialService, RequestsDetailsRawMaterialClass} from '../../../../services/requests_details_raw_material.service'
import {RawMaterialRequestsService} from '../../../../services/rawMaterialRequests-service.service'
import {RawMaterialRequests} from '../../../../model/RawMaterialRequests'
import {DialogRawMaterialRequestsComponent} from '../list-details-raw-material/dialog-raw-material-requests/dialog-raw-material-requests.component'

@Component({
  selector: 'app-add-details-raw-material',
  templateUrl: './add-details-raw-material.component.html',
  styleUrls: ['./add-details-raw-material.component.css']
})
export class AddDetailsRawMaterialComponent implements OnInit {
  public rawMaterialRequests: Number;
  public requestAmount: Number;
  public deliveryDeadlineDate = new Date();
  public description: String;
  public status: String;

  public btn: String;
  public page_title: String;

  listDataRawMaterialRequests: RawMaterialRequests[]

constructor(private rawMaterialRequestService: RawMaterialRequestsService, private router: Router,private dateAdapter: DateAdapter<any>, private requestsDetailsRawMaterialService: RequestsDetailsRawMaterialService, public dialogo: MatDialog) {this.page_title = 'Crear detalle de solicitud de materia prima' 
this.btn = 'Guardar' }

ngOnInit(): void {
  this.dateAdapter.setLocale("es")
  this.rawMaterialRequestService.getAll()
  .subscribe(
    data => {
      this.listDataRawMaterialRequests = data;
    }
  ) 
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
save(): void{
 var requestsDetailRawMaterial = new RequestsDetailsRawMaterialClass(parseInt(this.rawMaterialRequests.toString()), this.requestAmount, this.deliveryDeadlineDate.toLocaleDateString(), this.description)
  this.requestsDetailsRawMaterialService.save(requestsDetailRawMaterial)
  .subscribe(
    data => {
      if (this.status = 'success') {
        this.showDialogSuccesful()
        this.status = 'succes';
        location.reload(true);
        this.router.navigate(['/requests-detail-raw-material']);
        
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
