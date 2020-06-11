import { Component, OnInit } from '@angular/core';
import {Productions} from '../../../../../model/productions'
import {ProductionsService, ProductionsClass} from '../../../../../services/productions-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import {DateAdapter} from '@angular/material/core';
import { MatDialog } from "@angular/material/dialog";
import {DialogActionProductionsComponent} from '../dialog/dialog-action/dialog-action.component'

@Component({
  selector: 'app-edit-productions',
  templateUrl: './edit-productions.component.html',
  styleUrls: ['./edit-productions.component.css']
})
export class EditProductionsComponent implements OnInit {
  expirationDate = new Date();
  createDate = new Date();
  public status: String;
  startOrderDate = new Date();
  time: String;
  listDataProductions: Productions;
  code: Number;
  public page_title: String;
  public btn: String;

  constructor(private productionsService: ProductionsService,private _router: Router,
    private _route: ActivatedRoute, private dateAdapter: DateAdapter<any>, public dialogo: MatDialog) { this.page_title = 'Editar Lote';
    this.btn = 'Actualizar';}

  ngOnInit(): void {
    this.getById();
    this.dateAdapter.setLocale("es-co")
   
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionProductionsComponent, {
      data: `Actualizado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionProductionsComponent, {
      data: `Error. No se ha actualizado el elemento.`
    })
    .afterClosed()
  }
  edit(): void{
    var productions = new ProductionsClass( this.createDate.toLocaleDateString(), this.expirationDate.toLocaleDateString(), this.startOrderDate.toLocaleDateString(), this.time);
    this.productionsService.update(this.code,productions)
    .subscribe(
      data => {
        if (this.status = 'success') {
          this.showDialogSuccesful()
          this.status = 'succes';
          this._router.navigate(['/productions'])
        }else{
          this.showDialogError()
        }
      },
      error => {
        this.showDialogError()
      }
    )
  }
  getById(){
    this._route.params.subscribe(params => {
      let code = params['code'];
      this.productionsService.getById(code).subscribe(
        data => {
          this.listDataProductions = data;
          this.code = this.listDataProductions.code;
          let createExpirationDate = this.listDataProductions.expirationDate.split("/")
          this.expirationDate = new Date(parseInt(createExpirationDate[2]), parseInt(createExpirationDate[1])-1, parseInt( createExpirationDate[0] ))
          let createCreateDate = this.listDataProductions.createDate.split("/")
          this.createDate = new Date(parseInt(createCreateDate[2]), parseInt(createCreateDate[1])-1, parseInt( createCreateDate[0] ));
          let createStartOrderDate = this.listDataProductions.startOrderDate.split("/");
          this.startOrderDate = new Date(parseInt(createStartOrderDate[2]), parseInt(createStartOrderDate[1])-1, parseInt( createStartOrderDate[0] ));
          this.time = this.listDataProductions.time;
        }, error => {
          console.log(error);

        }
      )
    })
    
  }
  public onChange(event: any): void {
    console.log(event.target.value);
  }
}
