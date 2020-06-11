import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProcessCreateComponent} from '../process-create/process-create.component';

@Component({
  selector: 'app-process-dialog',
  templateUrl: './process-dialog.component.html',
  styleUrls: ['./process-dialog.component.css']
})
export class ProcessDialogComponent implements OnInit {

  constructor(public dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  openDialog(): void{

    const dialogRef = this.dialog.open(ProcessCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
