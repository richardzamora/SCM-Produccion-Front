import { Component, OnInit } from '@angular/core';
import {WorkShift} from '../../../../model/workShift';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkShiftsService} from '../../../../services/work-shifts.service';
import {Global} from '../../../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-workshift',
  templateUrl: './edit-workshift.component.html',
  styleUrls: ['./edit-workshift.component.css']
})
export class EditWorkshiftComponent implements OnInit {

  public status: string;
  public workshift: WorkShift;
  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private workshiftService: WorkShiftsService
  ) {
    this.workshift = new WorkShift(null, '');
    this.pageTitle = 'Editar Turno de trabajo';
    this.btn = 'Actualizar';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getValues();
  }
  save(){
    swal({
      title: 'Estas seguro que deseas Actualizarlo?',
      text: 'cuidado estas apunto de actualizar un registro',
      icon: 'info',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Se Actualizo Correctamente', {
            icon: 'success',
          });
          this.workshiftService.update(this.workshift.code, this.workshift).subscribe(response => {
            this.status = 'success';
            this.workshift = response.workshift;
            this.router.navigate(['/workshift']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }
  getValues(){
    this.route.params.subscribe(params => {
      const code = params.code;
      this.workshiftService.getOne(code).subscribe(
        response => {
          this.workshift = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
