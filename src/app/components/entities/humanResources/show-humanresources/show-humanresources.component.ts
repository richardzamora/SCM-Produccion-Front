import { Component, OnInit } from '@angular/core';
import { HumanResourcesService } from '../../../../services/human-resources.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Humanresource } from 'src/app/model/humanresource';
import { WorkShift } from 'src/app/model/workShift';
import swal from 'sweetalert';
@Component({
  selector: 'app-show-humanresources',
  templateUrl: './show-humanresources.component.html',
  styleUrls: ['./show-humanresources.component.css']
})
export class ShowHumanresourcesComponent implements OnInit {
  public humanresources: Humanresource[];
  public title = 'Datos Humanresources';
  constructor(
    private humanresourceService: HumanResourcesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.humanresourceService.getAll().subscribe(response => {
      this.humanresources = response;
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
          this.humanresourceService.delete(code)
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
