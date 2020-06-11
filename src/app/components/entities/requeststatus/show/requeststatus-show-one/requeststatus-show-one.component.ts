import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequeststateService } from 'src/app/services/requeststatus.services';
import { Requeststate } from 'src/app/model/requeststatus';
@Component({
  selector: 'app-requeststatus-show-one',
  templateUrl: './requeststatus-show-one.component.html',
  styleUrls: ['./requeststatus-show-one.component.css'],
  providers: [RequeststateService]
})
export class RequeststatusShowOneComponent implements OnInit {

  public requeststate: Requeststate;
  public title: string;
  public url: string;
  constructor(
    private requeststateService: RequeststateService,
    private route: ActivatedRoute,
    private router: Router
  ) {this.title = 'estado de la maquina'; }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.requeststateService.getRequestState(code).subscribe(
        response => {
          this.requeststate = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}
