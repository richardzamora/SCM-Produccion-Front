import { Component, OnInit } from '@angular/core';
import {RawMaterialRequestsService, RawMaterialRequestsClass} from '../../../../services/rawMaterialRequests-service.service'
import {DateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';
import {Productions} from '../../../../model/productions'
import {ProductionsService} from '../../../../services/productions-service.service'
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ShowDialogNumberBatchComponent} from '../list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component'

@Component({
  selector: 'app-add-raw-material-requests',
  templateUrl: './add-raw-material-requests.component.html',
  styleUrls: ['./add-raw-material-requests.component.css']
})
export class AddRawMaterialRequestsComponent implements OnInit {

  public status: String;
  requestDate= new Date()
  state: Number
  numberOrder: Number
  numberBatch: Number

  public btn: String;
  public page_title: String;
  listDataProductions: Productions[]
  constructor(private rawMaterialRequestService: RawMaterialRequestsService, private router: Router,private dateAdapter: DateAdapter<any>, private productionsService: ProductionsService, public dialogo: MatDialog) {this.page_title = 'Crear solicitud de materia prima' 
  this.btn = 'Guardar'
  this.numberBatch }

  ngOnInit(): void {
    this.dateAdapter.setLocale("es")
    this.productionsService.getAll()
    .subscribe(
      data => {
        this.listDataProductions = data;
      }
    ) 
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogNumberBatchComponent, {
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
    var rawMaterialRequests = new RawMaterialRequestsClass(this.state, this.requestDate.toLocaleDateString(), this.numberOrder, parseInt(this.numberBatch.toString()))
    this.rawMaterialRequestService.save(rawMaterialRequests)
    .subscribe(
      data => {
        if (this.status = 'success') {
          this.showDialogSuccesful()
          this.status = 'succes';
          location.reload(true);
          this.router.navigate(['/raw-material-requests']);
          
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

  getProductionById(code){
    this.productionsService.getById(code).subscribe(
      data => {
        let arregloData = [
          {
           value: "Código: "+ data.code
          },
          {
            value:"Fecha de inicio de orden: " +  data.startOrderDate
          },
          {
            value: "Tiempo: "+ data.time
          },
          {
            value: "Fecha de creación: "+data.createDate
          },
          {
            value:"Fecha de expiración: " + data.expirationDate
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

