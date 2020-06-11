
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { MachineryTypesService } from 'src/app/services/machinery-types.service';
import { MachineryType } from 'src/app/model/machineryType';

@Component({
  selector: 'app-show-one-machinery-type',
  templateUrl: './show-one-machineryType.component.html',
  styleUrls: ['./show-one-machineryType.component.css'],
  providers: [MachineryTypesService]
})
export class ShowOneMachineryTypeComponent implements OnInit {
  public machineryType: MachineryType;
  public url: string;

  public title = 'MachineryType';
  constructor(
    private machineryTypeService: MachineryTypesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.title += ' ' + code;
      this.machineryTypeService.getOne(code).subscribe(
        response => {
          this.machineryType = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}

