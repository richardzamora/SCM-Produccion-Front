import { Component, OnInit } from '@angular/core';
import { Machinestate } from 'src/app/model/machinestate';
import { MachinestateService } from 'src/app/services/machinestate.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';
@Component({
  selector: 'app-machinestate-edit',
  templateUrl: './machinestate-edit.component.html',
  styleUrls: ['./machinestate-edit.component.css'],
  providers: [MachinestateService]
})
export class MachinestateEditComponent implements OnInit {
  public status: string;
  public machinstate: Machinestate;
  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private machinestateService: MachinestateService
  ) {
      this.machinstate = new Machinestate(null, '');
      this.pageTitle = 'Editar Persona';
      this.btn = 'Actualizar';
      this.url = Global.url;
    }

  ngOnInit(): void {
    this.getMachineState();
  }
  save(){
    swal({
      title: 'Estas seguro que deseas Actualizarlo?',
      text: 'cuidado estas apundo de actualizar un registro',
      icon: 'info',
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal('Se Actualizo Correctamente', {
          icon: 'success',
        });
        this.machinestateService.updateMachineState(this.machinstate.code, this.machinstate).subscribe(response => {
          this.status = 'success';
          this.machinstate = response.machinstate;
          this.router.navigate(['/machinestate']);
        });
      } else {
        swal('Tranquilo/a su registro no se ha Actualizado');
      }
    });
  }
  getMachineState(){
    this.route.params.subscribe(params => {
      const code = params.code;
      this.machinestateService.getMachineState(code).subscribe(
        response => {
          this.machinstate = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
