import { Component, OnInit } from '@angular/core';
import {Humanresource} from '../../../../model/humanresource';
import {HumanResourcesService} from '../../../../services/human-resources.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Global} from '../../../../services/global';

@Component({
  selector: 'app-show-one-humanresources',
  templateUrl: './show-one-humanresources.component.html',
  styleUrls: ['./show-one-humanresources.component.css']
})
export class ShowOneHumanresourcesComponent implements OnInit {
  public humanresource: Humanresource;
  public url: string;

  public title = 'Humanresource';
  constructor(
    private humanresourceService: HumanResourcesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.title += ' ' + code;
      this.humanresourceService.getOne(code).subscribe(
        response => {
          this.humanresource = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}

