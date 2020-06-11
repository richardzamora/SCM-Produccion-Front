import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequeststateService } from 'src/app/services/requeststatus.services';
import { Requeststate } from 'src/app/model/requeststatus';
import swal from 'sweetalert';
@Component({
  selector: 'app-requeststatus-edit',
  templateUrl: './requeststatus-edit.component.html',
  styleUrls: ['./requeststatus-edit.component.css'],
  providers: [RequeststateService]
})
export class RequeststatusEditComponent implements OnInit {
  public status: string;
  public requestState: Requeststate;
  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private requestStateService: RequeststateService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
      this.requestState = new Requeststate(null, '');
      this.pageTitle = 'Editar Request estado';
      this.btn = 'Actualizar';
      this.url = Global.url;
  }

  ngOnInit(): void {
    this.getrequeststate();
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
        this.requestStateService.updateRequestState(this.requestState.code, this.requestState).subscribe(response => {
        this.status = 'success';
        this.requestState = response.requeststate;
        this.router.navigate(['/requeststatus']);
    });
  } else {
    swal('Tranquilo/a su registro no se ha Actualizado');
  }
});
  }

  getrequeststate(){
    this.route.params.subscribe(params => {
      const code = params.code;
      this.requestStateService.getRequestState(code).subscribe(
        response => {
          this.requestState = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
