import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProductionStatesComponent} from '../add-production-states.component'

@Component({
  selector: 'app-add-production-states-dialog',
  templateUrl: './add-production-states-dialog.component.html',
  styleUrls: ['./add-production-states-dialog.component.css']
})
export class AddProductionStatesDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddProductionStatesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
