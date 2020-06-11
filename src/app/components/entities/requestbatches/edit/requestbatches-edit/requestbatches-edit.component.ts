import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequestbatchesService } from 'src/app/services/requestbatches.services';
import { RequestBatches } from 'src/app/model/requestbatches';
import swal from 'sweetalert';
import { Requeststate } from 'src/app/model/requeststatus';
import { Productions } from 'src/app/model/productions';
@Component({
  selector: 'app-requestbatches-edit',
  templateUrl: './requestbatches-edit.component.html',
  styleUrls: ['./requestbatches-edit.component.css'],
  providers: [RequestbatchesService]
})
export class RequestbatchesEditComponent implements OnInit {
  public status: string;
  public requestbatches: RequestBatches;
  liststaterequestbatches: Requeststate[] = [];
  listproduction: Productions[] = [];
  public pageTitle: string;
  public btn: string;
  public url: string;
  public date: Date;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestbatchesservice: RequestbatchesService
  ) {
    this.requestbatches = new RequestBatches(null, '', null, null);
    this.pageTitle = 'Editar Solicitud Lotes';
    this.btn = 'Actualizar';
    this.url = Global.url;
   }

  ngOnInit(): void {
    this.getrequestbatches();
    this.getAllstaterequeststate();
    this.getAllsProductions();
  }


  getAllstaterequeststate() {
    this.requestbatchesservice.getAllrequeststate().subscribe(
      data => {
        this.liststaterequestbatches = data;
      }
    );
  }

  getAllsProductions() {
    this.requestbatchesservice.getAllProductions().subscribe(
      data => {
        this.listproduction = data;
      }
    );
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
          this.requestbatchesservice.updateRequestbatch(this.requestbatches.code, this.requestbatches).subscribe(response => {
            this.status = 'success';
            this.requestbatches = response.requestbatches;
            this.router.navigate(['/requestbatches']);

          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
    console.log(this.requestbatches);
  }
  getrequestbatches() {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.requestbatchesservice.getRequestbatch(code).subscribe(
        response => {
          this.requestbatches = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
