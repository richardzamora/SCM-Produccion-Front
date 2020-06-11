import { Component, OnInit } from '@angular/core';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestAnalysisPK } from 'src/app/model/requestanalysis';
@Component({
  selector: 'app-requestanalysis-show-one',
  templateUrl: './requestanalysis-show-one.component.html',
  styleUrls: ['./requestanalysis-show-one.component.css'],
  providers: [RequestanalysisService]
})
export class RequestanalysisShowOneComponent implements OnInit {

  public requestanalysis: Requestanalysis;
  public requestanalysispk: RequestAnalysisPK;
  public title: string;
  public url: string;
  constructor(
    private requestanalysisService: RequestanalysisService,
    private route: ActivatedRoute,
    private router: Router
  ) {this.title = 'analisis request'; }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.requestanalysisService.getRequestanalyse(code).subscribe(
        response => {
          this.requestanalysis = response;
          this.requestanalysispk = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}
