import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/list';

@Component({
  selector: 'app-dialog-raw-material-requests',
  templateUrl: './dialog-raw-material-requests.component.html',
  styleUrls: ['./dialog-raw-material-requests.component.css']
})
export class DialogRawMaterialRequestsComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<DialogRawMaterialRequestsComponent>, @Inject(MAT_DIALOG_DATA) public data: List) { }

  ngOnInit(): void {
  }


}
