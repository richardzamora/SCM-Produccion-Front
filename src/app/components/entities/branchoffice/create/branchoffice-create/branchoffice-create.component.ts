import { Component, OnInit } from '@angular/core';
import { BranchOffice } from 'src/app/model/branchOffice';
import { Router } from '@angular/router';
import { BranchofficeService } from 'src/app/services/branchoffice.services';
import { error } from 'protractor';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import swal from 'sweetalert';
@Component({
  selector: 'app-branchoffice-create',
  templateUrl: './branchoffice-create.component.html',
  styleUrls: ['./branchoffice-create.component.css']
})
export class BranchofficeCreateComponent implements OnInit {
  public branchoffice: BranchOffice;
  liststateBranchOffice: StateBranchOffice[] = [];
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private branchofficeService: BranchofficeService
  ) {
    this.branchoffice = new BranchOffice(null,"","",0);
    this.page_title = 'Crear Sucursal'
    this.btn = 'Guardar'
  }

  ngOnInit(): void {
   this.getAllstateBranch();
  }


  getAllstateBranch(){
    this.branchofficeService.getAllStateBranch().subscribe(
      data =>{
        this.liststateBranchOffice = data;
      }
    );
  }

  save(){
    console.log(this.branchoffice)
    this.branchofficeService.addBranchoffice(this.branchoffice).subscribe(response=>{
      if (this.status = 'success'){
        swal(
          'Sucursal creada!!',
          'La sucursal se ha creado correctamente',
          'success'
        );
        this.branchoffice = response.branchoffice;
      }else{
        this.status = 'error';
        swal(
          'Sucursal creada!!',
          'La sucursal se ha creado correctamente',
          'error'
        );
      }
      location.reload(true);
    },error => {
      console.log(error);
      this.status = 'error'
    })
  }

}
