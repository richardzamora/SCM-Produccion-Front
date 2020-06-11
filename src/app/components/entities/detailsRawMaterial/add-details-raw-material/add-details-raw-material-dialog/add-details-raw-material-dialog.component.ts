import { Component, OnInit } from '@angular/core';
import {AddDetailsRawMaterialComponent} from '../add-details-raw-material.component'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-details-raw-material-dialog',
  templateUrl: './add-details-raw-material-dialog.component.html',
  styleUrls: ['./add-details-raw-material-dialog.component.css']
})
export class AddDetailsRawMaterialDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDetailsRawMaterialComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
