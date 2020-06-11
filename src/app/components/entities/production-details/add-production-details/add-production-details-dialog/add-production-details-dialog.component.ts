import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProductionDetailsComponent} from '../add-production-details.component'
@Component({
  selector: 'app-add-production-details-dialog',
  templateUrl: './add-production-details-dialog.component.html',
  styleUrls: ['./add-production-details-dialog.component.css']
})
export class AddProductionDetailsDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddProductionDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
