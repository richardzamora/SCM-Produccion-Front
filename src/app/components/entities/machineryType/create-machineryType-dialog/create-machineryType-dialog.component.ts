import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MachinstateCreateComponent} from '../../machinestate/create/machinstate-create/machinstate-create.component';
import {CreateMachineryTypeComponent} from '../create-machineryType/create-machineryType.component';

@Component({
  selector: 'app-create-machinery-type-dialog',
  templateUrl: './create-machineryType-dialog.component.html',
  styleUrls: ['./create-machineryType-dialog.component.css']
})
export class CreateMachineryTypeDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateMachineryTypeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
