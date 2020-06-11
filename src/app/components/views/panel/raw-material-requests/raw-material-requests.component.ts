import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import {RawMaterialRequests} from '../../../../model/rawMaterialRequests'
import {RawMaterialRequestsService} from '../../../../services/rawMaterialRequests-service.service'
import { MatDialog } from "@angular/material/dialog";
import {ShowDialogNumberBatchComponent} from '../../../../components/entities/rawMaterialRequests/list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component'
@Component({
  selector: 'app-raw-material-requests',
  templateUrl: './raw-material-requests.component.html',
  styleUrls: ['./raw-material-requests.component.css']
})
export class RawMaterialRequestsComponent implements OnInit {


  listDataRawMaterialRequests = new  MatTableDataSource<RawMaterialRequests>();
  dataRawMaterialRequests: RawMaterialRequests
  headerbranch: string [] = ['code', 'requestDate','numberOrder', 'numberBatch', 'state'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private rawMaterialRequestsService: RawMaterialRequestsService,public dialogo: MatDialog) { this.rawMaterialRequestsService.listrawMaterialRequests().subscribe(
    (a: string) =>{
      this.showRawMaterialRequests();
    }
  ); }

  ngOnInit(): void {
    this.showRawMaterialRequests();
  }
  showNumberBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogNumberBatchComponent, {
      data: arreglo
    })
    .afterClosed()
  }
  showRawMaterialRequests(){
    this.rawMaterialRequestsService.getAll()
    .subscribe(
      data => {
        this.listDataRawMaterialRequests = new MatTableDataSource<RawMaterialRequests>(data);
        this.listDataRawMaterialRequests.sort = this.sort;
        this.listDataRawMaterialRequests.paginator = this.paginator;
      }
    ) 
  }
  applyFilterRawMaterialRequests(valueFilter: string){
    this.listDataRawMaterialRequests.filter = valueFilter.trim().toLocaleLowerCase();
  }

  getById(code){
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
  
}
}
