import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { Requeststate } from 'src/app/model/requeststatus';
import swal from 'sweetalert';
@Component({
  selector: 'app-requestanalysis-edit',
  templateUrl: './requestanalysis-edit.component.html',
  styleUrls: ['./requestanalysis-edit.component.css'],
  providers: [RequestanalysisService]
})
export class RequestanalysisEditComponent implements OnInit {

  public status: string;
  public requestanalysis: Requestanalysis;
  listrequeststates: Requeststate[] = [];
  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private requestanalysisService: RequestanalysisService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.requestanalysis = new Requestanalysis(null, null);
    this.pageTitle = 'Editar request analysis';
    this.btn = 'Actualizar';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getrequestanalysis();

    this.getAllrequeststates();
  }

  save() {
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

          this.requestanalysisService.updateRequestanalysis(this.requestanalysis.code, this.requestanalysis).subscribe(response => {
            this.requestanalysis = response.requestanalysis;
            this.router.navigate(['/requestanalysis']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }


  getAllrequeststates() {
    this.requestanalysisService.getAllRequeststates().subscribe(
      data => {
        this.listrequeststates = data;
      }
    );
  }

  getrequestanalysis() {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.requestanalysisService.getRequestanalyse(code).subscribe(
        response => {
          this.requestanalysis = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }
}
