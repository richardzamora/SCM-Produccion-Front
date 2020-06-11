
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { WorkShiftsService } from 'src/app/services/work-shifts.service';
import { WorkShift } from 'src/app/model/workShift';

@Component({
  selector: 'app-show-one-workshift',
  templateUrl: './show-one-workshift.component.html',
  styleUrls: ['./show-one-workshift.component.css'],
  providers: [WorkShiftsService]
})
export class ShowOneWorkshiftComponent implements OnInit {
  public workshift: WorkShift;
  public url: string;

  public title = 'Workshift';
  constructor(
    private workshiftService: WorkShiftsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.title += ' ' + code;
      this.workshiftService.getOne(code).subscribe(
        response => {
          this.workshift = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}

