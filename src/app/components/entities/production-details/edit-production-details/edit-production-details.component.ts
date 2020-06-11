import { Component, OnInit } from '@angular/core';
import {ProductionDetailsService, ProductionDetailsClass, ProductionDetailsIdClass} from '../../../../services/production-details.service'
import {ProductionDetails} from '../../../../model/production-details'
import {DateAdapter} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-edit-production-details',
  templateUrl: './edit-production-details.component.html',
  styleUrls: ['./edit-production-details.component.css']
})
export class EditProductionDetailsComponent implements OnInit {

  public productsCode: Number;
  public stockProducts: Number;
  public startDate = new Date();
  public endDate = new Date();
  public processedProducts: Number;
  public productionStateBean: Number;
  public productBatch: Number;
  public status: String;

  products: Product[]
  productionStates: ProductionStates[]
  productions: Productions[]
  production: Productions
  listData: ProductionDetails[]
  productionDetails: ProductionDetails

  public page_title: String;
  public btn: String;

  constructor(private productionDetailsService: ProductionDetailsService, private router: Router,private dateAdapter: DateAdapter<any>, public dialogo: MatDialog, private productService: ProductService, private productionStatesService: ProductionStatesService,private productionsService: ProductionsService,private _router: Router,
    private _route: ActivatedRoute) {this.page_title = 'Editar detalle de producción';
    this.btn = 'Actualizar'; }

    ngOnInit(): void {
      this.dateAdapter.setLocale("es")
      this.getAllProducts();
      this.getAllProductions();
      this.getAllProductionStates();
      this.getAllProductionDetails();
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
    edit(): void{
      var productionDetailsId = new ProductionDetailsIdClass(this.productsCode, this.productBatch);
      var productionDetails = new ProductionDetailsClass(productionDetailsId,this.stockProducts, this.startDate.toLocaleDateString(), this.endDate.toLocaleDateString(), this.processedProducts, parseInt(this.productionStateBean.toString()))
      this.productionDetailsService.update(productionDetails)
      .subscribe(
        data => {
          if (this.status = 'success') {
            this.showDialogSuccesful()
            this.status = 'succes';
            this._router.navigate(['/production-details'])
          }
        },
        err => {
          this.showDialogError()
        }
      )
    }
    public onChange(event: any): void {
      console.log(event.target.value);
    }
    getAllProductionDetails(){
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
            this.productionStateBean = productionStateBean[0].code;
  
            this.stockProducts = this.productionDetails.stockProducts;
            let createStartDate = this.productionDetails.startDate.split("/");
            this.startDate = new Date(parseInt(createStartDate[2]), parseInt(createStartDate[1])-1, parseInt( createStartDate[0] ))

            let createEndDate = this.productionDetails.endDate.split("/");
            this.endDate = new Date(parseInt(createEndDate[2]), parseInt(createEndDate[1])-1, parseInt( createEndDate[0] ))

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
            this.productsCode = data.code;
          }
        )
  
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
