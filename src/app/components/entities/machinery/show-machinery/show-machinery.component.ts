import { Component, OnInit } from '@angular/core';
import {MachineryService} from '../../../../services/machinery.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Machinery } from 'src/app/model/machinery';
import swal from 'sweetalert';

import {BranchOffice} from '../../../../model/branchOffice';
import {Humanresource} from '../../../../model/humanresource';
import {Machinestate} from '../../../../model/machinestate';
import {MachineryType} from '../../../../model/machineryType';


@Component({
  selector: 'app-show-machinery',
  templateUrl: './show-machinery.component.html',
  styleUrls: ['./show-machinery.component.css']
})
export class ShowMachineryComponent implements OnInit {
  public machineries: Machinery[];
  public title = 'Datos Machinery';
  constructor(
    private machineryService: MachineryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.machineryService.getAll().subscribe(response => {
      this.machineries = response;
    });
  }

  delete(code){

    swal({
      title: 'Estas seguro que deseas eliminarlo?',
      text: 'cuidado estas apunto de eliminar un registro',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Poof! su registro ha sido eliminado', {
            icon: 'success',
          });
          this.machineryService.delete(code)
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
