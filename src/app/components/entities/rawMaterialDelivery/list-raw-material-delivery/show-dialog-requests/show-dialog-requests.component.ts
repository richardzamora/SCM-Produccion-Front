import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/list';


@Component({
  selector: 'app-show-dialog-requests',
  templateUrl: './show-dialog-requests.component.html',
  styleUrls: ['./show-dialog-requests.component.css']
})
export class ShowDialogRequestsComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<ShowDialogRequestsComponent>, @Inject(MAT_DIALOG_DATA) public data: List) { }

  ngOnInit(): void {
  }

}
