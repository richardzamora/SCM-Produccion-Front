import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddRawMaterialDeliveryComponent} from '../add-raw-material-delivery.component'

@Component({
  selector: 'app-add-raw-material-delivery-dialog',
  templateUrl: './add-raw-material-delivery-dialog.component.html',
  styleUrls: ['./add-raw-material-delivery-dialog.component.css']
})
export class AddRawMaterialDeliveryDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddRawMaterialDeliveryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
