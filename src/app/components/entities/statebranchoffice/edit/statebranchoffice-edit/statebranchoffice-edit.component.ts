import { Component, OnInit } from '@angular/core';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';
@Component({
  selector: 'app-statebranchoffice-edit',
  templateUrl: './statebranchoffice-edit.component.html',
  styleUrls: ['./statebranchoffice-edit.component.css'],
  providers: [StateBranchOfficeService]
})
export class StatebranchofficeEditComponent implements OnInit {

  public statebranchoffice: StateBranchOffice;
  public status: string;
  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private statebranhofficeService: StateBranchOfficeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.statebranchoffice = new StateBranchOffice(null, '');
    this.pageTitle = 'Editar Request State';
    this.btn = 'Actualizar';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getstatebranchoffice();
  }

  save() {
    swal({
      title: 'Estas seguro que deseas Actualizarlo?',
      text: 'cuidado estas apundo de actualizar un registro',
      icon: 'info',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Se Actualizo Correctamente', {
            icon: 'success',
          });
          this.statebranhofficeService.updateStateBranchOffice(this.statebranchoffice.code, this.statebranchoffice).subscribe(response => {
            this.status = 'success';
            this.statebranchoffice = response.statebranchoffice;
            this.router.navigate(['/StateBranchOffice']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }

  getstatebranchoffice() {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.statebranhofficeService.getStateBranchOffice(code).subscribe(
        response => {
          this.statebranchoffice = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }


}
