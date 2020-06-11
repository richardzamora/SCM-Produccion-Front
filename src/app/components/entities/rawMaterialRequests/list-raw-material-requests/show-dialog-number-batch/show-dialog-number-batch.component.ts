import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/list';


@Component({
  selector: 'app-show-dialog-number-batch',
  templateUrl: './show-dialog-number-batch.component.html',
  styleUrls: ['./show-dialog-number-batch.component.css']
})
export class ShowDialogNumberBatchComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<ShowDialogNumberBatchComponent>, @Inject(MAT_DIALOG_DATA) public data: List) { }

  ngOnInit(): void {
  }

}
