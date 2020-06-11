import { Component, OnInit } from '@angular/core';
import {Machinery} from '../../../../model/machinery';
import {HumanResourcesService} from '../../../../services/human-resources.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Global} from '../../../../services/global';

@Component({
  selector: 'app-show-one-machinery',
  templateUrl: './show-one-machinery.component.html',
  styleUrls: ['./show-one-machinery.component.css']
})
export class ShowOneMachineryComponent implements OnInit {
  public machinery: Machinery;
  public url: string;

  public title = 'Machinery';
  constructor(
    private machineryService: HumanResourcesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.title += ' ' + code;
      this.machineryService.getOne(code).subscribe(
        response => {
          this.machinery = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}

