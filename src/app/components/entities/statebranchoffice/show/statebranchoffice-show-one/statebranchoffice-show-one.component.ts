import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';


@Component({
  selector: 'app-statebranchoffice-show-one',
  templateUrl: './statebranchoffice-show-one.component.html',
  styleUrls: ['./statebranchoffice-show-one.component.css'],
  providers: [StateBranchOfficeService]
})
export class StatebranchofficeShowOneComponent implements OnInit {

  public statebranchoffice: StateBranchOffice;
  public title: string;
  public url: string;
  constructor(
    private statebranchofficeService: StateBranchOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {this.title = 'estado de la sucursal'; }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.statebranchofficeService.getStateBranchOffice(code).subscribe(
        response => {
          this.statebranchoffice = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}
