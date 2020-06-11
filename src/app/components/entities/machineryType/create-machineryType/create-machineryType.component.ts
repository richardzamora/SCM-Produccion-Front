import { Component, OnInit } from '@angular/core';
import {MachineryType} from '../../../../model/machineryType';
import {Router} from '@angular/router';
import {MachineryTypesService} from '../../../../services/machinery-types.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-create-machinery-type',
  templateUrl: './create-machineryType.component.html',
  styleUrls: ['./create-machineryType.component.css']
})
export class CreateMachineryTypeComponent implements OnInit {
  public machineryType: MachineryType;
  public pageTitle: string;
  public status: string;
  public btn: string;
  constructor(
    private router: Router,
    private machineryTypeService: MachineryTypesService
  ) {
    this.machineryType = new MachineryType(null, '');
    this.pageTitle = 'Crear MachineryType';
    this.btn = 'Guardar';
  }

  ngOnInit(): void {
  }
  save(){
    this.machineryTypeService.add(this.machineryType).subscribe(response => {
      if (this.status === 'success'){
        swal(
          'Tipo de maquinaria creada!!',
          'El Tipo de maquinaria se ha creado correctamente',
          'successs'
        );
        location.reload(true);
        this.machineryType = response.machineryType;
        this.router.navigate(['/machineryType']);
      }else{
        this.status = 'error';
        swal(
          'Tipo de maquinaria creada!!',
          'El tipo de maquinaria no se ha creado correctamente :(',
          'error'
        );
      }location.reload(true);
    });
  }
}
