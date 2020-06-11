import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProductionsComponent} from '../../add-productions/add-productions.component'
@Component({
  selector: 'app-add-productions-dialog',
  templateUrl: './add-productions-dialog.component.html',
  styleUrls: ['./add-productions-dialog.component.css']
})
export class AddProductionsDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddProductionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
