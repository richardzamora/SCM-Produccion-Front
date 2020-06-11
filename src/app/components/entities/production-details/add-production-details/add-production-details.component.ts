import { Component, OnInit } from '@angular/core';
import {ProductionDetailsService, ProductionDetailsClass, ProductionDetailsIdClass} from '../../../../services/production-details.service'
import {ProductionDetails} from '../../../../model/production-details'
import {DateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ProductService} from '../../../../services/product.service'
import {Product} from '../../../../model/product'
import {ProductionStatesService} from '../../../../services/production-states.service'
import {ProductionStates} from '../../../../model/production-states'
import {ProductionsService} from '../../../../services/productions-service.service'
import {Productions} from '../../.././../model/productions'
import {ShowDialogProductBatchComponent} from '../list-production-details/show-dialog-product-batch/show-dialog-product-batch.component'


@Component({
  selector: 'app-add-production-details',
  templateUrl: './add-production-details.component.html',
  styleUrls: ['./add-production-details.component.css']
})
export class AddProductionDetailsComponent implements OnInit {

  public productsCode: Number;
  public stockProducts: Number;
  public startDate = new Date();
  public endDate = new Date();
  public processedProducts: Number;
  public productionStateBean: Number;
  public productBatch: Number;

  public btn: String;
  public page_title: String;
  public status: String;

  products: Product[]
  productionStates: ProductionStates[]
  productions: Productions[]
  production: Productions

  constructor(private productionDetailsService: ProductionDetailsService, private router: Router,private dateAdapter: DateAdapter<any>, public dialogo: MatDialog, private productService: ProductService, private productionStatesService: ProductionStatesService,private productionsService: ProductionsService) {this.page_title = 'Crear detalle de la producción' 
  this.btn = 'Guardar' }

  ngOnInit(): void {
    this.dateAdapter.setLocale("es")
    this.getAllProducts();
    this.getAllProductions();
    this.getAllProductionStates();
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
    var productionDetailsId = new ProductionDetailsIdClass(this.productsCode, this.productBatch);
    var productionDetails = new ProductionDetailsClass(productionDetailsId,this.stockProducts, this.startDate.toLocaleDateString(), this.endDate.toLocaleDateString(), this.processedProducts, parseInt(this.productionStateBean.toString()))
    this.productionDetailsService.save(productionDetails)
    .subscribe(
      data => {
        if (this.status = 'success') {
          this.showDialogSuccesful()
          this.status = 'succes';
          location.reload(true);
          this.router.navigate(['/production-details']);
          
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
  public onChange(event: any): void {
    console.log(event.target.value);
  }
  getAllProducts(){
    this.productService.getProducts()
    .subscribe(
      data => {
        this.products = data;
      }
    )
  }
  getAllProductionStates(){
    this.productionStatesService.getAll()
    .subscribe(
      data => {
        this.productionStates = data;
      }
    )
  }
  getAllProductions(){
    this.productionsService.getAll()
    .subscribe(
      data => {
        this.productions = data;
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
  getByIdProductions(code){
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
          this.showProductBatch(arregloData);
        },
        error => {
          console.log(error);

        }
      )
  }
}
