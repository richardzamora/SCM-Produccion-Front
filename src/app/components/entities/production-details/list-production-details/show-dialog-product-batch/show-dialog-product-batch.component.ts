import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/list';

@Component({
  selector: 'app-show-dialog-product-batch',
  templateUrl: './show-dialog-product-batch.component.html',
  styleUrls: ['./show-dialog-product-batch.component.css']
})
export class ShowDialogProductBatchComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<ShowDialogProductBatchComponent>, @Inject(MAT_DIALOG_DATA) public dataObject: List) { }

  ngOnInit(): void {
  }

}
