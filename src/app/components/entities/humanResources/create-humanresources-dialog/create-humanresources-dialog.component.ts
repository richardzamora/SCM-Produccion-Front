import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateHumanresourcesComponent} from '../create-humanresources/create-humanresources.component';

@Component({
  selector: 'app-create-humanresources-dialog',
  templateUrl: './create-humanresources-dialog.component.html',
  styleUrls: ['./create-humanresources-dialog.component.css']
})
export class CreateHumanresourcesDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateHumanresourcesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
