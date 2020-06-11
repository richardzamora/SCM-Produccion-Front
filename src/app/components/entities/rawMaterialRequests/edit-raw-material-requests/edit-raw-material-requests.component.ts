import { Component, OnInit } from '@angular/core';
import {RawMaterialRequestsService, RawMaterialRequestsClass} from '../../../../services/rawMaterialRequests-service.service'
import {DateAdapter} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Productions} from '../../../../model/productions'
import {ProductionsService} from '../../../../services/productions-service.service'
import {RawMaterialRequests} from '../../../../model/RawMaterialRequests'
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ShowDialogNumberBatchComponent} from '../list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component'

@Component({
  selector: 'app-edit-raw-material-requests',
  templateUrl: './edit-raw-material-requests.component.html',
  styleUrls: ['./edit-raw-material-requests.component.css']
})
export class EditRawMaterialRequestsComponent implements OnInit {

  public status: String;
  code: Number
  requestDate= new Date()
  state: Number
  numberOrder: Number
  numberBatch: Number
  listDataRawMaterialRequets: RawMaterialRequests
  listDataProductions: Productions[]

  public page_title: String;
  public btn: String;


  constructor(private productionsService: ProductionsService, private rawMaterialRequetsService:RawMaterialRequestsService,  private _router: Router,
    private _route: ActivatedRoute, private dateAdapter: DateAdapter<any>,public dialogo: MatDialog) {this.page_title = 'Editar Lote';
    this.btn = 'Actualizar'; }

  ngOnInit(): void {
    this.getById();
    this.dateAdapter.setLocale("es-co")
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
      data: `Actualizado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Error. No se ha actualizado el elemento.`
    })
    .afterClosed()
  }
  edit(): void{
    var rawMaterialRequests = new RawMaterialRequestsClass(this.state, this.requestDate.toLocaleDateString(), this.numberOrder, parseInt(this.numberBatch.toString()))
    this.rawMaterialRequetsService.update(this.code, rawMaterialRequests)
    .subscribe(
      data => {
        if (this.status = 'success') {
          this.showDialogSuccesful()
          this.status = 'succes';
          this._router.navigate(['/raw-material-requests'])
        }
      },
      er =>{
        this.showDialogError()
      }
    )
  }
  getById(){
    this._route.params.subscribe(params => {
      let code = params['code'];
      this.rawMaterialRequetsService.getById(code).subscribe(
        data => {
          this.listDataRawMaterialRequets = data;
          this.code = this.listDataRawMaterialRequets.code;
          
          let createRequestDate = this.listDataRawMaterialRequets.requestDate.split("/")
          this.requestDate = new Date(parseInt(createRequestDate[2]), parseInt(createRequestDate[1])-1, parseInt( createRequestDate[0] ))

          this.state = this.listDataRawMaterialRequets.state
          this.numberOrder = this.listDataRawMaterialRequets.numberOrder
          let codigo = []
          codigo.push(this.listDataRawMaterialRequets.numberBatch);
          this.numberBatch = codigo[0].code;

        }, error => {
          console.log(error);

        }
      )
    })
    
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
