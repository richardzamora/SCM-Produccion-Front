import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddRawMaterialRequestsComponent} from '../../add-raw-material-requests/add-raw-material-requests.component'
@Component({
  selector: 'app-add-raw-material-requests-dialog',
  templateUrl: './add-raw-material-requests-dialog.component.html',
  styleUrls: ['./add-raw-material-requests-dialog.component.css']
})
export class AddRawMaterialRequestsDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddRawMaterialRequestsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
