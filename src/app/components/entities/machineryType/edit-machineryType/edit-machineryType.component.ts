import { Component, OnInit } from '@angular/core';
import {MachineryType} from '../../../../model/machineryType';
import {ActivatedRoute, Router} from '@angular/router';
import {MachineryTypesService} from '../../../../services/machinery-types.service';
import {Global} from '../../../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-machinery-type',
  templateUrl: './edit-machineryType.component.html',
  styleUrls: ['./edit-machineryType.component.css']
})
export class EditMachineryTypeComponent implements OnInit {

  public status: string;
  public machineryType: MachineryType;
  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private machineryTypeService: MachineryTypesService
  ) {
    this.machineryType = new MachineryType(null, '');
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
          this.machineryTypeService.update(this.machineryType.code, this.machineryType).subscribe(response => {
            this.status = 'success';
            this.machineryType = response.machineryType;
            this.router.navigate(['/machineryType']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }
  getValues(){
    this.route.params.subscribe(params => {
      const code = params.code;
      this.machineryTypeService.getOne(code).subscribe(
        response => {
          this.machineryType = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
