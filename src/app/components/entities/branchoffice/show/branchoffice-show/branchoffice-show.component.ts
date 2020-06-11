import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { BranchofficeService } from 'src/app/services/branchoffice.services'
import { BranchOffice } from 'src/app/model/branchOffice';
import swal from 'sweetalert';
@Component({
  selector: 'app-branchoffice-show',
  templateUrl: './branchoffice-show.component.html',
  styleUrls: ['./branchoffice-show.component.css']
})
export class BranchofficeShowComponent implements OnInit {

  public branchoffices: BranchOffice[];
  public title = "Datos de Sucursales";
  constructor(
    private _branchofficeService: BranchofficeService
  ) { }

  ngOnInit(): void {
    this._branchofficeService.getBranchoffices().subscribe(response => {
      this.branchoffices = response;
    });
  }


  deletebranchoffice(code) {
    swal({
      title: "Estas seguro que deseas eliminarlo?",
      text: "cuidado estas apundo de eliminar un registro",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! su registro ha sido eliminado", {
            icon: "success",
          });
          this._branchofficeService.deleteBranchoffice(code).subscribe(
            response => {
              this.ngOnInit();
            }
          );
        } else {
          swal("Tranquilo/a su registro no se ha borrado");
        }
      });
  }

}
