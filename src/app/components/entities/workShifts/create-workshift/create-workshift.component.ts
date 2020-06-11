import { Component, OnInit } from '@angular/core';
import {WorkShift} from '../../../../model/workShift';
import {Router} from '@angular/router';
import {WorkShiftsService} from '../../../../services/work-shifts.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-create-workshift',
  templateUrl: './create-workshift.component.html',
  styleUrls: ['./create-workshift.component.css']
})
export class CreateWorkshiftComponent implements OnInit {
  public workshift: WorkShift;
  public pageTitle: string;
  public status: string;
  public btn: string;
  constructor(
    private router: Router,
    private workshiftService: WorkShiftsService
  ) {
    this.workshift = new WorkShift(null, '');
    this.pageTitle = 'Crear Workshift';
    this.btn = 'Guardar';
  }

  ngOnInit(): void {
  }
  save(){
    this.workshiftService.add(this.workshift).subscribe(response => {
      if (this.status === 'success'){
        swal(
          'Turno de trabajo creado!!',
          'El turno de trabajo se ha creado correctamente',
          'successs'
        );
        location.reload(true);
        this.workshift = response.workshift;
        this.router.navigate(['/workshift']);
      }else{
        this.status = 'error';
        swal(
          'Turno de trabajo creada!!',
          'El turno de trabajo no se ha creado correctamente :(',
          'error'
        );
      }location.reload(true);
    });
  }
}
