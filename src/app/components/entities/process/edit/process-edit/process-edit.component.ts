import { Component, OnInit } from '@angular/core';
import {Process} from '../../../../../model/process';
import {ProcessService} from '../../../../../services/process.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Global} from '../../../../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-process-edit',
  templateUrl: './process-edit.component.html',
  styleUrls: ['./process-edit.component.css']
})
export class ProcessEditComponent implements OnInit {

  public process: Process;
  public pageTitle: string;
  public status: string;
  public btn: string;
  public url: string;

  constructor(public processService: ProcessService,
              public route: ActivatedRoute,
              public router: Router
  ) { }

  ngOnInit(): void {
    this.process = new Process(null, '', null, '', null, null);
    this.pageTitle = 'Create Process';
    this.btn = 'Actualizar';
    this.url = Global.url;

    this.getProcess();
  }

  getProcess(): void{
    this.route.params
      .subscribe(
        params => {
          const code = params.code;
          this.processService.getProcess(code)
            .subscribe(
              response => {
                this.process = response;
              }, error => {
                console.log(error);
              }
            );
        }
      );
  }

  save(): void{
    this.processService.addProcess(this.process)
      .subscribe(
        response => {
          if (this.status = 'success') {
            swal(
              'Proceso creado!!',
              'El proceso ha sido creado correctamente',
              'success'
            );

            location.reload(true);
            this.process = response;
            this.router.navigate(['/process']);
          }
          else {
            this.status = 'error';
            swal(
              'Proceso creado!!',
              'El proceso no se ha creado correctamente :(',
              'error'
            );
          }

          location.reload(true);
        }
      );
  }
}
