import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateMachineryComponent} from '../create-machinery/create-machinery.component';

@Component({
  selector: 'app-create-machinery-dialog',
  templateUrl: './create-machinery-dialog.component.html',
  styleUrls: ['./create-machinery-dialog.component.css']
})
export class CreateMachineryDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateMachineryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
