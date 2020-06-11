import { Component, OnInit } from '@angular/core';
import {ProductionDetailsService, ProductionDetailsIdClass, ProductionDetailsClass} from '../../../../services/production-details.service'
import {ProductionDetails} from '../../../../model/production-details'
import { MatDialog } from "@angular/material/dialog";
import {DialogConfirmationComponent} from '../../production-states/components/dialog/dialog-confirmation/dialog-confirmation.component'
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
import {ProductService} from '../../../../services/product.service'
import {Product} from '../../../../model/product'
@Component({
  selector: 'app-list-production-details',
  templateUrl: './list-production-details.component.html',
  styleUrls: ['./list-production-details.component.css']
})
export class ListProductionDetailsComponent implements OnInit {

  constructor(private productionDetailsService: ProductionDetailsService, public dialogo: MatDialog, private productService: ProductService) { }
  listData: ProductionDetails[]
  product: Product
  productNames = []
  ngOnInit(): void {
    this.productionDetailsService.getAll() 
    .subscribe(
      data => {
        this.listData = data;
        console.log(this.listData)
        let names = []
        this.listData.forEach(element => {
          let id = []
          id.push(element.id)
          this.productService.getProduct(id[0].productsCode)
          .subscribe(
            data => {
              this.product = data;
              this.productNames.push(data);
            }
          )
          
         
        });
      }
    )
    
    
  }
  mostrarDialogo(productsCode, productBatch): void {
    this.dialogo
      .open(DialogConfirmationComponent, {
        data: `¿Estas seguro de eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.deleteById(productsCode, productBatch);
        }
      });
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Eliminado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Error. No se ha eliminado el elemento.`
    })
    .afterClosed()
  }
  deleteById(productsCode, productBatch){
    var productionDetailsId = new ProductionDetailsIdClass(productsCode, productBatch);
    var productionDetails = new ProductionDetailsClass(productionDetailsId, null, null, null, null, null)
    this.productionDetailsService.deleteById(productionDetails)
    .subscribe(
      data => {
        this.showDialogSuccesful();
        this.ngOnInit();
      },
      error => {
        this.showDialogError(); 
      }
    )
  }
  getByIdProduct(id){
    this.productService.getProduct(id)
      .subscribe(
        data => {
          this.product = data;
        }
      )
  }
}
