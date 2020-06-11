import { Component, OnInit, ViewChild } from '@angular/core';
import { MachineryService } from 'src/app/services/machinery.service';
import { BranchOffice } from 'src/app/model/branchOffice';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.css']
})
export class MachineryComponent implements OnInit {

  listbranch = new  MatTableDataSource<BranchOffice>();
  headerbranch: string [] = ['code', 'name', 'capacidad', 'sucursal', 'estado'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private machineryService: MachineryService
  ) {
    this.machineryService.getAll().subscribe(
      (a: string) => {
        this.showbrach();
      }
    );
   }

  ngOnInit(): void {
    this.showbrach();
  }

  showbrach(){
    this.machineryService.getAll().subscribe(response => {
      this.listbranch = new MatTableDataSource<BranchOffice>(response);
      this.listbranch.sort = this.sort;
      this.listbranch.paginator = this.paginator;
    });
  }

  applyFilterbranch(valueFilter: string){
    this.listbranch.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
