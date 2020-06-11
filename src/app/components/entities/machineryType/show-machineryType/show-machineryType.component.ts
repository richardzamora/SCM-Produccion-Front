
import { Component, OnInit } from '@angular/core';
import { MachineryTypesService } from '../../../../services/machinery-types.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { MachineryType } from 'src/app/model/machineryType';
import swal from 'sweetalert';
@Component({
  selector: 'app-show-machinery-type',
  templateUrl: './show-machineryType.component.html',
  styleUrls: ['./show-machineryType.component.css']
})
export class ShowMachineryTypeComponent implements OnInit {
  public machineryTypes: MachineryType[];
  public title = 'Datos MachineryTypes';
  constructor(
    private machineryTypeService: MachineryTypesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.machineryTypeService.getAll().subscribe(response => {
      this.machineryTypes = response;
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
          this.machineryTypeService.delete(code)
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
