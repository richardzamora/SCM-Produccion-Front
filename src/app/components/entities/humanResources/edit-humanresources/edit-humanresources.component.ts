import { Component, OnInit } from '@angular/core';
import {Humanresource} from '../../../../model/humanresource';
import {ActivatedRoute, Router} from '@angular/router';
import {HumanResourcesService} from '../../../../services/human-resources.service';
import {Global} from '../../../../services/global';
import swal from 'sweetalert';
import {WorkShift} from '../../../../model/workShift';
import {WorkShiftsService} from '../../../../services/work-shifts.service';

@Component({
  selector: 'app-edit-humanresources',
  templateUrl: './edit-humanresources.component.html',
  styleUrls: ['./edit-humanresources.component.css']
})
export class EditHumanresourcesComponent implements OnInit {

  public status: string;
  public humanresource: Humanresource;
  public workshifts: WorkShift[];

  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private humanresourceService: HumanResourcesService,
    private workShiftsService: WorkShiftsService
  ) {
    this.humanresource = new Humanresource(null, '', '', new WorkShift(null, ''));
    this.pageTitle = 'Editar Turno de trabajo';
    this.btn = 'Actualizar';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.workShiftsService.getAll().subscribe(response => {
      this.workshifts = response;
    });
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
          this.humanresourceService.update(this.humanresource.code, this.humanresource).subscribe(response => {
            this.status = 'success';
            this.humanresource = response.humanresource;
            this.router.navigate(['/humanresource']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }
  getValues(){
    this.route.params.subscribe(params => {
      const code = params.code;
      this.humanresourceService.getOne(code).subscribe(
        response => {
          this.humanresource = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
