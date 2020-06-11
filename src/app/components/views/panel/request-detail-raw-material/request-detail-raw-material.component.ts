import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import { MatDialog } from "@angular/material/dialog";
import {RequestsDetailsRawMaterial} from '../../../../model/RequestsDetailsRawMaterial'
import {RequestsDetailsRawMaterialService} from '../../../../services/requests_details_raw_material.service'
import {DialogRawMaterialRequestsComponent} from '../../../entities/detailsRawMaterial/list-details-raw-material/dialog-raw-material-requests/dialog-raw-material-requests.component'
@Component({
  selector: 'app-request-detail-raw-material',
  templateUrl: './request-detail-raw-material.component.html',
  styleUrls: ['./request-detail-raw-material.component.css']
})
export class RequestDetailRawMaterialComponent implements OnInit {

  listData = new  MatTableDataSource<RequestsDetailsRawMaterial>();
  data: RequestsDetailsRawMaterial;
  headerbranch: string [] = ['code', 'rawMaterialRequests','requestAmount', 'deliveryDeadlineDate', 'description'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  constructor(private service: RequestsDetailsRawMaterialService,public dialogo: MatDialog) { this.service.listDataDetails().subscribe(
    (a: string) =>{
      this.showRawMaterialRequests();
    }
  ); }

  ngOnInit(): void {
    this.showRawMaterialRequests();
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(DialogRawMaterialRequestsComponent, {
      data: arreglo
    })
    .afterClosed()
  }
  showRawMaterialRequests(){
    this.service.getAll()
    .subscribe(
      data => {
        this.listData = new MatTableDataSource<RequestsDetailsRawMaterial>(data);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      }
    ) 
  }
  applyFilterRawMaterialRequests(valueFilter: string){
    this.listData.filter = valueFilter.trim().toLocaleLowerCase();
  }
  getById(code){
      this.service.getById(code).subscribe(
        data => {
          this.data = data;
          let arregloRawMaterialRequets = []
          arregloRawMaterialRequets.push(this.data.rawMaterialRequests);
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
  
  }

}
