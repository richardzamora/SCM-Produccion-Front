import { Component, OnInit } from '@angular/core';
import {Productions} from '../../../../../model/productions'
import {ProductionsService} from '../../../../../services/productions-service.service'
import { MatDialog } from "@angular/material/dialog";
import { DialogConfirmationProductionsComponent } from "../dialog/dialog-confirmation/dialog-confirmation.component";
import {DialogActionProductionsComponent} from '../dialog/dialog-action/dialog-action.component'
@Component({
  selector: 'app-list-productions',
  templateUrl: './list-productions.component.html',
  styleUrls: ['./list-productions.component.css']
})
export class ListProductionsComponent implements OnInit {

  public status: String;

  constructor(private productionsService: ProductionsService,public dialogo: MatDialog) { }
  listDataProductions: Productions[]
  ngOnInit(): void {
    this.productionsService.getAll()
    .subscribe(
      data => {
        this.listDataProductions = data;
      }
    ) 
  }
  mostrarDialogo(id): void {
    this.dialogo
      .open(DialogConfirmationProductionsComponent, {
        data: `¿Estas seguro de eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.deleteById(id);
        }
      });
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionProductionsComponent, {
      data: `Eliminado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionProductionsComponent, {
      data: `Error. No se ha eliminado el elemento.`
    })
    .afterClosed()
  }
  deleteById(id){
    this.productionsService.deleteById(id)
    .subscribe(
      data => {
        if(this.status = "success"){
          this.status = 'succes';
          this.showDialogSuccesful();
          this.ngOnInit();
        }
      },
      error => {
        this.status = "error"
        this.showDialogError(); 
      }
    )
  }
}
