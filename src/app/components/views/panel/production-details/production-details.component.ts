import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductionDetailsService, ProductionDetailsIdClass, ProductionDetailsClass} from '../../../../services/production-details.service'
import {ProductionDetails} from '../../../../model/production-details'
import { MatDialog } from "@angular/material/dialog";
import {ProductService} from '../../../../services/product.service'
import {ProductionsService} from '../../../../services/productions-service.service'
import {Productions} from '../../.././../model/productions'
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import {ShowDialogProductBatchComponent} from '../../../entities/production-details/list-production-details/show-dialog-product-batch/show-dialog-product-batch.component'

@Component({
  selector: 'app-production-details-panel',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css']
})
export class ProductionDetailsComponentPanel implements OnInit {

  listData = new MatTableDataSource<ProductionDetails>();
  data: ProductionDetails;
  production: Productions
  headerbranch: string [] = ['product', 'stockProducts','startDate', 'endDate', 'processedProducts' , 'productionStateBean', 'productBatch'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: ProductionDetailsService,public dialogo: MatDialog, private productionsService: ProductionsService) { this.service.listDataDetails().subscribe(
    (a: string) =>{
      this.showRawMaterialRequests();
    }
  ); }

  ngOnInit(): void {
    this.showRawMaterialRequests();
  }

  showNumberBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogProductBatchComponent, {
      data: arreglo
    })
    .afterClosed()
  }
  showRawMaterialRequests(){
    this.service.getAll()
    .subscribe(
      data => {
        console.log(data)
        this.listData = new MatTableDataSource<ProductionDetails>(data);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      }
    ) 
  }
  applyFilterRawMaterialRequests(valueFilter: string){
    this.listData.filter = valueFilter.trim().toLocaleLowerCase();
  }
  getById(code){
    this.productionsService.getById(code)
      .subscribe(
        data => {
          this.production = data;
          let arregloBatch = []
          arregloBatch.push(this.production);

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
        },
        error => {
          console.log(error);

        }
      )
  }
}
