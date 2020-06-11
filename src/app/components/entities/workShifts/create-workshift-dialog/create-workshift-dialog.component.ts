import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MachinstateCreateComponent} from '../../machinestate/create/machinstate-create/machinstate-create.component';
import {CreateWorkshiftComponent} from '../create-workshift/create-workshift.component';

@Component({
  selector: 'app-create-workshift-dialog',
  templateUrl: './create-workshift-dialog.component.html',
  styleUrls: ['./create-workshift-dialog.component.css']
})
export class CreateWorkshiftDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateWorkshiftComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
