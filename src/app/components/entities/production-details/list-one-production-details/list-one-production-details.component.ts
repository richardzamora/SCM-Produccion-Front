import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {ProductionDetailsService, ProductionDetailsClass} from '../../../../services/production-details.service'
import {ProductionDetails} from '../../../../model/production-details'
import {ProductService} from '../../../../services/product.service'
import {Product} from '../../../../model/product'
import {ProductionsService} from '../../../../services/productions-service.service'
import {Productions} from '../../.././../model/productions'
import { MatDialog } from "@angular/material/dialog";
import {ShowDialogProductBatchComponent} from '../list-production-details/show-dialog-product-batch/show-dialog-product-batch.component'

@Component({
  selector: 'app-list-one-production-details',
  templateUrl: './list-one-production-details.component.html',
  styleUrls: ['./list-one-production-details.component.css']
})

//Filtra un reporte por una solicitud de servicio en especifico

export class ListOneProductionDetailsComponent implements OnInit {
  public title: String;
  public productName: String;
  public productBatch: Number;
  public productionStateBean:String;
  public stockProducts: Number;
  public startDate: String;
  public endDate: String;
  public processedProducts: Number;
  
  constructor(private _route: ActivatedRoute,
    private _router: Router, private productionDetailsService: ProductionDetailsService, private productService: ProductService, private productionsService: ProductionsService, public dialogo: MatDialog) {{this.title = 'Detalle de la producción' } }
    listData: ProductionDetails[]
    product: Product
    productions: Productions
    productionDetails: ProductionDetails

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let productsCode = params["productsCode"];
      let productBatch = params["productBatch"];
      this.productionDetailsService.getAll() 
      .subscribe(
        data => {
          //this.listData = data;
          this.getByIdComposite(data, productsCode, productBatch)
          this.productionDetails = this.listData[0];

          let id = []
          id.push(this.productionDetails.id);
          this.getByIdProduct(id[0].productsCode);
         // this.productsCode = id[0].productsCode;
          this.productBatch = id[0].productBatch;
          
          let productionStateBean = []
          productionStateBean.push(this.productionDetails.productionStateBean);
          this.productionStateBean = productionStateBean[0].description;

          this.stockProducts = this.productionDetails.stockProducts;
          this.startDate = this.productionDetails.startDate;
          this.endDate = this.productionDetails.endDate;
          this.processedProducts = this.productionDetails.processedProducts;

        }
      )

    })
    
  }
  getByIdComposite(list,productsCode, productBatch ){
    this.listData = this.productionDetailsService.getByIdComposite(list, productsCode, productBatch);
  }
  getByIdProduct(id){
    this.productService.getProduct(id)
      .subscribe(
        data => {
          this.productName = data.name;
        }
      )

  }
  showProductBatch(arreglo): void {

    this.dialogo
    .open(ShowDialogProductBatchComponent, {
      data: arreglo
    })
    .afterClosed()
  }
  getByIdProductions(){
    this.productionsService.getById(this.productBatch)
      .subscribe(
        data => {
          this.productions = data;
          let arregloBatch = []
          arregloBatch.push(this.productions);

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
          this.showProductBatch(arregloData);
          console.log(arregloData)
        },
        error => {
          console.log(error);

        }
      )
  }
}
