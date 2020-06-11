import { Component, OnInit } from '@angular/core';
import {Process} from '../../../../../model/process';
import {ProcessService} from '../../../../../services/process.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-process-show',
  templateUrl: './process-show.component.html',
  styleUrls: ['./process-show.component.css']
})
export class ProcessShowComponent implements OnInit {

  public processes: Process[] = [];

  constructor(public processService: ProcessService
  ) { }

  ngOnInit(): void {
    this.processService.getProcesses()
      .subscribe(
        response => {
          this.processes = response;
        }
      );
  }

  deleteProduct(code) {
    // @ts-ignore
    swal(
      {
        title: '¿Estás seguro que deseas eliminarlo?',
        text: 'Cudado estás apunto de eliminar un registro',
        icon: 'warning',
        buttons: [true, true],
        dangerMode: true
      }
    ).then((willDelete) => {
      if (willDelete) {
        swal('Poof! su registro ha sido eliminado', {
          icon: 'success',
        });

        this.processService.deleteProcess(code)
          .subscribe(
            response => {
              this.ngOnInit();
            }
          );
      }
      else {
        swal('Tranquilo/a su registro no se ha borrado');
      }
    });
  }

}
