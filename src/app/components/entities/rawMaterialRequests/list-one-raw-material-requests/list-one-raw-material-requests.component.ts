import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {RawMaterialRequestsService, RawMaterialRequestsClass} from '../../../../services/rawMaterialRequests-service.service'
import {RawMaterialRequests} from '../../../../model/rawMaterialRequests'
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ShowDialogNumberBatchComponent} from '../list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component'

@Component({
  selector: 'app-list-one-raw-material-requests',
  templateUrl: './list-one-raw-material-requests.component.html',
  styleUrls: ['./list-one-raw-material-requests.component.css']
})
export class ListOneRawMaterialRequestsComponent implements OnInit {

  public rawMaterialRequests: RawMaterialRequestsClass = new RawMaterialRequestsClass(null, null, null, null)
  public title: String;
  public url: String;
  public numberBatch : Number
  dataRawMaterialRequests: RawMaterialRequests

  constructor(private _route: ActivatedRoute,
    private _router: Router, private rawMaterialRequestsService: RawMaterialRequestsService, public dialogo: MatDialog) {{this.title = 'Solicitud materia prima' }}

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this.rawMaterialRequestsService.getById(code).subscribe(
        response => {
          this.rawMaterialRequests = response;
          let codigo = []
          codigo.push(response.numberBatch)
          this.numberBatch = codigo[0].code;
        },error => {
          console.log(error);
        }
        )
    })
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogNumberBatchComponent, {
      data: arreglo
    })
    .afterClosed()
  }
  getById(){
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this.rawMaterialRequestsService.getById(code).subscribe(
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
    })
  
  }



}
