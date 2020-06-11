import { Component, OnInit } from '@angular/core';
import {RequestsDetailsRawMaterialService, RequestsDetailsRawMaterialClass} from '../../../../services/requests_details_raw_material.service'
import {RequestsDetailsRawMaterial} from '../../../../model/RequestsDetailsRawMaterial'
import { Router, ActivatedRoute, Params} from '@angular/router';
import {DialogRawMaterialRequestsComponent} from '../list-details-raw-material/dialog-raw-material-requests/dialog-raw-material-requests.component'
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'app-list-one-details-raw-material',
  templateUrl: './list-one-details-raw-material.component.html',
  styleUrls: ['./list-one-details-raw-material.component.css']
})
export class ListOneDetailsRawMaterialComponent implements OnInit {
  public requestsDetailRawMaterial: RequestsDetailsRawMaterialClass = new RequestsDetailsRawMaterialClass(null, null, null, null)

  public title: String;
  public url: String;
  public rawMaterialRequests: Number
  dataRequestsDetailMaterial: RequestsDetailsRawMaterial

  constructor(private _route: ActivatedRoute,
    private _router: Router, private requestsDetailRawMaterialService: RequestsDetailsRawMaterialService, public dialogo: MatDialog) {{this.title = 'Detalle de solicitud de materia prima' }}


  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this.requestsDetailRawMaterialService.getById(code).subscribe(
        response => {
          this.requestsDetailRawMaterial = response;
          let codigo = []
          codigo.push(response.rawMaterialRequests)
          this.rawMaterialRequests = codigo[0].code;
        },error => {
          console.log(error);
        }
        )
    })
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(DialogRawMaterialRequestsComponent, {
      data: arreglo
    })
    .afterClosed()
  }
  getById(){
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this.requestsDetailRawMaterialService.getById(code).subscribe(
        data => {
          this.dataRequestsDetailMaterial = data;
          let arregloRawMaterialRequets = []
          arregloRawMaterialRequets.push(this.dataRequestsDetailMaterial.rawMaterialRequests);
          let numberBatch = []
          numberBatch.push(arregloRawMaterialRequets[0].numberBatch)
          let arregloData = [
            {
              value: "Código: "+ arregloRawMaterialRequets[0].code
             },
             {
               value:"Estado: " +  arregloRawMaterialRequets[0].state
             },
             {
               value: "Fecha de solicitud: "+ arregloRawMaterialRequets[0].requestDate
             },
             {
               value: "Número de orden: "+arregloRawMaterialRequets[0].numberOrder
             },
             {
               value:"Lote: " + numberBatch[0].code
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
