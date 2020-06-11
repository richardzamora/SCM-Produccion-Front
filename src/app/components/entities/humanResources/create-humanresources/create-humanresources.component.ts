import { Component, OnInit } from '@angular/core';
import {Humanresource} from '../../../../model/humanresource';
import {Router} from '@angular/router';
import {HumanResourcesService} from '../../../../services/human-resources.service';
import {WorkShiftsService} from '../../../../services/work-shifts.service';
import swal from 'sweetalert';
import {WorkShift} from '../../../../model/workShift';

@Component({
  selector: 'app-create-humanresources',
  templateUrl: './create-humanresources.component.html',
  styleUrls: ['./create-humanresources.component.css']
})
export class CreateHumanresourcesComponent implements OnInit {
  public humanresource: Humanresource;
  public workshifts: WorkShift[];
  public pageTitle: string;
  public status: string;
  public btn: string;
  constructor(
    private router: Router,
    private humanresourceService: HumanResourcesService,
    private workShiftsService: WorkShiftsService
  ) {
    this.humanresource = new Humanresource(null, '', '', new WorkShift(null, ''));
    this.pageTitle = 'Crear Human Resource';
    this.btn = 'Guardar';
  }

  ngOnInit(): void {
    this.workShiftsService.getAll().subscribe(response => {
      this.workshifts = response;
    });
  }
  save(){
    this.humanresourceService.add(this.humanresource).subscribe(response => {
      if (this.status === 'success'){
        swal(
          'Recurso humano creado!!',
          'El Recurso humano se ha creado correctamente',
          'successs'
        );
        location.reload(true);
        this.humanresource = response.humanresource;
        this.router.navigate(['/humanresource']);
      }else{
        this.status = 'error';
        swal(
          'Recurso humano creada!!',
          'El Recurso humano no se ha creado correctamente :(',
          'error'
        );
      }location.reload(true);
    });
  }

}
