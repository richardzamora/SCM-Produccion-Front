import { Component, OnInit } from '@angular/core';
import {Process} from '../../../../../model/process';
import {ActivatedRoute, Router} from '@angular/router';
import {Global} from '../../../../../services/global';
import {ProcessService} from '../../../../../services/process.service';

@Component({
  selector: 'app-process-show-one',
  templateUrl: './process-show-one.component.html',
  styleUrls: ['./process-show-one.component.css']
})
export class ProcessShowOneComponent implements OnInit {

  public process: Process;
  public url: string;

  constructor(private processService: ProcessService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
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

}
