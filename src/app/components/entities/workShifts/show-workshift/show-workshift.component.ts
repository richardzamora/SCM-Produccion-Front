
import { Component, OnInit } from '@angular/core';
import { WorkShiftsService } from '../../../../services/work-shifts.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { WorkShift } from 'src/app/model/workShift';
import swal from 'sweetalert';
@Component({
  selector: 'app-show-workshift',
  templateUrl: './show-workshift.component.html',
  styleUrls: ['./show-workshift.component.css']
})
export class ShowWorkshiftComponent implements OnInit {
  public workshifts: WorkShift[];
  public title = 'Datos Workshifts';
  constructor(
    private workshiftService: WorkShiftsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workshiftService.getAll().subscribe(response => {
      this.workshifts = response;
    });
  }

  delete(code){

    swal({
      title: 'Estas seguro que deseas eliminarlo?',
      text: 'cuidado estas apundo de eliminar un registro',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Poof! su registro ha sido eliminado', {
            icon: 'success',
          });
          this.workshiftService.delete(code)
            .subscribe(
            response => {
              this.ngOnInit();
            }
          );
        } else {
          swal('Tranquilo/a su registro no se ha borrado');
        }
      });
  }

}
